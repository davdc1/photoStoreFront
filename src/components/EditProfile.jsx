import axios from "axios";
import { useContext, useState } from "react"
import { Global } from './contexts/GlobalContext'


export const EditProfile = ({setShow}) => {
    
    const user = useContext(Global);
    const [error, setError] = useState(false)

    const editProfile = async (e) => {
        e.preventDefault();
        setError(false);
        let det = {
            name: {
                firstName: e.target[0].value || user.signedUser.name.firstName,
                lastName: e.target[1].value || user.signedUser.name.lastName
            },
            phone: e.target[2].value || user.signedUser.phone
        }

        await axios.put(`${process.env.REACT_APP_API_URL}/users/${user.signedUser._id}`, det)
        .then((res) => {
            user.setSignedUser(res.data);
            setShow();
        })
        .catch(() => {setError(true)})
    }


    return(
        <div>
            <form onSubmit={(e) => editProfile(e)} className="flex flex-col items-start">
                <div className="self-stretch flex justify-between">
                    <span>First name:</span>
                    <input className="ml-2 px-1 border rounded" type="text" defaultValue={user.signedUser.name.firstName} />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>Last name:</span>
                    <input className="ml-2 px-1 border rounded" type="text" defaultValue={user.signedUser.name.lastName} />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>Phone:</span>
                    <input className="ml-2 px-1 border rounded" type="text" defaultValue={user.signedUser.phone} />
                </div>
                <button className="border rounded px-1 mt-2" onClick={(e) => {e.preventDefault(); setShow()}}>Close & Discard changes</button>
                <button className="ml-2 border rounded px-1 mt-2" >Save changes</button>
            </form>
            {error && <p>error: update failed</p>}
        </div>
    )
}