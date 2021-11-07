import axios from "axios";
import React from "react";

export const Global = React.createContext();

class GlobalContextProvider extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            signedUser: "",
            cart: [],
            inCartNum: "",
            total: 0
        }
    }

    componentDidMount(){
        console.log("is it running???? if so, renove contsructor, like in UserContext. maybe.");
        let items = this.state.signedUser ? this.state.signedUser.cart : this.getCartFromLocalStorage()
        this.setCart(items);
    }

    getCartFromLocalStorage = () => {
        return localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    }

    getUserByEmail = (email) => {
        axios.post(`${process.env.REACT_APP_API_URL}/users/getId`, {email: email})
        .then((res)=>{
            
            //let mergedCart = this.compareCarts(JSON.parse(localStorage.getItem("cartItems")), res.data.cart);
            //res.data.cart = mergedCart;
            //localStorage.setItem('cartItems', JSON.stringify(mergedCart));
            
            this.setState({
                signedUser: res.data,
                cart: res.data.cart
            })
            console.log("res at globalContext", res);
        })
    }

    compareCarts = (localCart, dbCart) => {
        if(localCart.length === 0 && dbCart.length === 0){
            return [];
        }
        
        let [largerCart, smallerCart] =
        localCart.length > dbCart.length ?
        [localCart, dbCart] :
        [dbCart, localCart];

        let largerCartObj = {};

        for(let i = 0; i < largerCart.length; i++){
            largerCartObj[largerCart[i].idSize] = largerCart[i];
        }

        for(let i = 0; i < smallerCart.length; i++){
            if(largerCartObj[smallerCart[i].idSize]){
                if(largerCartObj[smallerCart[i].idSize].quantity < smallerCart[i].quantity){
                    largerCartObj[smallerCart[i].idSize] = smallerCart[i];
                }
            }else{
                largerCartObj[smallerCart[i].idSize] = smallerCart[i];
            }
        }

        return Object.values(largerCartObj);
    }

    setSignedUser = (user) => {
        this.setState({
            signedUser: user,
            inCartNum: this.getInCartNum(user.cart)
        });
    }

    getInCartNum = (items) => {
        let sum = 0;
        for(let i = 0; i < items.length; i++){
            sum += items[i].quantity;
        }
        return sum;
    }

    
    addToCart = async (item) => {
        
        console.log("item added:", item);

        let items = this.state.cart;

        //handle duplicates:
        let sum = 0;
        for(let i = 0; i < items.length; i++){
            if(items[i].idSize === item.idSize){
                
                sum += parseInt(items[i].quantity);
                items.splice(i, 1);
                i--;
            }
        }
        
        item.quantity = (parseInt(item.quantity) + sum) <= 10 ? (parseInt(item.quantity) + sum) : 10;
        items.push(item);
        
        localStorage.setItem("cartItems", JSON.stringify(items));
        
        if(this.state.signedUser){
            let user = this.state.signedUser;
            user.cart = items;
            this.setState({
                signedUser: user,
                cart: items
            })
            this.sendCart(items);
        }else{
            this.setState({
                cart: items
            })
        }

        console.log("signedUser.cart:", this.state.signedUser.cart);
        console.log("cart at context:", this.state.cart);
        console.log("cart at storage:", JSON.parse(localStorage.getItem('cartItems')));
        console.log("inCartNum:", this.getInCartNum(items));
    }

    sendCart = async () => {
        console.log("send send send send send send send send send");
        console.log("state at sendCArt:", this.state);
        if(this.state.signedUser){
            try{
                await axios.put(`${process.env.REACT_APP_API_URL}/users/updatecart/${this.state.signedUser._id}`, this.state.cart)
                .then((res) => {
                    console.log("updateCart res at GlobalContext:", res);
                    this.setSignedUser(res.data);
                });
            }
            catch(err){
                console.log("put to cart error:", err.message);
            }
        }
    }

    emptyCart = () => {
        let items = [];
        this.setCart(items);
    }

    plusQuant = (idSize) => {
        let items =  this.state.cart;
        for(let i = 0; i < items.length; i++){
            if(items[i].idSize === idSize){
                if(items[i].quantity < 10){
                    items[i].quantity += 1;
                }
                break;
            }
        }
        
        this.setCart(items);
    }

    minusQuant = (idSize) => {
        let items = this.state.cart;
        for(let i = 0; i < items.length; i++){
            if(items[i].idSize === idSize){
                if(items[i].quantity <= 1){
                    items.splice(i, 1);
                }else{
                    items[i].quantity -= 1;
                }
                break;
            }
        }
        
        this.setCart(items);
    }

    removeItem = (idSize) => {
        let items = this.state.cart
        for(let i = 0; i < items.length; i++){
            if(items[i].idSize === idSize){
                items.splice(i, 1)
                break;
            }
        }

        this.setCart(items);
    }

    getCartTotal = (items) => {
        let total = 0;

        for(let i = 0; i < items.length; i++){
            total += parseInt(items[i].price) * parseInt(items[i].quantity);
        }
        return total;
    }

    getInCartNum(items){
        let sum = 0;
        for(let i = 0; i < items.length; i++){
            sum += items[i].quantity;
        }
        return sum;
    }

    setCart = (items) => {
        localStorage.setItem("cartItems", JSON.stringify(items));
       
        if(this.state.signedUser){
            let user = this.state.signedUser
            user.cart = items;
            this.setState({
                signedUser: user,
                cart: items,
                total: this.getCartTotal(items),
                inCartNum: this.getInCartNum(items)
            })

        }else{
            this.setState({
                cart: items,
                total: this.getCartTotal(items),
                inCartNum: this.getInCartNum(items)
            })
        }
    }

    render(){
        return(
            <Global.Provider value={{
                getUserByEmail: this.getUserByEmail,
                setSignedUser: this.setSignedUser,
                addToCart: this.addToCart,
                minusQuant:this.minusQuant,
                plusQuant: this.plusQuant,
                removeItem:this.removeItem,
                emptyCart: this.emptyCart,
                sendCart: this.sendCart,
                ...this.state}}>
                {this.props.children}
            </Global.Provider>
        )
    }
}

export default GlobalContextProvider;
