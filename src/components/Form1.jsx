import React from 'react'
//import {  phoneVal, emailVal, cityVal, postCodeVal, countryVal, streetVal, buildingNumVal } from '../functions/validation'
import { Link } from 'react-router-dom'

class Form1 extends React.Component{
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

        // this.billingDet = {
        //     fName: "",
        //     lName: "",
        //     phone: "",
        //     email: "",
        //     street: "",
        //     building: "",
        //     city: "",
        //     country: "",
        //     subscribe: false
        // }

        this.state = {
            firstSubmit: false,
            fNameOk: false,
            lNameOk: false,
            //phoneOk: false,
            //emailOk: false,
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

    // checkFName = (event) => {
    //     if(nameVal(event.target.value)){
    //         console.log("fName");
    //         this.setState({
    //             fNameOk: true
    //         });
    //         this.billingDet.fName = event.target.value;
    //     }else{
    //         this.setState({
    //             fNameOk: false
    //         });
    //     }
    // }

    // checkLName = (event) => {
    //     if(nameVal(event.target.value)){
    //         console.log("lName");
    //         this.setState({
    //             lNameOk: true,
    //         });
    //         this.billingDet.lName = event.target.value;
    //     }else{
    //         this.setState({
    //             lNameOk: false
    //         });
    //     }
    // }

    // checkPhone = (event) => {
    //     if(phoneVal(event.target.value)){
    //         console.log("phone");
    //         // this.setState({
    //         //     phoneOk: true,
    //         // });
    //         this.billingDet.phone = event.target.value;
    //     }else{
    //         // this.setState({
    //         //     phoneOk: false
    //         // });
    //     }
    // }

    // checkEmail = (event) => {
    //     if(emailVal(event.target.value)){
    //         console.log("email");
    //         // this.setState({
    //         //     emailOk: true,
    //         // });
    //         this.billingDet.email = event.target.value;
    //     }else{
    //         // this.setState({
    //         //     emailOk: false
    //         // });
    //     }
    // }

    // checkStreet = (event) => {
    //     if(streetVal(event.target.value)){
    //         console.log("street");
    //         this.setState({
    //             streetOk: true,
    //         });
    //         this.billingDet.street = event.target.value;
    //     }else{
    //         this.setState({
    //             streetOk: false
    //         });
    //     }
    // }

    // checkBuildingNumber = (event) => {
    //     if(buildingNumVal(event.target.value)){
    //         console.log("address");
    //         this.setState({
    //             buildingOk: true,
    //         });
    //         this.billingDet.building = event.target.value;
    //     }else{
    //         this.setState({
    //             buildingOk: false
    //         });
    //     }
    // }
    
    // checkCity = (event) => {
    //     if(cityVal(event.target.value)){
    //         console.log("city");
    //         this.setState({
    //             cityOk: true,
    //         });
    //         this.billingDet.city = event.target.value;
    //     }else{
    //         this.setState({
    //             cityOk: false
    //         });
    //     }
    // }
    
    // checkCountry = (event) => {
    //     if(countryVal(event.target.value)){
    //         console.log("country");
    //         this.setState({
    //             countryOk: true,
    //         });
    //         this.billingDet.country = event.target.value;
    //     }else{
    //         this.setState({
    //             countryOk: false
    //         });
    //     }
    // }

    // getSubscribe = (event) => {
    //     if(event.target.checked == true){
    //         console.log("subscribe true");
    //         this.billingDet.subscribe = true;
    //     }else{
    //         console.log("subscribe false");
    //         this.billingDet.subscribe = false;
    //     }
    // }

    fNameVal(exp){
        return /^[a-z ,.'-]+$/.test(exp.toLowerCase())
    }

    lNameVal(exp){
        return /^[a-z ,.'-]+$/.test(exp.toLowerCase())
    }
    
    phoneVal(exp){
        if(/^\d{9}$/.test(exp) || /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(exp)){
            return true
        }
            return false
    }

    emailVal(exp){
        return /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(exp)
    }

    cityVal(exp){
        return /^[a-z ,.'-]+$/.test(exp)
    }

    countryVal(exp){
        return /^[a-z ,.'-]+$/.test(exp)
    }

    postCodeVal(exp){
        return /[A-Za-z0-9]+/.test(exp)
    }

    streetVal(exp){
        return /^[0-9a-z ,.'-]+$/.test(exp)
    }

    buildingNumVal(exp){
        return /^[0-9]+$/.test(exp)
    }


    checkField = (e, str) => {
        let messages = this.state.messages;
        if(!e.target.value){
            console.log("1:");
            messages[str] = "required field";
            this.setState({[str + "Ok"]: false, messages: messages})
            //this.setState({[str + "Ok"]: false, messages: {[str]: "required field"}}, console.log("mes:", this.state.messages[str]), console.log("mesLname:", this.state.messages.lName ))
        }else if(e.target.value && !this[str + "Val"](e.target.value)){
            console.log("2:");
            messages[str] = this.unvalidMessage[str];
            this.setState({[str + "Ok"]: false, messages: messages})
            //this.setState({[str + "Ok"]: false, messages: {[str]: this.unvalidMessage[str]}}, console.log("mes:", this.state.messages[str]))
        }else{
            console.log("3:");
            messages[str] = "";
            this.setState({[str + "Ok"]: true})
        }
    }


    validateAll = () => {
        let temp = Object.keys(this.state)
         for(let i = 0; i < temp.length; i++){
             console.log("keys:", temp[i]);
             if(this.state[temp[i]] !== true && temp[i] !== "messages" && temp[i] !== "firstSubmit"){
                 console.log("val all false");
                 return false
             }
         }
         console.log("val all true");
         return true
     }
 
     navigate = () => {
        this.props.history.push("/checkout/form2")
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

         console.log("billing Address:", billingAddress);
         
         this.setState({firstSubmit: true});
         
         if(this.validateAll()){
            this.saveBillingAddress(billingAddress)
            this.navigate();
         }
     }

    render(){
        return(
            <div className="flex flex-col items-center justify-center">
            <span>Billing Information</span>
            <form onSubmit={this.submit} className="flex flex-col items-center w-72" action="">
                <div className="self-stretch flex justify-between">
                    <span>* First name</span>
                    <div className="flex flex-col">
                        <input onChange={(e) => this.checkField(e, "fName")} className="border border-1 rounded my-2" type="text" placeholder="" />
                        {/* {this.state.firstSubmit && !this.state.fNameOk && <span>{this.state.messages.fName}</span>} */}
                        {this.state.firstSubmit && <span>{this.state.messages.fName}</span>}
                    </div>
                </div>
                <div className="self-stretch flex flex-row justify-between">
                    <span>* Last name</span>
                    <div className="flex flex-col">
                        <input onChange={(e) => this.checkField(e, "lName")} className="border border-1 rounded my-2" type="text" placeholder="" />
                        {/* {this.state.firstSubmit && !this.state.lNameOk && <span>{this.state.messages.lName}</span>} */}
                        {this.state.firstSubmit && <span>{this.state.messages.lName}</span>}
                    </div>
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* Street</span>
                    <div className="flex flex-col">
                        <input onChange={(e) => this.checkField(e, "street")} className="border border-1 rounded my-2" type="text" placeholder="" />
                         {/* {this.state.firstSubmit && !this.state.streetOk && <span>{this.state.messages.street}</span>} */}
                         {this.state.firstSubmit && <span>{this.state.messages.street}</span>}
                    </div>
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* building number</span>
                    <div className="flex flex-col">
                        <input onChange={(e) => this.checkField(e, "buildingNum")} className="border border-1 rounded my-2" type="text" placeholder="" />
                        {/* {this.state.firstSubmit && !this.state.buildingNumOk && <span>{this.state.messages.buildingNum}</span>} */}
                        {this.state.firstSubmit && <span>{this.state.messages.buildingNum}</span>}
                    </div>
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* City</span>
                    <div className="flex flex-col">
                        <input onChange={(e) => this.checkField(e, "city")} className="border border-1 rounded my-2" type="text" placeholder="" />
                        {/* {this.state.firstSubmit && !this.state.cityOk && <span>{this.state.messages.city}</span>} */}
                        {this.state.firstSubmit && <span>{this.state.messages.city}</span>}
                    </div>
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* Country</span>
                    <div className="flex flex-col">
                        <input onChange={(e) => this.checkField(e, "country")} className="border border-1 rounded my-2" type="text" placeholder="" />
                        {/* {this.state.firstSubmit && !this.state.countryOk && <span>{this.state.messages.country}</span>} */}
                        {this.state.firstSubmit && <span>{this.state.messages.country}</span>}
                    </div>
                </div>
                <div className="self-stretch flex justify-between">
                    <span>Phone</span>
                    <div className="flex flex-col">
                        {/* {!this.state.phoneOk && <span>enter a valid phone number</span>} */}
                        <input onChange={this.checkPhone} className="border border-1 rounded my-2" type="text" placeholder="" />
                    </div>
                </div>
                <div className="self-stretch flex justify-between">
                    <span>Email</span>
                    <div className="flex flex-col">
                        {/* {!this.state.emailOk && <span>enter a valid Email address</span>} */}
                        <input onChange={this.checkEmail} className="border border-1 rounded my-2" type="text" placeholder="" />
                    </div>
                </div>
                <div className="self-stretch flex justify-between items-center">
                    <label htmlFor="subscribe">i wish to recieve... </label>
                    <input onChange={this.getSubscribe} className="border border-1 rounded my-2" type="checkbox" name="subscribe" id="" />
                </div>
                <button className="border border-turq border-1 rounded px-2 py-1 my-2" onClick={() => {console.log("billingDet:", this.billingDet);}}>next</button>
            </form>
        </div> 
        )
    }
}

export default Form1