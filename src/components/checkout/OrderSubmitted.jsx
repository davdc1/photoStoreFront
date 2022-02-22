import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Global } from "../contexts/GlobalContext"
import axios from "axios";

export const OrderSubmitted = () => {
    
    const userContext = useContext(Global);
    const [lastOrder, setLastOrder] = useState(null);

    useEffect(() => {
        getLastOrder();
    }, [])

    let getLastOrder = async () => {
        let {data} = await axios.get(`${process.env.REACT_APP_API_URL}/orders/user/${userContext.signedUser._id}`);
        setLastOrder(data.slice(-1)[0]);
    }

    return (
        <div className="relative top-24 h-70v">
            <div>
                <h2>your order has been submitted.</h2>
                {lastOrder &&
                <p>
                    <Link to={{
                        pathname: `/orderpage/${lastOrder._id}`,
                        state:{
                            order: lastOrder
                        }
                        }} className="mx-1 underline">review</Link>
                    your order or 
                    <Link to="/" className="mx-1 underline">return</Link>
                    to home page 
                </p>}
            </div>
        </div>
    )
}