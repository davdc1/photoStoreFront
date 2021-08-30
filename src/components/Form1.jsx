import React from 'react'
import { Link } from 'react-router-dom'

class Form1 extends React.Component{
    constructor(props){
        super(props)

        this.costumerDet = {
            fName: "",
            lName: "",
            phone: "",
            email: "",
            subscribe: false
        }
        this.state = {
            fNameOk: false,
            lNameOk: false,
            phoneOk: false,
            emailOk: false
        }
    }

    valFName = (event) => {
        if(event.target.value){
            console.log("fName");
            this.setState({
                fNameOk: true
            });
            this.costumerDet.fName = event.target.value;
        }
    }

    valLName = (event) => {
        if(event.target.value){
            console.log("lName");
            this.setState({
                lNameOk: true,
            });
            this.costumerDet.lName = event.target.value;
        }
    }

    valPhone = (event) => {
        if(event.target.value){
            console.log("phone");
            this.setState({
                phoneOk: true,
            });
            this.costumerDet.phone = event.target.value;
        }
    }

    valEmail = (event) => {
        if(event.target.value){
            console.log("email");
            this.setState({
                emailOk: true,
            });
            this.costumerDet.email = event.target.value;
        }
    }

    getSubscribe = (event) => {
        if(event.target.checked == true){
            console.log("subscribe true");
            this.costumerDet.subscribe = true;
        }else{
            console.log("subscribe false");
            this.costumerDet.subscribe = false;
        }
    }

    validateAll = () => {
        let temp = Object.keys(this.state)
         for(let i = 0; i < temp.length; i++){
             if(this.state[temp[i]] !== true){
                 return false
             }
         }
         return true
     }
 
     navigate = () => {
         if(this.validateAll()){
             this.props.history.push("/checkout/form2")
         }
     }

    render(){
        return(
            <div className="flex flex-col items-center justify-center">
            <span>form1</span>
            <form className="flex flex-col items-center w-72" action="">
                <div className="self-stretch flex justify-between">
                    <span>First name</span>
                    <input onBlur={this.valFName} className="border border-1 rounded" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex flex-row justify-between">
                    <span>Last name</span>
                    <input onBlur={this.valLName} className="border border-1 rounded" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>Phone</span>
                    <input onBlur={this.valPhone} className="border border-1 rounded" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>Email</span>
                    <input onBlur={this.valEmail} className="border border-1 rounded" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between items-center">
                    <label htmlFor="subscribe">i wish to recieve... </label>
                    <input onChange={this.getSubscribe} className="border border-1 rounded" type="checkbox" name="subscribe" id="" />
                </div>
            </form>
            <button onClick={() => {this.navigate(); console.log("costumerDet:", this.costumerDet);}}>next</button>
        </div> 
        )
    }
}

export default Form1