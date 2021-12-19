import { useState } from "react";

export const OrderPage = (props) => {

    const [showShipping, setShowShipping] = useState(false);
    const [showBilling, setShowBilling] = useState(false);

    let order = props.location.state.order;
    return(
        <div className="relative top-36">
            <div className="flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center items-center justify-center sm:justify-between sm:mx-36">
                    <div className="flex-1 sm:mr-10">
                        {order.cart.map((item, index) => {
                            return(
                                <div key={index.toString()} className="flex flex-1 justify-between items-center my-8" >
                                    <img className="h-24" src={`${process.env.REACT_APP_API_URL}/images/smallProdImgs/${item.imageName}`} alt="itemImage" />
                                    <span>size: {item.size}</span> 
                                    <p>price: {item.price}</p>
                                    <p>quantity: {item.quantity}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex-1 self-stretch flex flex-col justify-around sm:ml-10">
                        <div className="">
                            <hr />
                            <button onClick={() => setShowShipping(!showShipping)} className="my-10 border border-turq rounded py-1 px-1.5" >
                                Shipping Address
                            </button>
                            {showShipping &&
                            <div className="flex flex-col items-start ml-8">
                                {Object.keys(order.shippingAddress).map((key, index) => {
                                    return <p key={index.toString()}>{key}: {order.shippingAddress[key]}</p>
                                })}
                                <button onClick={()=>setShowShipping(!showShipping)} className="self-center my-10 border border-turq rounded py-1 px-1.5" >
                                    close
                                </button>
                            </div>}
                            <hr />
                        </div>
                        <div className="">
                            <hr />
                            <button onClick={() => setShowBilling(!showBilling)} className="my-10 border border-turq rounded py-1 px-1.5" >
                                Billing Address
                            </button>
                            {showBilling &&
                            <div className="flex flex-col items-start ml-8">
                                {Object.keys(order.billingAddress).map((key, index) => {
                                    return <p key={index.toString()}>{key}: {order.billingAddress[key]}</p>
                                })}
                                <button onClick={()=>setShowBilling(!showBilling)} className="self-center my-10 border border-turq rounded py-1 px-1.5" >
                                    close
                                </button>
                            </div>}
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="self-center flex flex-col items-start">
                    <span>Sub-total: ${order.subTotal}</span>
                    <span>Shipping: ${order.shippingPrice}</span>
                    <span>Tax collected: ${order.tax}</span>
                    <span>Total: ${order.total}</span>
                </div>
            </div>
            <div className="h-20v"></div>
        </div>
    )
}