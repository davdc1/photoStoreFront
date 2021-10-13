import React from 'react'
import { Link } from 'react-router-dom';
import auth from '../firebase/firebase'

import users from "./stuff/users.json"

import { LoggedUserContext } from '../App';


class Profile extends React.Component{
    constructor(props){
        super(props)
        console.log("props at profile:", props);
        this.state = {
            user: users[0]
        }
    }

    componentDidMount(){
        console.log("user:", auth.auth().currentUser);
    }

    render(){
        return (
            <LoggedUserContext.Consumer>
            {(setUserLogged, loggedUser) => {console.log('logged',loggedUser); return(<div>
                <span>user profile</span>
                {/* <div>
                    <span>userName: {this.props.userLogged.userName}</span>
                    {this.props.userLogged.logged && <span>you're logged in</span>}
                </div> */}
                <p>user name:</p>
                <p>name: {this.state.user.name.firstName} {this.state.user.name.lastName}</p>
                <div>
                    <p>email: {this.state.user.email}</p>
                    <p>phone: {this.state.user.phone}</p>
                </div>
                <div>
                    <p>Address:</p>
                    {Object.keys(this.state.user.addresses[0]).map((key, index) => {
                        return <p key={index.toString()}>{key}: {this.state.user.addresses[0][key]}</p>
                    })}
                </div>
                <p>
                    <button onClick={setUserLogged}>click</button>
                    <button className="mx-8" >my orders</button>
                    {this.state.user.authorization === "admin" && <Link to="/admin" >admin page</Link>}
                </p>
            </div>)}}
            </LoggedUserContext.Consumer>
        )
    }
}

export default Profile