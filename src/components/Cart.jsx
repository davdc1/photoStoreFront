
import React from "react"
import { Link } from 'react-router-dom'
//import couponJson from './stuff/coupon.json'

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.coupon = [
            {code: "10off", dis: "10-percent"}
        ]
        this.items = this.getItemList();
        this.state = {
            items: this.items,
            total: this.getItemTotal(this.items),
            couponOk: false,
            dis: ""
        }
    }

    componentDidMount(){
        this.getItemList();
    }

    getItemTotal(items){
        let total = 0;
        if(items){
            for(let i = 0; i < items.length; i++){
                total += (parseInt(items[i].price) * items[i].quantity);
            }
        }
        return total;
    }
    
    getItemList(){
        return localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[];
    }

    applyCoupon = (event) => {
        event.preventDefault();
        let disStr;
        for(let i = 0; i < this.coupon.length; i++){
            if(event.target[0].value === this.coupon[i].code){
                disStr = this.coupon[i].dis;
                if(disStr.split("-")[1] === "percent"){
                    this.setState({couponOk: true, total: this.state.total * (1 - (1 / parseInt(disStr.split("-")[0])))})
                }
                break
            }
        }
        
    }

    
    plusQuant(idSize){
        let items =  this.state.items;
        for(let i = 0; i < items.length; i++){
            if(items[i].idSize === idSize){
                if(items[i].quantity < 10){
                    items[i].quantity += 1;
                }
                break;
            }
        }
        localStorage.setItem("cartItems", JSON.stringify(items));
        this.setState({items: items, total: this.getItemTotal(items)})
        this.props.updateCartPrev();
    }

    minusQuant(idSize){
        let items = this.state.items;
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
        localStorage.setItem("cartItems", JSON.stringify(items));
        this.setState({items: items, total: this.getItemTotal(items)})
        this.props.updateCartPrev();
    }

    removeItem = (idSize) => {
        let items = this.state.items
        for(let i = 0; i < items.length; i++){
            if(items[i].idSize === idSize){
                items.splice(i, 1)
                break;
            }
        }
        this.setState({items: items, total: this.getItemTotal(items)});
        localStorage.setItem("cartItems", JSON.stringify(items));
        this.props.updateCartPrev();
    }

    emptyCart = () => {
        this.setState({items: [], total: 0});
        localStorage.setItem("cartItems", []);
        this.props.updateCartPrev();
    }

    render(){
        return (
            <div className="flex flex-col justify-center items-center my-14">
                <h1>Cart</h1>
                <div className="flex flex-col justify-center border border-2 rounded m-10 ">
                {this.state.items.length > 0 &&  
                    <div className="flex justify-around">
                        <div className="flex-1 w-44"></div>
                        <div className="flex-1 w-44 mr-14"></div>
                        <span className="flex-1 mx-2">unit price</span>
                        <span className="flex-1 mx-2">quantity</span>
                        <span className="flex-1 ml-2">total</span>
                        <span className="flex-1 w-44"></span>
                    </div>
                    }
                    {this.state.items.map((item, index) =>{
                        if(item.quantity){
                            return (<div key={index.toString()} className="flex justify-between items-center border-t-2 py-6 px-8">
                                        <Link to={{pathname:`/prodpage/${item.id}`}}><img src={item.image} alt="" className="h-20 mx-3" /></Link>
                                        <div className="flex flex-col">
                                            <Link to={{pathname:`/prodpage/${item.id}`}}><span className="font-semibold">{item.prodName}</span></Link>
                                            <span className="mx-3">{item.size}</span>
                                        </div>
                                        <span className="mx-3">${item.price}</span>
                                        <div className="mx-3 flex items-strech ">
                                            {/* <span>quantity: {item.quantity}</span> */}
                                            <div className="flex items-strech mx-3">
                                                <button onClick={()=>{this.minusQuant(item.idSize)}} className="w-6 border border-1 rounded-l">-</button>
                                                <span className="px-2 py-1 border border-1 ">{item.quantity}</span>
                                                <button onClick={()=>{this.plusQuant(item.idSize)}} className="w-6 border border-1 rounded-r">+</button>
                                            </div>
                                        </div>
                                        <span className="mx-3">${item.price * item.quantity}</span>
                                        <div>
                                            <button onClick={() => this.removeItem(item.idSize)} className="text-xs">remove</button>
                                        </div>
                                </div>)
                        }
                    })}
                     {this.state.items.length === 0 && <div className="border-t-2 py-6 px-8"><span>your cart is empty</span></div>}
                    <div className="border border-b-0 border-r-0 border-l-0 border-t-2">
                        {this.state.items.length > 0 && <button onClick={this.emptyCart} className="text-sm my-1">empty cart</button>}
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-start">
                        <span>Sub-total: ${this.state.total}</span>
                        <span>Shipping: $0 </span>
                        <span>Tax: ${(this.state.total * 0.17).toFixed(2)}</span>
                        {this.state.couponOk && <span className="font-semibold">Coupon approved</span>}
                        <span>Total: ${(this.state.total * 1.17).toFixed(2)}</span>
                    </div>
                    <div className="self-stretch flex flex-col justify-between items-end px-4">
                        <Link to="/catalog">
                            <button className="border border-1 border-turq rounded px-2">back to shop</button>
                        </Link>
                        <form onSubmit={this.applyCoupon}>
                            <input placeholder="Coupon code" className="border border-1 rounded-l px-2" type="text" />
                            <button className="border border-1 border-turq rounded-r px-2">apply</button>
                        </form>
                        <Link to="/checkout/form1">
                            <button className="border border-1 border-turq rounded px-2">Proceed to checkout</button>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default Cart