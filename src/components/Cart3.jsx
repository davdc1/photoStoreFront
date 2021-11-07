
import React, { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import { Global } from './contexts/GlobalContext'

export const Cart3 = () => { 

        let coupon = [
            {code: "10off", dis: "10-percent"}
        ]
        
        // state = {
        //     userId: this.context ? this.context.signedUser._id : "",
        //     items: [],
        //     total: 0,
        //     couponOk: false,
        //     dis: "",
        //     editCart: false
        // }
        
    const globalState = useContext(Global);

    const [editCart, setEditCart] = useState(false);
    const [couponOk, setCouponOk] = useState(false);

    const getItemTotal = (items) => {
        let total = 0;
        if(items){
            for(let i = 0; i < items.length; i++){
                total += (parseInt(items[i].price) * items[i].quantity);
            }
        }
        return total;
    }
    
    const getItemsFromLocalStrorage = () => {
        return localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[];
    }

    const applyCoupon = (event) => {
        event.preventDefault();
        let disStr;
        for(let i = 0; i < coupon.length; i++){
            if(event.target[0].value === coupon[i].code){
                disStr = coupon[i].dis;
                if(disStr.split("-")[1] === "percent"){
                    //this.setState({couponOk: true, total: this.state.total * (1 - (1 / parseInt(disStr.split("-")[0])))})
                }
                break
            }
        }
        
    }

    // const emptyCart = () => {
    //     this.setState({items: [], total: 0});
    //     localStorage.setItem("cartItems", '[]');
    //     this.props.updateCartPrev();
    // }

    // const sendCart = async (cart) => {
    //     try{
    //         await axios.put(`${process.env.REACT_APP_API_URL}/users/updatecart/${this.context.signedUser._id}`, cart)
    //         .then((res) => console.log("put to cart res:", res));
    //     }
    //     catch(err){
    //         console.log("put to cart error:", err.message);
    //     }
    // }

    // const updateCart = async () => {
    //     await this.sendCart(this.state.items)
    //     this.context.getUserByEmail(this.context.signedUser.email)
    // }

        return (
            <div className="flex flex-col justify-center items-center my-14 relative top-24">
                <h1>Cart</h1>
                <div className="flex flex-col justify-center border border-2 rounded m-10 ">
                {globalState.cart.length > 0 &&  
                    <div className="flex justify-around">
                        <div className="flex-1 w-44"></div>
                        <div className="flex-1 w-44 mr-14"></div>
                        <span className="flex-1 mx-2">unit price</span>
                        <span className="flex-1 mx-2">quantity</span>
                        <span className="flex-1 ml-2">total</span>
                        <span className="flex-1 w-44"></span>
                    </div>
                    }
                    {globalState.cart.map((item, index) =>{
                        if(item.quantity){
                            return (<div key={index.toString()} className="flex justify-between items-center border-t-2 py-6 px-8">
                                        <Link to={{pathname:`/prodpage/${item.productId}`}}>
                                            <img src={`${process.env.REACT_APP_API_URL}/images/smallProdImgs/${item.imageName}`} alt="" className="h-20 mx-3" />
                                        </Link>
                                        <div className="flex flex-col">
                                            <Link to={{pathname:`/prodpage/${item.productId}`}}>
                                                <span className="font-semibold">{item.prodName}</span>
                                            </Link>
                                            <span className="mx-3">{item.size}</span>
                                        </div>
                                        <span className="mx-3">${item.price}</span>
                                        <div className="mx-3 flex items-strech ">
                                            {/* <span>quantity: {item.quantity}</span> */}
                                            <div className="flex items-strech mx-3">
                                                {editCart && <button onClick={()=>{globalState.minusQuant(item.idSize)}} className="w-6 border border-1 rounded-l">
                                                    -
                                                </button>}
                                                <span className="px-2 py-1 border border-1 ">
                                                    {item.quantity}
                                                </span>
                                                {editCart && <button onClick={()=>{globalState.plusQuant(item.idSize)}} className="w-6 border border-1 rounded-r">
                                                    +
                                                </button>}
                                            </div>
                                        </div>
                                        <span className="mx-3">${item.price * item.quantity}</span>
                                        <div>
                                            {editCart && <button onClick={() => globalState.removeItem(item.idSize)} className="text-xs">
                                                remove
                                            </button>}
                                        </div>
                                </div>)
                        }else{
                            return null
                        }
                    })}
                     {globalState.cart.length === 0 && <div className="border-t-2 py-6 px-8"><span>your cart is empty</span></div>}
                    <div className="border border-b-0 border-r-0 border-l-0 border-t-2">
                        {!editCart && <button onClick={() => setEditCart(!editCart)} className="text-sm my-1">Edit cart</button>}
                        {editCart && globalState.cart.length > 0 && <button onClick={globalState.emptyCart} className="text-sm my-1">empty cart</button>}
                        {editCart && <div><button onClick={() => {globalState.sendCart(); setEditCart(!editCart)}} className="text-sm my-1">Apply changes</button></div>}
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-start">
                        <span>Sub-total: ${globalState.total}</span>
                        <span>Shipping: $0 </span>
                        <span>Tax: ${(globalState.total * 0.17).toFixed(2)}</span>
                        {couponOk && <span className="font-semibold">Coupon approved</span>}
                        <span>Total: ${(globalState.total * 1.17).toFixed(2)}</span>
                    </div>
                    <div className="self-stretch flex flex-col justify-between items-end px-4">
                        <Link to="/catalog">
                            <button className="border border-1 border-turq rounded px-2">back to shop</button>
                        </Link>
                        <form onSubmit={applyCoupon}>
                            <input placeholder="Coupon code" className="border border-1 rounded-l px-2" type="text" />
                            <button className="border border-1 border-turq rounded-r px-2">apply</button>
                        </form>
                        <Link to="/checkout/form1">
                            <button className="border border-1 border-turq rounded px-2">Proceed to checkout</button>
                        </Link>
                    </div>

                </div>
                <div className="h-10v"></div>
            </div>
        )
    
}
