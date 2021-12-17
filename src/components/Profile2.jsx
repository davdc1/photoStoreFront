import axios from "axios";
import { useContext, useState } from "react"
import { User } from './contexts/UserContext'
import { Global } from "./contexts/GlobalContext";
import { EditProfile } from "./EditProfile";
import { OrderCard } from "./OrderCard";
import { Link } from "react-router-dom";

export const Profile2 = (getUserByEmail) => {
    //const user = useContext(User).signedUser;
    const user = useContext(Global).signedUser;
    
    const [showOrders, setShowOrders] = useState(false);
    const [orders, setOrders] = useState([]);
    const [ordersLoading, setOrdersLoading] = useState(true);
    const [showEditProfile, setEditProfile] = useState(false);
    
    console.log("user:", global);

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
        return(
        <div className="relative top-24">
            <p>error</p>
            <div className="h-10v"></div>
        </div>
        )
    }

    return(
        <div className="relative top-24">
                <div className="flex justify-center items-center my-16 ">
                    <div className="flex flex-col self-start justify-start items-start">
                        <p className="my-2 text-4xl" >{`Hello ${user.name.firstName} ${user.name.lastName}`}</p>
                        <button className="border-2 rounded border-purple-400 px-1.5 py-1">{user.authorization === "admin" && <Link to="/admin" >go to admin page</Link>}</button>
                    </div>
                    <div className="flex flex-col ml-10">
                        {!showEditProfile &&
                        <p className="flex flex-col items-start">
                            <span>Your information:</span>
                            <span>{`Name: ${user.name.firstName} ${user.name.lastName}`}</span>
                            <span>{`Email: ${user.email}`}</span>
                            <span>{`Phone: ${user.phone}`}</span>
                            <button onClick={() => setEditProfile(!showEditProfile)} className="border rounded px-1 mt-2">Edit</button>
                        </p>}
                        {showEditProfile && <EditProfile setShow={() => setEditProfile(!showEditProfile)} />}
                        <div className="flex flex-col items-start mt-10">
                            <button onClick={() => {getOrders(); setShowOrders(!showOrders)}} className="border rounded border-turq px-1.5 py-1" >
                                Click to see your orders
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
            <div className="h-10v"></div>
        </div>
    )
}