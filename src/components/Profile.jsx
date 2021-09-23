import React from 'react'

import user from "./stuff/user.json"

class Profile extends React.Component{
    constructor(props){
        super(props)
        console.log("props at profile:", props);
        this.state = {
            user: user
        }
    }

    render(){
        return (
            <div>
                <span>user profile</span>
                {/* <div>
                    <span>userName: {this.props.userLogged.userName}</span>
                    {this.props.userLogged.logged && <span>you're logged in</span>}
                </div> */}
                <p>user name: </p>
                <p>name: {user.name.firstName} {user.name.lastName}</p>
                <div>
                    <p>email: {user.email}</p>
                    <p>phone: {user.phone}</p>
                </div>
                <div>
                    <p>Address:</p>
                    {Object.keys(user.addresses[0]).map((key, index) => {
                        return <p key={index.toString()}>{key}: {user.addresses[0][key]}</p>
                    })}
                </div>
                <p><button>my orders</button></p>
            </div>
        )
    }
}

export default Profile