import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import CheckoutCart from './CheckoutCart';

class Checkout extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    valFName(event){
        if(event.target.value){
            console.log("fName");
        }
    }

    valLName(event){
        if(event.target.value){
            console.log("lName");
        }
    }

    valPhone(event){
        if(event.target.value){
            console.log("phone");
        }
    }

    valEmail(event){
        if(event.target.value){
            console.log("email");
        }
    }

    getSubscribe(event){
        if(event.target.checked == true){
            console.log("subscribe true");
        }else{
            console.log("subscribe false");
        }
    }

    render(){
        return(
            <div>
                <span>Checkout</span>
                <div className="flex flex-row-reverse justify-evenly">
                    <div className="">
                        <span>cart</span>
                        <div className="border border-1">
                            <CheckoutCart />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                    <Switch>
                        <Route path="/checkout/form1" component={Form1} />
                        <Route path="/checkout/form2" component={Form2} />
                        <Route path="/checkout/form3" component={Form3} />
                    </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout