import React from 'react'
import { Link } from 'react-router-dom'

class Form2 extends React.Component{
    constructor(props){
        super(props)
        this.shippingDet = {
            fName: "",
            lName: "",
            phone: "",
            email: "",
            address: "",
            city: "",
            country: "",
            state: "",
            postCode: "",
            message: ""
        }
        this.state = {
            fNameOk: false,
            lNameOk: false,
            // phoneOk: false,
            // emailOk: false,
            addressOk: false,
            cityOk: false,
            countryOk: false,
            postCodeOk: false
        }
    }

    valFName = (event) => {
        if(event.target.value){
            console.log("fName");
            this.setState({
                fNameOk: true
            });
            this.shippingDet.fName = event.target.value;
        }
    }

    valLName = (event) => {
        if(event.target.value){
            console.log("lName");
            this.setState({
                lNameOk: true,
            });
            this.shippingDet.lName = event.target.value;
        }
    }

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

    valAddress = (event) => {
        if(event.target.value){
            console.log("email");
            this.setState({
                addressOk: true,
            });
            this.shippingDet.address = event.target.value;
        }
    }

    valPostCode = (event) => {
        if(event.target.value){
            console.log("postCode");
            this.setState({
                postCodeOk: true,
            });
            this.shippingDet.postCode = event.target.value;
        }
    }

    valCity = (event) => {
        if(event.target.value){
            console.log("city");
            this.setState({
                cityOk: true,
            });
            this.shippingDet.city = event.target.value;
        }
    }

    valCountry = (event) => {
        if(event.target.value){
            console.log("country");
            this.setState({
                countryOk: true,
            });
            this.shippingDet.country = event.target.value;
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
                <span>form2</span>
                <form className="flex flex-col items-center w-72" action="">
                <div className="self-stretch flex justify-between">
                    <span>First name</span>
                    <input onBlur={this.valFName} className="border border-1 rounded" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>Last name</span>
                    <input onBlur={this.valLName} className="border border-1 rounded" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>Address</span>
                    <input onBlur={this.valAddress} className="border border-1 rounded" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span></span>
                    <input className="border border-1 rounded" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>Post code</span>
                    <input onBlur={this.valPostCode} className="border border-1 rounded" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>City</span>
                    <input onBlur={this.valCity} className="border border-1 rounded" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>State/Province</span>
                    <input onBlur={this.valState} className="border border-1 rounded" type="text" placeholder="" />
                </div>
                <div className="self-stretch flex justify-between">
                    <span>Country</span>
                    <input onBlur={this.valCountry} className="border border-1 rounded" type="text" placeholder="" />
                </div>
                <textarea className="self-stretch border border-1 rounded" name="" id="" cols="30" rows="10"></textarea>
                </form>
                <button onClick={() => {console.log("shippingDet: ", this.shippingDet); this.navigate()}} >next</button>
            </div> 
        )
    }
}

export default Form2