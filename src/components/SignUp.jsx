import React from "react"
import auth from "../firebase/auth.js"
import { Redirect } from 'react-router-dom'

class SignUp extends React.Component{

    constructor(props){
        super(props)
        console.log("props at signup:", props);
        this.state = {
            redirect: false,
            redirectTo: props.location.state?props.location.state.from:null
        }
    }

    /*CHECK: remove any unneccessary props*/


    // componentDidUpdate(prevProps){
    //     if(prevProps.userLogged !== this.props.userLogged){
           
    //         // let params = this.parseQuery();

    //         this.setState({          
    //             logged: this.props.userLogged.logged,
    //             userName: this.props.userLogged.userName
    //         });
    //         console.log("state:", this.state);
    //         console.log("didUpdate");

            
    //     }
    // }

    // getUserList(){
    //     return localStorage.getItem("userList")?JSON.parse( localStorage.getItem("userList")):[];
    // }

    // createAcount = (event) => {
    //     event.preventDefault();
    //     let users = this.getUserList();
    //     for(let i = 0; i < users.length; i++){
    //         if(users[i].userName === event.target[0].value){
    //             console.log("username not available");
    //             return
    //         }
    //     }
    //     if(event.target[1].value === event.target[2].value){
    //         console.log("username ok. password ok");
    //         users.push({
    //             userName: event.target[0].value,
    //             password: event.target[1].value
    //         })
    //         localStorage.setItem("userList", JSON.stringify(users));
    //         console.log("new user created");
    //         //login
    //     }else{
    //         console.log("passwords don't match");
    //     }

    // }

    // handleLogIn = (event) => {
    //     event.preventDefault();
    //     console.log("event:", event.target[0].value, event.target[1].value);

    //     let users = this.getUserList();
    //     for(let i = 0; i < users.length; i++){
    //         if(users[i].userName === event.target[0].value && event.target[1].value === users[i].password){
    //             console.log("logIn successfull");
    //         }else{
    //             console.log("incorrect userName/password");
    //         }
    //     }
    // }
    
    redirect = () => {
        if(this.state.redirectTo){
            this.setState({redirect: true});
        }else{
            this.props.history.goBack();
        }
    }
    

    createAcount = (e) => {
        e.preventDefault();
        //validate email and then:
        if(e.target[1].value === e.target[2].value){
            auth.signUp(e.target[0].value, e.target[1].value);
        }

    }

    handleLogIn = (e) => {
        e.preventDefault();
        //validation required
        auth.login(e.target[0].value, e.target[1].value, this.redirect)
    }

    render(){
        return(
            <div>
                {this.state.redirect && this.state.redirectTo != "" && <Redirect to={this.state.redirectTo}/>}
                {!this.state.redirect && <p>redirect false</p>}
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
                    <form onSubmit={this.createAcount} className="border border-light border-1 rounded mx-8"className="border border-light border-1 rounded mx-2">
                        <span>Create account</span>
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