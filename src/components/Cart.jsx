
import React, { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { Global } from './contexts/GlobalContext'

export const Cart = () => { 

    let coupon = [
        {code: "10off", dis: "10-percent"}
    ]
        
    const globalState = useContext(Global);
    const [editCart, setEditCart] = useState(false);

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

        return (
            <div className="flex flex-col justify-center items-center my-14 relative top-24">
                <h1>Cart</h1>
                <div className="flex flex-col sm:justify-center items-stretch border border-2 rounded sm:m-10 w-90v sm:w-auto">
                {globalState.cart.length > 0 &&  
                    <div className="hidden sm:flex justify-around">
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
                            return (<div key={index.toString()} className="flex justify-center border-t-2 sm:py-6 sm:px-8 py-2 px-3">
                                        <Link to={{pathname:`/prodpage/${item.productId}`}}>
                                            <img src={`${process.env.REACT_APP_API_URL}/images/smallProdImgs/${item.imageName}`} alt="" className="w-16 sm:w-auto sm:h-72 mx-3" />
                                        </Link>
                                        <div className="sm:flex-1 flex flex-col sm:flex-row justify-between sm:items-center items-start ">
                                            <div className="flex flex-col">
                                                <Link to={{pathname:`/prodpage/${item.productId}`}}>
                                                    <span className="font-semibold">{item.prodName}</span>
                                                </Link>
                                                <div>
                                                    <span className="sm:hidden">size: </span>
                                                    <span className="mx-3">{item.size}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="sm:hidden">unit price: </span>
                                                <span className="mx-3">${item.price}</span>
                                            </div>
                                            <div className="sm:mx-3 flex sm:items-strech items-start">
                                                {/* <span>quantity: {item.quantity}</span> */}
                                                <div className="flex sm:items-strech sm:mx-3">
                                                    <span className="sm:hidden mr-2">quantity:</span>
                                                    {editCart && <button onClick={()=>{globalState.minusQuant(item.idSize)}} className="w-6 border border-1 rounded-l">
                                                        -
                                                    </button>}
                                                    <span className="px-2 py-1 border border-1 ">{item.quantity}</span>
                                                    {editCart && <button onClick={()=>{globalState.plusQuant(item.idSize)}} className="w-6 border border-1 rounded-r">
                                                        +
                                                    </button>}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="sm:hidden">total: </span>
                                                <span className="mx-3">${item.price * item.quantity}</span>
                                            </div>
                                            <div>
                                                {editCart && <button onClick={() => globalState.removeItem(item.idSize)} className="text-xs">
                                                    remove
                                                </button>}
                                            </div>
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
                <div className="flex flex-col sm:flex-row items-start self-start sm:self-center ml-6 sm:ml-0">
                    <div className="flex flex-col items-start">
                        <span>Sub-total: ${globalState.total}</span>
                        <span>Total: ${(globalState.total * 1.17).toFixed(2)}</span>
                        <span>Shipping & taxes are calculated at checkout </span>
                    </div>
                    <div className="self-stretch flex flex-col justify-between items-start sm:items-end sm:px-4">
                        <Link to="/catalog">
                            <button className="border border-1 border-turq rounded px-2">back to shop</button>
                        </Link>
                        <Link to="/checkout/form1">
                            <button className="border border-1 border-turq rounded px-2">Proceed to checkout</button>
                        </Link>
                    </div>

                </div>
                <div className="h-10v"></div>
            </div>
        )
    
}
