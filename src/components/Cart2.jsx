import { useContext, useState } from "react";
import { User } from './contexts/UserContext'

export const Cart2 = () => {

    const user = useContext(User);

    const [editCart, setEditCart] = useState(false);
    const [items, setItems] = useState(user.signedUser.cart)

    return(
        <div className="flex flex-col justify-center items-center my-14 relative top-24">
                <h1>Cart</h1>
                <div className="flex flex-col justify-center border border-2 rounded m-10 ">
                {items.length > 0 &&  
                    <div className="flex justify-around">
                        <div className="flex-1 w-44"></div>
                        <div className="flex-1 w-44 mr-14"></div>
                        <span className="flex-1 mx-2">unit price</span>
                        <span className="flex-1 mx-2">quantity</span>
                        <span className="flex-1 ml-2">total</span>
                        <span className="flex-1 w-44"></span>
                    </div>
                    }
                    {items.map((item, index) =>{
                        console.log("item at cart:", item);
                        if(item.quantity){
                            return (<div key={index.toString()} className="flex justify-between items-center border-t-2 py-6 px-8">
                                        <Link to={{pathname:`/prodpage/${item.productId}`, state:{product: item}}}>
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
                                                {editCart && <button onClick={()=>{this.minusQuant(item.idSize)}} className="w-6 border border-1 rounded-l">
                                                    -
                                                </button>}
                                                <span className="px-2 py-1 border border-1 ">
                                                    {item.quantity}
                                                </span>
                                                {editCart && <button onClick={()=>{this.plusQuant(item.idSize)}} className="w-6 border border-1 rounded-r">
                                                    +
                                                </button>}
                                            </div>
                                        </div>
                                        <span className="mx-3">${item.price * item.quantity}</span>
                                        <div>
                                            {editCart && <button onClick={() => this.removeItem(item.idSize)} className="text-xs">
                                                remove
                                            </button>}
                                        </div>
                                </div>)
                        }else{
                            return null
                        }
                    })}
                     {items.length === 0 && <div className="border-t-2 py-6 px-8"><span>your cart is empty</span></div>}
                    <div className="border border-b-0 border-r-0 border-l-0 border-t-2">
                        {!editCart && <button onClick={setEditCart} className="text-sm my-1">Edit cart</button>}
                        {editCart && items.length > 0 && <button onClick={this.emptyCart} className="text-sm my-1">empty cart</button>}
                        {editCart && <div><button onClick={() => this.applyCartChanges(items)} className="text-sm my-1">Apply changes</button></div>}
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
                <div className="h-10v"></div>
            </div>
    )
}