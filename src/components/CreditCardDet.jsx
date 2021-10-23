import axios from "axios";
import React from "react";
// import loggedUser from './stuff/loggedUser.json';

import { User } from './contexts/UserContext'

class CreditCardDet extends React.Component{
    
    static contextType = User;

    constructor(props){
        super(props);

        this.unvalidMessages ={
            cardNum: "enter a valid credit card number",
            nameOnCard: "enter full name",
            exp: "unvalid card expiration date",
            cvv: "enter a valid cvv"
        }

        this.state = {
            loggedUser: "",
            firstSubmit: false,
            cardNumOk: false,
            nameOnCardOk: false,
            expOk: false,
            cvvOk: false,
            messages: {
                cardNum: "this field is required",
                nameOnCard: "this field is required",
                exp: "this field is required",
                cvv: "this field is required"
            }
        }
    }

    
    componentDidMount(){
        console.log("at crditcardpage: context user:", this.context.signedUser);
        this.setState({loggedUser: this.context.signedUser})
    }

    nameOnCardVal(a){
        return /^[a-z ,.'-]+$/.test(a);
    }

    cardNumVal(a){
        return (
            /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
        .test(a)
        )
    }

    cvvVal(a){
        return /^\d{3}$/.test(a);
    }
    expVal(a){
        if(Date.parse(a) > Date.parse(new Date())){
            return true
        }
        return false
    }

    validate = (e, str) => {
        let messages = this.state.messages;
        if(!e.target.value){
            messages[str] = "this field is required"
            this.setState({[str + "Ok"]: false, messages: messages});
        }else if(e.target.value && !this[str + "Val"](e.target.value)){
            messages[str] = this.unvalidMessages[str];
            this.setState({[str + "Ok"]: false, messages: messages})
        }else{
            messages[str] = ""
            this.setState({[str + "Ok"]: true, messages: messages})
        }
    }

    validateAll(){
        let keys = Object.keys(this.state);
        for(let i = 0; i < keys.length; i++){
            if(!this.state[keys[i]] && keys[i] !== 'firstSubmit' && keys[i] !== 'messages'){
                return false;
            }
        }
        return true;
    }

    submit = (e) => {
        e.preventDefault();
        
        this.setState({firstSubmit: true});

        if(this.validateAll()){
            let det = {
                cardNumber: e.target[0].value,
                nameOnCard: e.target[1].value,
                expiration: e.target[2].value,
                cvv: e.target[3].value
            }
        }

        this.saveOrder();
    }

    async saveOrder(){
        let shippingAddress = localStorage.getItem('shippingAddress')?
        JSON.parse(localStorage.getItem('shippingAddress')):null;

        let billingAddress = localStorage.getItem('billingAddress')?
        JSON.parse(localStorage.getItem('billingAddress')):null;

        let finalBill = localStorage.getItem('finalBill')?
        JSON.parse(localStorage.getItem('finalBill')):null;

        let order = {
            userId:this.state.loggedUser._id,
            date: new Date().toLocaleDateString(),
            status: "",
            paied: false,
            shippingAddress: shippingAddress,
            billingAddress: billingAddress,
            subTotal: finalBill.subTotal,
            shippingPrice: finalBill.shippingPrice,
            tax: (finalBill.total * (finalBill.taxRate + 1)),
            total: finalBill.total,
            cart: JSON.parse(localStorage.getItem('cartItems'))
        }

        axios.post(`/orders`, order)
        .then((res)=>{
            axios.put(`/users/updatecart/${this.context.signedUser._id}`, {"cart": []})
            .then((res) => {
                console.log("res at there", res);
                localStorage.setItem('cartItems', []);
                this.context.getUserByEmail(this.context.signedUser.email)
        });
        });
    }

    async sendPaymentDet(det){
        try{
            axios.post('/payment', det);

        }
        catch(err){

        }
    }

    render(){
        return(
            <div>
                <div>
                    <form className="flex flex-col my-14" action="" onSubmit={this.submit}>
                        <input onChange={(e) => this.validate(e, 'cardNum')} className="border rounded px-1 py-0.5 my-4" type="text" placeholder="card number" />
                        {this.state.firstSubmit && this.state.messages.cardNum}
                        <input onChange={(e) => this.validate(e, 'nameOnCard')} className="border rounded px-1 py-0.5 my-4" type="text" placeholder="name on card" />
                        {this.state.firstSubmit && this.state.messages.nameOnCard}
                        <input onChange={(e) => this.validate(e, 'exp')} className="border rounded px-1 py-0.5 my-4" type="date" placeholder="expiration" />
                        {this.state.firstSubmit && this.state.messages.exp}
                        <input onChange={(e) => this.validate(e, 'cvv')} className="border rounded px-1 py-0.5 my-4" type="text" placeholder="cvv" />
                        {this.state.firstSubmit && this.state.messages.cvv}
                        <button className="border rounded px-1 py-0.5 my-4" >submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreditCardDet;