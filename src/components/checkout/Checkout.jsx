import React from 'react'
import FormBilling from './FormBilling';
import FormShipping from './FormShipping';
import FormPayment from './FormPayment';
import CreditCardDet from './CreditCardDet';
import Paypal from './Paypal';
import CheckoutCart from './CheckoutCart';
import { OrderSubmitted } from './OrderSubmitted';
import { Global } from '../contexts/GlobalContext'
import { Route, Switch } from 'react-router-dom';

class Checkout extends React.Component{
    
    static contextType = Global;
    
    constructor(props){
        super(props)
        this.state = {
            orderSubmitted: false,
            items: [],
            total: 0,
            shippingDest: "",
            shippingMethod: "",
            shippingPrice: 0,
            taxRate: 0.17, //should be set dynamicaly, according to shippingDest
        }
    }

    componentDidMount(){
        this.setState({
            items: this.context.cart,
            total: this.context.total
        })
    }

    setShippingDest = () => {

    }

    setShipping = (e) => {

        if(e.target.value === "0"){
            this.setState({shippingMethod: "pickUp", shippingPrice: 0})
        }else if(e.target.value === "1"){
            // use shippingDest and chosen method to determine shippingPrice (probably by making a request to carier api)
            //and then:
            //this.setState({shippingMethod: from user, onSelect event, shippingPrice: price recieved from api})

            if(this.state.total >= 500){
                this.setState({shippingMethod: "standard", shippingPrice: 0})
            }else{
                this.setState({shippingMethod: "standard", shippingPrice: 20})
            }
        }else if(e.target.value === "2"){
            //same theoretical logic as above
            this.setState({shippingMethod: "express", shippingPrice: 60})
        }
    }

    saveFinalBill = () => {
        let bill = {
            subTotal: this.state.total,
            shippingPrice: this.state.shippingPrice,
            taxRate: this.state.taxRate,
            total: (this.state.total + this.state.shippingPrice) * (1 + this.state.taxRate)
        }
        localStorage.setItem('finalBill', JSON.stringify(bill));
    }

    onOrderSubmit = () => {
        this.setState({orderSubmitted: true});
    }

    render(){
        return(
            <div className="relative top-24">
                {this.state.orderSubmitted && <OrderSubmitted/>}
                {!this.state.orderSubmitted &&
                <div>
                    <span>Checkout</span>
                    <div className="flex flex-row-reverse justify-evenly mt-10">
                        <div className="hidden sm:inline-block">
                            <span>cart</span>
                            <div className="border border-1 mb-10">
                                <CheckoutCart
                                    items={this.state.items}
                                    total={this.state.total}
                                    taxRate={this.state.taxRate}
                                    shippingPrice={this.state.shippingPrice}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                        <Switch>
                            <Route path="/checkout/billingAddress" component={FormBilling} />
                            <Route path="/checkout/shippingAddress" render={(props) => <FormShipping setShipping={this.setShipping} total={this.state.total} saveFinalBill={this.saveFinalBill} {...props}/>} />
                            <Route path="/checkout/paymentMethod" render={(props) => <FormPayment {...props} />} />
                            <Route path="/checkout/CreditCardDet" render={(props) => <CreditCardDet onOrderSubmit={this.onOrderSubmit} {...props}/>} />
                            <Route path="/checkout/Paypal" component={Paypal} />
                        </Switch>
                        </div>
                    </div>
                    <div className="h-10v"></div>
                </div>}
            </div>
        )
    }
}

export default Checkout