import { useState } from "react";

export const OrderPage = (props) => {
    console.log("ordrPage props:", props);

    const [showShipping, setShowShipping] = useState(false);
    const [showBilling, setShowBilling] = useState(false);

    let order = props.location.state.order;

    return(
        <div className="relative top-24 px-24 my-10 flex flex-col items-center justify-center">
            <div className-="flex">
                {/* items: */}
                <div>
                    <h1>Order Id: {order._id}</h1>
                    {order.cart.map((item, index) => {
                        return(
                            <div key={index.toString()} className="flex justify-between items-center my-8" >
                                <img className="h-24" src={`${process.env.REACT_APP_API_URL}/images/smallProdImgs/${item.imageName}`} alt="itemImage" />
                                <span>size: {item.size}</span> 
                                <p>price: {item.price}</p>
                                <p>quantity: {item.quantity}</p>
                            </div>
                        )
                        })}
                </div>
                {/* addresses: */}
                <div className="flex flex-col">
                    {/* shipping address: */}
                    <div className="my-8">
                        <hr />
                        <button onClick={() => setShowShipping(!showShipping)} className="my-10 border border-turq rounded py-1 px-1.5" >
                            Shipping Address
                        </button>
                        {showShipping &&
                        <div className="flex flex-col items-start">
                            {Object.keys(order.shippingAddress).map((key, index) => {
                                return <p key={index.toString()}>{key}: {order.shippingAddress[key]}</p>
                            })}
                            <button onClick={()=>setShowShipping(!showShipping)} className="self-center my-10 border border-turq rounded py-1 px-1.5" >
                                close
                            </button>
                        </div>}
                        <hr />
                    </div>
                    {/* billing address: */}
                    <div className="my-8">
                        <hr />
                        <button onClick={() => setShowBilling(!showBilling)} className="my-10 border border-turq rounded py-1 px-1.5" >
                            Billing Address
                        </button>
                        {showBilling &&
                        <div className="flex flex-col items-start">
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
            {/* total: */}
            <div className="flex flex-col items-start">
                <span>Sub-total: ${order.subTotal}</span>
                <span>Shipping: ${order.shippingPrice}</span>
                <span>Tax collected: ${order.tax}</span>
                <span>Total: ${order.total}</span>
            </div>
            <div className="h-10v"></div>
        </div>
    )
}