import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import CreditCardDet from './CreditCardDet';
import Paypal from './Paypal';
import CheckoutCart from './CheckoutCart';

class Checkout extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: [],
            total: 0,
            shippingDest: "",
            shippingMethod: "",
            shippingPrice: 0,
            taxRate: 0.17, //should be set dynamicaly, according to shippingDest
        }
    }

    componentDidMount(){
        let items = localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[];
        let total = 0;

        if(items){
            for(let i = 0; i < items.length; i++){
                total += (parseInt(items[i].price) * items[i].quantity);
            }
            this.setState({items: items, total: total})
        }
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

    render(){
        return(
            <div>
                <span>Checkout</span>
                <div className="flex flex-row-reverse justify-evenly mt-10">
                    <div className="">
                        <span>cart</span>
                        <div className="border border-1 mb-10">
                            {/* in order for the cart to re-render when moving through forms
                            try to setState on url props change. might solve the issue with images not showing */}
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
                        <Route path="/checkout/form1" component={Form1} />
                        <Route path="/checkout/form2" component={(props) => <Form2 setShipping={this.setShipping} total={this.state.total} saveFinalBill={this.saveFinalBill} {...props}/>} />
                        <Route path="/checkout/form3" component={Form3} />
                        <Route path="/checkout/CreditCardDet" component={CreditCardDet} />
                        <Route path="/checkout/Paypal" component={Paypal} />
                    </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout