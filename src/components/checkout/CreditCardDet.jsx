import React from "react";
import { Global } from '../contexts/GlobalContext';
import { creditValidators } from "../functions/validators";
import { OrderAlreadySent } from './OrderAlreadySent';
import axios from "axios";

class CreditCardDet extends React.Component{
    
    static contextType = Global;

    constructor(props){
        super(props);

        this.unvalidMessages ={
            cardNum: "enter a valid credit card number",
            nameOnCard: "enter full name",
            exp: "unvalid card expiration date",
            cvv: "enter a valid cvv"
        }

        this.state = {
            signedUser: "",
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
        if(this.props.location?.state?.from !== 'formPaymentMethod'){
            this.props.history.replace('/notFound');
        }
        this.setState({signedUser: this.context.signedUser});
    }

    validate = (e, str) => {
        let messages = {...this.state.messages};
        if(!e.target.value){
            messages[str] = "this field is required"
            this.setState({[str + "Ok"]: false, messages: messages});
        }else if(e.target.value && !creditValidators[str + "Val"](e.target.value)){
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
            //not used in development:
            let det = {
                cardNumber: e.target[0].value,
                nameOnCard: e.target[1].value,
                expiration: e.target[2].value,
                cvv: e.target[3].value
            }
        }

        this.saveOrder();
    }

    saveOrder = async () => {
        let shippingAddress = localStorage.getItem('shippingAddress')?
        JSON.parse(localStorage.getItem('shippingAddress')):null;

        let billingAddress = localStorage.getItem('billingAddress')?
        JSON.parse(localStorage.getItem('billingAddress')):null;

        let finalBill = localStorage.getItem('finalBill')?
        JSON.parse(localStorage.getItem('finalBill')):null;

        let order = {
            userId:this.state.signedUser._id,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            status: "",
            paied: false,
            shippingAddress: shippingAddress,
            billingAddress: billingAddress,
            subTotal: finalBill.subTotal,
            shippingPrice: finalBill.shippingPrice,
            tax: (finalBill.total - (finalBill.total / (finalBill.taxRate + 1))),
            total: finalBill.total,
            cart: [...this.context.cart]
        }

        axios.post(`${process.env.REACT_APP_API_URL}/orders`, order)
        .then((res)=>{
            this.context.setSignedUser(res.data)
            localStorage.setItem('cartItems', []);
            this.props.onOrderSubmit();
            this.context.setOrderSent(true);
        });
    }

    async sendPaymentDet(det){
        try{
            axios.post(`${process.env.REACT_APP_API_URL}/payment`, det);
        }
        catch(err){

        }
    }

    render(){
        return(
            <div>
                {this.context.orderSent && <OrderAlreadySent/>}
                {!this.context.orderSent &&
                <div>
                    <div className="border border-purple-500 rounded p-3">
                        <p>This site is for demonstration purposes, the form will not be submitted.</p>
                        <p>click <button onClick={this.saveOrder} className='border'>here</button> to place a demo order</p>
                    </div>
                    <form className="flex flex-col my-14" action="" onSubmit={this.submit}>
                        <input onChange={(e) => this.validate(e, 'cardNum')} className="border rounded px-1 py-0.5 my-4" type="text" placeholder="card number" />
                        {this.state.firstSubmit && this.state.messages.cardNum}
                        <input onChange={(e) => this.validate(e, 'nameOnCard')} className="border rounded px-1 py-0.5 my-4" type="text" placeholder="name on card" />
                        {this.state.firstSubmit && this.state.messages.nameOnCard}
                        <input onChange={(e) => this.validate(e, 'exp')} className="border rounded px-1 py-0.5 my-4" type="date" placeholder="expiration" />
                        {this.state.firstSubmit && this.state.messages.exp}
                        <input onChange={(e) => this.validate(e, 'cvv')} className="border rounded px-1 py-0.5 my-4" type="text" placeholder="cvv" />
                        {this.state.firstSubmit && this.state.messages.cvv}
                        <button disabled className="border rounded px-1 py-0.5 my-4" >submit</button>
                    </form>
                </div>}
                <div className="h-10v"></div>
            </div>
        )
    }
}

export default CreditCardDet;