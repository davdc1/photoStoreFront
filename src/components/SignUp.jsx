import React from "react"
import auth from "../firebase/auth"
import { Redirect } from 'react-router-dom'

import { User } from './contexts/UserContext' 
import axios from "axios"

class SignUp extends React.Component{

    constructor(props){
        super(props)
        console.log("props at signup:", props);
        this.state = {
            redirect: false,
            redirectTo: props.location.state ? props.location.state.from : null
        }
    }

    /*CHECK: remove any unneccessary props*/

    
    static contextType = User;

    redirect = () => {
        console.log("at redirect");
        if(this.state.redirectTo){
            this.setState({redirect: true}, () => {console.log("rdirect2", this.state.redirect)});
        }else{
            this.props.history.goBack();
        }
    }
    

    createAcount = (e) => {
        e.preventDefault();
        //validate email and then:
        if(e.target[3].value === e.target[4].value){
            this.newUser = {
                firstName: e.target[0].value,
                lastName: e.target[1].value
            }
            auth.signUp(e.target[2].value, e.target[3].value, this.onCreateAcount)
        }
    }

    onCreateAcount = (user) => {
        this.postNewUser(user)
        .then(() => {this.context.getUserByEmail(user.email)})
    }

    async postNewUser(user){
        await axios.post(`${process.env.REACT_APP_API_URL}/users`,
        {
            email: user.email,
            name:{
                firstName: this.newUser.firstName,
                lastName: this.newUser.lastName
            }
        })
    }

    handleLogIn = (e) => {
        e.preventDefault();
        //validation required
        auth.login(e.target[0].value, e.target[1].value, this.onLogin)
    }

    onLogin = async (user) => {
        console.log("onLogin:", user.user.email);
        await this.context.getUserByEmail(user.user.email)
        this.redirect();
    }


    render(){
        console.log("at sigup:", this.context);
        return(
            <div className="relative top-24 my-8">
                {this.state.redirect && this.state.redirectTo !== "" && <Redirect to={this.state.redirectTo}/>}
                <h1>sign up \ sign in</h1>
                <div className="flex justify-center items-stretch my-8">
                    <form onSubmit={this.handleLogIn} className="flex flex-col border border-light border-1 rounded mx-8">
                        <span>Log in</span>
                        <div className="flex justify-between my-4">
                            <span className="mx-2">Email</span>
                            <input className="border border-light border-1 rounded mx-2" type="text" />
                        </div>
                        <div className="flex justify-between my-4">
                            <span className="mx-2">Password</span>
                            <input className="border border-light border-1 rounded mx-2" type="text" />
                        </div>
                        <button className="border border-turq border-1 rounded mx-2  px-2 py-1">LogIn</button>
                        <button className="text-xs my-2 item-center">forgot password?</button>
                    </form>
                    <form onSubmit={this.createAcount} className="border border-light border-1 rounded mx-8">
                        <span>Create account</span>
                        <div className="flex justify-between my-4">
                            <div>
                                <span className="mx-2">First name</span>
                                <input className="border border-light border-1 rounded mx-2" type="text" />
                            </div>
                            <div>
                                <span className="mx-2">Last name</span>
                                <input className="border border-light border-1 rounded mx-2" type="text" />
                            </div>
                        </div>
                        <div className="flex justify-between my-4">
                            <span className="mx-2">Email</span>
                            <input className="border border-light border-1 rounded mx-2" type="text" />
                        </div>
                        <div className="flex justify-between my-4">
                            <span className="mx-2">Password</span>
                            <input className="border border-light border-1 rounded mx-2" type="text" />
                        </div>
                        <div className="flex justify-between my-4">
                            <span className="mx-2">confirm password</span>
                            <input className="border border-light border-1 rounded mx-2" type="text" />
                        </div>
                        <button className="border border-turq border-1 rounded mx-2 mb-4 px-2 py-1">create account</button>
                    </form>
                </div>
            </div>

        )
    }

}

export default SignUp