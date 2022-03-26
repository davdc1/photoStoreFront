import React from 'react'
import { Global } from '../../contexts/GlobalContext'
import { validators } from '../../functions/validators'
import { OrderAlreadySent } from './OrderAlreadySent';

class FormShipping extends React.Component{
    
    static contextType = Global;

    constructor(props){
        super(props)
        
        this.unvalidMessage = {
            fName: "enter a valid name",
            lName: "enter a valid last name",
            street: "enter a valid street",
            buildingNum: "enter a valid number",
            city: "enter a valid city",
            country: "enter a valid country",
            postCode: "enter a valid post code",
            email: "enter a valid email address",
            phone: "enter a vlaid phone"
        }

        this.state = {
            firstSubmit: false,
            fNameOk: false,
            lNameOk: false,
            phoneOk: false,
            emailOk: false,
            streetOk: false,
            buildingNumOk: false,
            cityOk: false,
            countryOk: false,
            postCodeOk: false,
            messages: {
                fName: "required field",
                lName: "required field",
                street: "required field",
                buildingNum: "required field",
                city: "required field",
                country: "required field",
                postCode: "required field",
                phone: "required field",
                email: "required field"
            }
        }
    }

    componentDidMount(){
        if(this.props.location.state?.from !== 'formBilling'){
            this.props.history.replace("/notFound");
        }
    }

    checkField = (e, str) => {
        let messages = this.state.messages;
        if(!e.target.value){
            messages[str] = "required field";
            this.setState({[str + "Ok"]: false, messages: messages});
        }else if(e.target.value && !validators[str + "Val"](e.target.value)){
            messages[str] = this.unvalidMessage[str];
            this.setState({[str + "Ok"]: false, messages: messages});
        }else{
            messages[str] = "";
            this.setState({[str + "Ok"]: true});
        }
    }

    validateAll = () => {
        let temp = Object.keys(this.state)
         for(let i = 0; i < temp.length; i++){
             if(this.state[temp[i]] !== true && temp[i] !== "messages" && temp[i] !== "firstSubmit"){
                 return false;
             }
         }
         return true;
     }

    navigate = () => {
        this.props.history.push({
            pathname: "/checkout/paymentMethod",
            state: {
                from: 'formShipping'
            }
        });
    }

    saveShippingAddress(info){
        localStorage.setItem('shippingAddress', JSON.stringify(info));
    }

    submit = (e) => {
        e.preventDefault()
        let shippingAddress = {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            street: e.target[2].value,
            buildingNum: e.target[3].value,
            postCode: e.target[4].value,
            city: e.target[5].value,
            state: e.target[6].value,
            country: e.target[7].value,
            email: e.target[8].value,
            phone: e.target[9].value,
            message: e.target[10].value
        }
        
        if(this.validateAll()){
            this.saveShippingAddress(shippingAddress);
            this.props.saveFinalBill();
            this.navigate();
        }

        if(!this.state.firstSubmit){
            this.setState({firstSubmit: true})}
    }

    render(){
        return(
            <>
            {this.context.orderSent && <OrderAlreadySent/>}
            {!this.context.orderSent &&
            <div className="flex flex-col items-center">
                <span>Shipping Address</span>
            <form onSubmit={this.submit} className="flex flex-col items-center w-72" action="">
                <div className="self-stretch flex justify-between">
                    <span>* First name</span>
                    <div className="flex flex-col">
                        <input onChange={(e) => this.checkField(e, "fName")}  className="border border-1 rounded my-2" type="text" placeholder="" />
                        {this.state.firstSubmit && this.state.messages.fName}
                    </div>
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* Last name</span>
                    <div className="flex flex-col">
                        <input onChange={(e) => this.checkField(e, "lName")}  className="border border-1 rounded my-2" type="text" placeholder="" />
                        {this.state.firstSubmit && this.state.messages.lName}
                    </div>
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* Street</span>
                    <div className="flex flex-col">
                        <input onChange={(e) => this.checkField(e, "street")}  className="border border-1 rounded my-2" type="text" placeholder="" />
                        {this.state.firstSubmit && this.state.messages.street}
                    </div>
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* building number</span>
                    <div className="flex flex-col">
                        <input onChange={(e) => this.checkField(e, "buildingNum")}  className="border border-1 rounded my-2" type="text" placeholder="" />
                        {this.state.firstSubmit && this.state.messages.buildingNum}
                    </div>
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* Post code</span>
                    <div className="flex flex-col">
                        <input onChange={(e) => this.checkField(e, "postCode")}  className="border border-1 rounded my-2" type="text" placeholder="" />
                        {this.state.firstSubmit && this.state.messages.postCode}
                    </div>
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* City</span>
                    <div className="flex flex-col">
                        <input onChange={(e) => this.checkField(e, "city")}  className="border border-1 rounded my-2" type="text" placeholder="" />
                        {this.state.firstSubmit && this.state.messages.city}
                    </div>
                </div>
                <div className="self-stretch flex justify-between">
                    <span>State/Province</span>
                    <div className="flex flex-col">
                        <input className="border border-1 rounded my-2" type="text" placeholder="" />
                        
                    </div>
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* Country</span>
                    <div className="flex flex-col">
                        <input onChange={(e) => this.checkField(e, "country")}  className="border border-1 rounded my-2" type="text" placeholder="" />
                        {this.state.firstSubmit && this.state.messages.country}
                    </div>   
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* Email</span>
                    <div className="flex flex-col">
                        <input onChange={(e) => this.checkField(e, "email")}  className="border border-1 rounded my-2" type="text" placeholder="" />
                        {this.state.firstSubmit && this.state.messages.email}
                    </div>
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* Phone</span>
                    <div className="flex flex-col">
                        <input onChange={(e) => this.checkField(e, "phone")}  className="border border-1 rounded my-2" type="text" placeholder="" />
                        {this.state.firstSubmit && this.state.messages.phone}
                    </div>
                </div>
                <div className="self-stretch flex flex-col items-start">
                    <p>message:</p>
                    <textarea className="self-stretch border border-1 rounded my-2" name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div className="self-stretch my-4 w-72">
                    <span className="mx-4">Shipping method:</span>
                    <select onChange={this.props.setShipping} className="border border-1 rounded" name="" id="">
                        <option value="0">store pick-up - free</option>
                        <option value="1">standard post</option>
                        <option value="2">express</option>
                    </select>
                </div>
                <button className="border border-turq border-1 rounded px-2 py-1 my-4">next</button>
                </form>
                <div className="h-10v"></div>
            </div>}
            </>
        )
    }
}

export default FormShipping