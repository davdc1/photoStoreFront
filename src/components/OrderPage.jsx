import { useState } from "react";

export const OrderPage = (props) => {
    console.log("ordrPage props:", props);

    const [showShipping, setShowShipping] = useState(false);
    const [showBilling, setShowBilling] = useState(false);

    let order = props.location.state.order;

    return(
        <div className="px-24 my-10">
            <h1>Order Id: {order._id}</h1>
            {order.cart.map((item, index) => {
                return(
                    <div className="flex justify-between items-center my-8" >
                        <img className="h-24" src={`/images/smallProdImgs/${item.imageName}`} alt="itemImage" />
                        <span>size: {item.size}</span> 
                        <p>price: {item.price}</p>
                        <p>quantity: {item.quantity}</p>
                    </div>
                )
                })}

            <div className="flex flex-col items-start">
                <span>Sub-total: ${order.subTotal}</span>
                <span>Shipping: ${order.shippingPrice}</span>
                <span>Tax collected: ${order.tax}</span>
                <span>Total: ${order.total}</span>
            </div>
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
    )
}