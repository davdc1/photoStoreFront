import { Link } from "react-router-dom"

export const OrderCard = ({order}) => {
    console.log("order at OrderCard:", order)
    return(

        <Link to={{pathname: `/orderpage/${order._id}`, state: {order: order}}}>
            <div className="flex flex-col items-center border my-10 px-14 py-10">
                <p className="mx-4 text-xl" >{order.date}</p>
                <div className="flex items-center justify-between mx-4 ">
                    <img src={`${process.env.REACT_APP_API_URL}/images/smallProdImgs/${order.cart[0]?.imageName}`} alt="" className="mx-4 h-24" />
                    <span className="mx-4 ">{order.cart[0]?.size}</span>
                    {order.cart.length > 1 && <p className="font-semibold">and {order.cart.length - 1} more item(s)</p>}
                </div>
                <div className="mt-6 text-lg">
                    total: {order.total.toFixed(2)}
                </div>
            </div>
        </Link>
    )
}