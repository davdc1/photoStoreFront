import axios from "axios";
import React from "react";

export const User = React.createContext();

class UserContextProvider extends React.Component{

    state = {
        signedUser: ""
    }

    getUserByEmail = (email) => {
        console.log("get user at context");
        axios.post(`${process.env.REACT_APP_API_URL}/users/getId`, {email: email})
        .then((res)=>{
        this.setState({signedUser: res.data})
        console.log("res at context", res);
        })
      }

    setSignedUser = (user) => {
        this.setState({signedUser: user});
    }

    render(){
        return(
            <User.Provider value={{
                getUserByEmail: this.getUserByEmail,
                setSignedUser: this.setSignedUser,
                ...this.state}}>
                {this.props.children}
            </User.Provider>
        )
    }
}

export default UserContextProvider;