import React from 'react'
import { Global } from '../contexts/GlobalContext'
import { validators } from '../functions/validators'
import { OrderAlreadySent } from './OrderAlreadySent';

class FormBilling extends React.Component{
    static contextType = Global;
    constructor(props){
        super(props)

        this.unvalidMessage = {
            fName: "enter a valid name",
            lName: "enter a valid last name",
            street: "enter a valid street",
            buildingNum: "enter a valid number",
            city: "enter a valid city",
            country: "enter a valid country"
        }

        this.state = {
            checkoutFlowOk: true,
            firstSubmit: false,
            fNameOk: false,
            lNameOk: false,
            streetOk: false,
            buildingNumOk: false,
            cityOk: false,
            countryOk: false,    
            messages: {
                fName: "required field",
                lName: "required field",
                street: "required field",
                buildingNum: "required field",
                city: "required field",
                country: "required field"
            }
        }
    }

    componentDidMount(){
        if(this.props.location.state?.from !== '/cart'){
            this.props.history.replace("/notFound");
        }
    }

    checkField = (e, str) => {
        let messages = this.state.messages;
        if(!e.target.value){
            messages[str] = "required field";
            this.setState({[str + "Ok"]: false, messages: messages})
        }else if(e.target.value && !validators[str + "Val"](e.target.value)){
            messages[str] = this.unvalidMessage[str];
            this.setState({[str + "Ok"]: false, messages: messages})
        }else{
            messages[str] = "";
            this.setState({[str + "Ok"]: true})
        }
    }

    validateAll = () => {
        let temp = Object.keys(this.state)
         for(let i = 0; i < temp.length; i++){
             if(this.state[temp[i]] !== true && temp[i] !== "messages" && temp[i] !== "firstSubmit"){
                 return false
             }
         }
         return true
     }
 
     navigate = () => {
        this.props.history.push({
            pathname: "/checkout/shippingAddress",
            state: {
                from: 'formBilling'
            }
        })
     }

     saveBillingAddress(info){
        localStorage.setItem('billingAddress', JSON.stringify(info))
     }

     submit = (e) => {
         e.preventDefault();
         
         let billingAddress = {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            street: e.target[2].value,
            buildingNum: e.target[3].value,
            city: e.target[4].value,
            country: e.target[5].value,
            phone: e.target[6].value,
            email: e.target[7].value,
            wishToRecieve: e.target[8].checked
         }
         
         this.setState({firstSubmit: true});
         
         if(this.validateAll()){
            this.saveBillingAddress(billingAddress)
            this.navigate();
         }
     }

    render(){
        return(
            <>
            {this.context.orderSent && <OrderAlreadySent/>}
            {!this.context.orderSent &&
            <div className="flex flex-col items-center justify-center">
                <span>Billing Information</span>
                <form onSubmit={this.submit} className="flex flex-col items-center w-72" action="">
                    <div className="self-stretch flex justify-between">
                        <span>* First name</span>
                        <div className="flex flex-col">
                            <input onChange={(e) => this.checkField(e, "fName")} className="border border-1 rounded my-2" type="text" placeholder="" />
                            {this.state.firstSubmit && <span>{this.state.messages.fName}</span>}
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row justify-between">
                        <span>* Last name</span>
                        <div className="flex flex-col">
                            <input onChange={(e) => this.checkField(e, "lName")} className="border border-1 rounded my-2" type="text" placeholder="" />
                            {this.state.firstSubmit && <span>{this.state.messages.lName}</span>}
                        </div>
                    </div>
                    <div className="self-stretch flex justify-between">
                        <span>* Street</span>
                        <div className="flex flex-col">
                            <input onChange={(e) => this.checkField(e, "street")} className="border border-1 rounded my-2" type="text" placeholder="" />
                            {this.state.firstSubmit && <span>{this.state.messages.street}</span>}
                        </div>
                    </div>
                    <div className="self-stretch flex justify-between">
                        <span>* building number</span>
                        <div className="flex flex-col">
                            <input onChange={(e) => this.checkField(e, "buildingNum")} className="border border-1 rounded my-2" type="text" placeholder="" />
                            {this.state.firstSubmit && <span>{this.state.messages.buildingNum}</span>}
                        </div>
                    </div>
                    <div className="self-stretch flex justify-between">
                        <span>* City</span>
                        <div className="flex flex-col">
                            <input onChange={(e) => this.checkField(e, "city")} className="border border-1 rounded my-2" type="text" placeholder="" />
                            {this.state.firstSubmit && <span>{this.state.messages.city}</span>}
                        </div>
                    </div>
                    <div className="self-stretch flex justify-between">
                        <span>* Country</span>
                        <div className="flex flex-col">
                            <input onChange={(e) => this.checkField(e, "country")} className="border border-1 rounded my-2" type="text" placeholder="" />
                            {this.state.firstSubmit && <span>{this.state.messages.country}</span>}
                        </div>
                    </div>
                    <div className="self-stretch flex justify-between">
                        <span>Phone</span>
                        <div className="flex flex-col">
                            <input onChange={this.checkPhone} className="border border-1 rounded my-2" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="self-stretch flex justify-between">
                        <span>Email</span>
                        <div className="flex flex-col">
                            <input onChange={this.checkEmail} className="border border-1 rounded my-2" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="self-stretch flex justify-between items-center">
                        <label htmlFor="subscribe">i would like to recieve news and promotions</label>
                        <input className="border border-1 rounded my-2" type="checkbox" name="subscribe" id="" />
                    </div>
                    <button className="border border-turq border-1 rounded px-2 py-1 my-2">next</button>
                </form>
                <div className="h-10v"></div>
            </div>}
            </>
        )
    }
}

export default FormBilling