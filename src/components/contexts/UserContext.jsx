import axios from "axios";
import React from "react";

export const User = React.createContext();

class UserContextProvider extends React.Component{

    state = {
        signedUser: "",
        cart: [],
        inCartNum: ""
    }

    getUserByEmail = (email) => {
        axios.post(`${process.env.REACT_APP_API_URL}/users/getId`, {email: email})
        .then((res)=>{
            //let mergedCart = this.compareCarts(JSON.parse(localStorage.getItem("cartItems")), res.data.cart);
            //res.data.cart = mergedCart;
            //localStorage.setItem('cartItems', JSON.stringify(mergedCart));
            this.setState({signedUser: res.data})
            console.log("res at context", res);
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

    render(){
        return(
            <User.Provider value={{
                getUserByEmail: this.getUserByEmail,
                setSignedUser: this.setSignedUser,
                ...this.state}}>
                {this.props.children}
            </User.Provider>
        )
    }
}

export default UserContextProvider;