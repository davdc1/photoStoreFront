import React from 'react'
import { nameVal, phoneVal, emailVal, cityVal, postCodeVal, countryVal, streetVal, buildingNumVal } from '../functions/validation'
import { Link } from 'react-router-dom'

class Form1 extends React.Component{
    constructor(props){
        super(props)

        this.billingDet = {
            fName: "",
            lName: "",
            phone: "",
            email: "",
            street: "",
            building: "",
            city: "",
            country: "",
            subscribe: false
        }
        this.state = {
            fNameOk: "",
            lNameOk: "",
            //phoneOk: "",
            //emailOk: "",
            streetOk: "",
            buildingOk: "",
            cityOk: "",
            countryOk: "",
        }
    }

    checkFName = (event) => {
        if(nameVal(event.target.value)){
            console.log("fName");
            this.setState({
                fNameOk: true
            });
            this.billingDet.fName = event.target.value;
        }else{
            this.setState({
                fNameOk: false
            });
        }
    }

    checkLName = (event) => {
        if(nameVal(event.target.value)){
            console.log("lName");
            this.setState({
                lNameOk: true,
            });
            this.billingDet.lName = event.target.value;
        }else{
            this.setState({
                lNameOk: false
            });
        }
    }

    checkPhone = (event) => {
        if(phoneVal(event.target.value)){
            console.log("phone");
            // this.setState({
            //     phoneOk: true,
            // });
            this.billingDet.phone = event.target.value;
        }else{
            // this.setState({
            //     phoneOk: false
            // });
        }
    }

    checkEmail = (event) => {
        if(emailVal(event.target.value)){
            console.log("email");
            // this.setState({
            //     emailOk: true,
            // });
            this.billingDet.email = event.target.value;
        }else{
            // this.setState({
            //     emailOk: false
            // });
        }
    }

    checkStreet = (event) => {
        if(streetVal(event.target.value)){
            console.log("street");
            this.setState({
                streetOk: true,
            });
            this.billingDet.street = event.target.value;
        }else{
            this.setState({
                streetOk: false
            });
        }
    }

    checkBuildingNumber = (event) => {
        if(buildingNumVal(event.target.value)){
            console.log("address");
            this.setState({
                buildingOk: true,
            });
            this.billingDet.building = event.target.value;
        }else{
            this.setState({
                buildingOk: false
            });
        }
    }
    
    checkCity = (event) => {
        if(cityVal(event.target.value)){
            console.log("city");
            this.setState({
                cityOk: true,
            });
            this.billingDet.city = event.target.value;
        }else{
            this.setState({
                cityOk: false
            });
        }
    }
    
    checkCountry = (event) => {
        if(countryVal(event.target.value)){
            console.log("country");
            this.setState({
                countryOk: true,
            });
            this.billingDet.country = event.target.value;
        }else{
            this.setState({
                countryOk: false
            });
        }
    }

    getSubscribe = (event) => {
        if(event.target.checked == true){
            console.log("subscribe true");
            this.billingDet.subscribe = true;
        }else{
            console.log("subscribe false");
            this.billingDet.subscribe = false;
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
            <span>Billing Address</span>
            <form className="flex flex-col items-center w-72" action="">
                <div className="self-stretch flex justify-between">
                    <span>* First name</span>
                    <input onBlur={this.checkFName} className="border border-1 rounded my-2" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex flex-row justify-between">
                    <span>* Last name</span>
                    <input onBlur={this.checkLName} className="border border-1 rounded my-2" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* Street</span>
                    <input onBlur={this.checkStreet} className="border border-1 rounded my-2" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* building number</span>
                    <input onBlur={this.checkBuildingNumber} className="border border-1 rounded my-2" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* City</span>
                    <input onBlur={this.checkCity} className="border border-1 rounded my-2" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* Country</span>
                    <input onBlur={this.checkCountry} className="border border-1 rounded my-2" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>Phone</span>
                    <input onBlur={this.checkPhone} className="border border-1 rounded my-2" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>Email</span>
                    <input onBlur={this.checkEmail} className="border border-1 rounded my-2" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between items-center">
                    <label htmlFor="subscribe">i wish to recieve... </label>
                    <input onChange={this.getSubscribe} className="border border-1 rounded my-2" type="checkbox" name="subscribe" id="" />
                </div>
            </form>
            <button className="border border-turq border-1 rounded px-2 py-1 my-2" onClick={() => {this.navigate(); console.log("billingDet:", this.billingDet);}}>next</button>
        </div> 
        )
    }
}

export default Form1