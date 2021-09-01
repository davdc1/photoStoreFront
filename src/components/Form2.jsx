import React from 'react'
import { nameVal, phoneVal, emailVal, cityVal, postCodeVal, countryVal, streetVal, buildingNumVal } from '../functions/validation'
import { Link } from 'react-router-dom'

class Form2 extends React.Component{
    constructor(props){
        super(props)
        this.shippingDet = {
            fName: "",
            lName: "",
            phone: "",
            email: "",
            street: "",
            building: "",
            city: "",
            country: "",
            state: "",
            postCode: "",
            message: ""
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
            postCodeOk: ""
        }
    }

    // valFName = (event) => {
    //     if(event.target.value){
    //         console.log("fName");
    //         this.setState({
    //             fNameOk: true
    //         });
    //         this.shippingDet.fName = event.target.value;
    //     }
    // }

    // valLName = (event) => {
    //     if(event.target.value){
    //         console.log("lName");
    //         this.setState({
    //             lNameOk: true,
    //         });
    //         this.shippingDet.lName = event.target.value;
    //     }
    // }

    // valPhone = (event) => {
    //     if(event.target.value){
    //         console.log("phone");
    //         this.setState({
    //             phoneOk: true,
    //         });
    //         this.shippingDet.phone = event.target.value;
    //     }
    // }

    // valEmail = (event) => {
    //     if(event.target.value){
    //         console.log("email");
    //         this.setState({
    //             emailOk: true,
    //         });
    //         this.shippingDet.email = event.target.value;
    //     }
    // }

    // valAddress = (event) => {
    //     if(event.target.value){
    //         console.log("email");
    //         this.setState({
    //             addressOk: true,
    //         });
    //         this.shippingDet.address = event.target.value;
    //     }
    // }

    // valPostCode = (event) => {
    //     if(event.target.value){
    //         console.log("postCode");
    //         this.setState({
    //             postCodeOk: true,
    //         });
    //         this.shippingDet.postCode = event.target.value;
    //     }
    // }

    // valCity = (event) => {
    //     if(event.target.value){
    //         console.log("city");
    //         this.setState({
    //             cityOk: true,
    //         });
    //         this.shippingDet.city = event.target.value;
    //     }
    // }

    // valCountry = (event) => {
    //     if(event.target.value){
    //         console.log("country");
    //         this.setState({
    //             countryOk: true,
    //         });
    //         this.shippingDet.country = event.target.value;
    //     }
    // }

    checkFName = (event) => {
        if(nameVal(event.target.value)){
            console.log("fName");
            this.setState({
                fNameOk: true
            });
            this.shippingDet.fName = event.target.value;
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
            this.shippingDet.lName = event.target.value;
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
            this.shippingDet.phone = event.target.value;
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
            this.shippingDet.email = event.target.value;
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
            this.shippingDet.street = event.target.value;
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
            this.shippingDet.building = event.target.value;
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
            this.shippingDet.city = event.target.value;
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
            this.shippingDet.country = event.target.value;
        }else{
            this.setState({
                countryOk: false
            });
        }
    }

    checkState = (event) => {
        if(event.target.value){
            console.log("state");
            // this.setState({
            //     stateOk: true,
            // });
            this.shippingDet.state = event.target.value;
        }else{
            // this.setState({
            //     stateOk: false
            // });
        }
    }

    checkPostCode = (event) => {
        if(postCodeVal(event.target.value)){
            console.log("city");
            this.setState({
                postCodeOk: true,
            });
            this.shippingDet.postCode = event.target.value;
        }else{
            this.setState({
                postCodeOk: false
            });
        }
    }

    getMessage = (event) => {
        if(event.target.value){
            console.log("message");
            // this.setState({
            //     messageOk: true,
            // });
            this.shippingDet.message = event.target.value;
        }else{
            // this.setState({
            //     messageOk: false
            // });
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
            this.props.history.push("/checkout/form3")
        }
    }

    render(){
        return(
            <div className="flex flex-col items-center">
                <span>Shipping Address</span>
                <form className="flex flex-col items-center w-72" action="">
                <div className="self-stretch flex justify-between">
                    <span>* First name</span>
                    <input onBlur={this.checkFName} className="border border-1 rounded my-2" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
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
                {/* <div className="self-stretch flex justify-between">
                    <span></span>
                    <input className="border border-1 rounded my-2" type="text" placeholder="" />
                </div> */}
                <div className="self-stretch flex justify-between">
                    <span>* Post code</span>
                    <input onBlur={this.checkPostCode} className="border border-1 rounded my-2" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* City</span>
                    <input onBlur={this.checkCity} className="border border-1 rounded my-2" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>State/Province</span>
                    <input onBlur={this.checkState} className="border border-1 rounded my-2" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>* Country</span>
                    <input onBlur={this.checkCountry} className="border border-1 rounded my-2" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>Email</span>
                    <input onBlur={this.checkEmail} className="border border-1 rounded my-2" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>Phone</span>
                    <input onBlur={this.checkPhone} className="border border-1 rounded my-2" type="text" placeholder="" />
                </div>
                <textarea onBlur={this.getMessage} className="self-stretch border border-1 rounded my-2" name="" id="" cols="30" rows="10"></textarea>
                </form>
                <button className="border border-turq border-1 rounded px-2 py-1 my-4" onClick={() => {console.log("shippingDet: ", this.shippingDet); this.navigate()}} >next</button>
            </div> 
        )
    }
}

export default Form2