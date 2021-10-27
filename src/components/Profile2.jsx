import axios from "axios";
import { useContext, useState } from "react"
import { User } from './contexts/UserContext' 
import { OrderCard } from "./OrderCard";

export const Profile2 = (getUserByEmail) => {
    const user = useContext(User).signedUser;
    const [showOrders, setShowOrders] = useState(false);
    const [orders, setOrders] = useState([]);
    const [ordersLoading, setOrdersLoading] = useState(true);
    
    
    let getOrders = async () => {
        let {data} = await axios.get(`${process.env.REACT_APP_API_URL}/orders/user/${user._id}`);
        setOrders(data);
        setOrdersLoading(false);
    }
    

    let editProfile = (e) => {
        e.preventDefault();
        let details = {
            name:{
                firstName: e.target[0].value,
                lastName: e.target[1].value
            },
            phone: e.target[2].value
        }
        sendChages(details);
    }

    let sendChages = async (body) => {
        let res = await axios.put(`${process.env.REACT_APP_API_URL}/users/${user._id}`, body)
        .then(() => {getUserByEmail(user.email)})
        .catch((error) => console.log("error at send changes:", error));
    }

    if(!user){
        return(<div><p>error</p></div>)
    }

    return(
        <div>
            <div className="flex flex-col items-center my-16">
                <p>temp: 
                    <button onClick={() => console.log(user)} >log user</button>
                </p>
                <div className="flex flex-col items-start">
                    <p className="my-2" >{`Hello ${user.name.firstName} ${user.name.lastName}`}</p>
                    <p className="my-2" >{`(${user.email})`}</p>
                    <p className="my-2" >{`phone: ${user.phone}`}</p>
                </div>
                <div className="mx-16">
                    <button onClick={() => {getOrders(); setShowOrders(!showOrders)}} className="border rounded border-turq px-1.5 py-1" >
                        your orders
                    </button>
                    {showOrders && <div>
                        {!ordersLoading &&
                            <div>
                                <button onClick={() => setShowOrders(!showOrders)}>see less</button>
                                {orders.map((order, index) => {
                                    return <OrderCard key={index.toString()} order={order}/>
                                    })}
                            </div>
                        }
                        {
                            ordersLoading &&
                            <div>
                                Loading
                            </div>
                        }
                        
                    </div>}
                </div>
            </div>
        </div>
    )
}