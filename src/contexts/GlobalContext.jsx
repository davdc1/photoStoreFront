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
            total: 0,
            orderSent: false
        }
    }

    componentDidMount(){
        let items = this.state.signedUser ? this.state.signedUser.cart : this.getCartFromLocalStorage()
        this.setCart(items);
    }

    getCartFromLocalStorage = () => {
        return localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    }

    getUserByEmail = (email) => {
        axios.post(`${process.env.REACT_APP_API_URL}/users/getId`, {email: email})
        .then((res)=>{
            
            let mergedCart = this.compareCarts(JSON.parse(localStorage.getItem("cartItems")), res.data.cart);
            res.data.cart = mergedCart;
            
            this.setState({
                signedUser: res.data,
                cart: res.data.cart,
                inCartNum: this.getInCartNum(res.data.cart),
                total: this.getCartTotal(res.data.cart)
            })
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

        largerCart.forEach((item) => {
            largerCartObj[item.idSize] = item
        })

        smallerCart.forEach((item) => {
            if(largerCartObj[item.idSize]){
                if(largerCartObj[item.idSize].quantity < item.quantity){
                    largerCartObj[item.idSize] = item;
                }
            }else{
                largerCartObj[item.idSize] = item;
            }
        })

        localStorage.setItem('cartItems', '[]');
        return Object.values(largerCartObj);
    }

    setSignedUser = (user) => {
        this.setState({
            signedUser: user,
            cart: user.cart,
            total: this.getCartTotal(user.cart),
            inCartNum: this.getInCartNum(user.cart)
        });
    }

    addToCart = async (newItem) => {
        
        let items = [...this.state.cart];

        //handle duplicates:
        let sum = 0;
        for(let i = 0; i < items.length; i++){
            if(items[i].idSize === newItem.idSize){
                sum += parseInt(items[i].quantity);
                items.splice(i, 1);
                i--;
            }
        }

        newItem.quantity = (parseInt(newItem.quantity) + sum) <= 10 ? (parseInt(newItem.quantity) + sum) : 10;
        items.push(newItem);
        
        this.setCart(items, this.sendCart);
    }

    sendCart = async () => {
        if(this.state.signedUser){
            try{
                await axios.put(`${process.env.REACT_APP_API_URL}/users/updatecart/${this.state.signedUser._id}`, this.state.cart)
                .then((res) => {
                    //this.setSignedUser(res.data);
                });
            }
            catch(err){
            }
        }
    }

    emptyCart = () => {
        let items = [];
        this.setCart(items);
    }

    plusQuant = (itemIdSize) => {
        let items =  [...this.state.cart];
        let itemFound = items.find(({idSize}) => idSize === itemIdSize);
        if(itemFound.quantity < 10){
            itemFound.quantity++;
        }
        this.setCart(items);
    }

    minusQuant = (idSize) => {
        let items = [...this.state.cart];
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
        let items = [...this.state.cart]
        for(let i = 0; i < items.length; i++){
            if(items[i].idSize === idSize){
                items.splice(i, 1)
                break;
            }
        }

        this.setCart(items);
    }

    getCartTotal = (items) => {
        let total = items.reduce((prev, cur) => {
            return prev + parseInt(cur.price) * parseInt(cur.quantity);
        },0)
        return total;
    }


    getInCartNum(items){
        let sum =  items.reduce((prev, cur) => {
            return prev + cur.quantity
        },0)
        return sum;
    }

    setCart = (items, sendCartCb) => {
        if(this.state.signedUser){
            let user = {...this.state.signedUser}
            user.cart = [...items];
            this.setState({
                signedUser: user,
                cart: items,
                total: this.getCartTotal(items),
                inCartNum: this.getInCartNum(items)
            }, () => {
                if(sendCartCb){
                    sendCartCb();
                }
            });
            
        }else{
            localStorage.setItem("cartItems", JSON.stringify(items));
            this.setState({
                cart: items,
                total: this.getCartTotal(items),
                inCartNum: this.getInCartNum(items)
            })
        }
    }

    setOrderSent = (bool) => {
        this.setState({orderSent: bool});
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
                setOrderSent: this.setOrderSent,
                ...this.state}}>
                {this.props.children}
            </Global.Provider>
        )
    }
}

export default GlobalContextProvider;
