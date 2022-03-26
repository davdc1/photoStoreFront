
import React, { useContext } from "react"
import { Global } from '../../contexts/GlobalContext'
import CartTable from "./CartTable"
import { Link } from 'react-router-dom'

export const Cart = () => {

    const context = useContext(Global);
    
    //temp:
    let coupon = [
        {code: "10off", dis: "10-percent"}
    ]

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
                <CartTable/>
                <div className="flex flex-col sm:flex-row items-start self-start sm:self-center ml-6 sm:ml-0">
                    <div className="flex flex-col items-start">
                        <span>Sub-total: ${context.total}</span>
                        <span>Total: ${(context.total * 1.17).toFixed(2)}</span>
                        <span>Shipping & taxes are calculated at checkout </span>
                    </div>
                    <div className="self-stretch flex flex-col justify-between items-start sm:items-end sm:px-4">
                        <Link to="/catalog">
                            <button className="border border-1 border-turq rounded px-2">back to shop</button>
                        </Link>
                        {context.cart.length > 0 &&
                        <Link onClick={() => context.setOrderSent(false)} to={{
                            pathname:"/checkout/billingAddress",
                            state:{
                                from: '/cart'
                            }}}>
                            <button className="border border-1 border-turq rounded px-2">Proceed to checkout</button>
                        </Link>}
                    </div>

                </div>
                <div className="h-10v"></div>
            </div>
        )
    
}
