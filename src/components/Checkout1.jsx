import React from 'react'

class Checkout1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <span>Checkout</span>
                <div>
                    <span>cart</span>
                </div>
                <div>
                    <div>
                        <span>form1</span>
                        <form action="">
                            <input type="text"  placeholder="First name" />
                            <input type="text" placeholder="Last name" />
                            <input type="phone" placeholder="Phone" />
                            <input type="email" name="" id="" placeholder="Email" />
                            <label htmlFor="subscribe">i wish to recieve... </label>
                            <input type="checkbox" name="subscribe" id="" />
                        </form>
                    </div>
                    <div>
                        <span>form2</span>
                        <form action="">
                            <div>
                                <span>First name</span>
                                <input type="text" placeholder="" />
                            </div>
                            <div>
                                <span>Last name</span>
                                <input type="text" placeholder="" />
                            </div>
                            <div>
                                <span>Address</span>
                                <input type="text" placeholder="" />
                            </div>
                            <div>
                                <span></span>
                                <input type="text" placeholder="" />
                            </div>
                            <div>
                                <span>Post code</span>
                                <input type="text" placeholder="" />
                            </div>
                            <div>
                                <span>City</span>
                                <input type="text" placeholder="" />
                            </div>
                            <div>
                                <span>State/Province</span>
                                <input type="text" placeholder="" />
                            </div>
                            <div>
                                <span>Country</span>
                                <input type="text" placeholder="" />
                            </div>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </form>
                    </div>
                    <div>
                        <span>payment method:</span>
                        <button>credit/debit card</button>
                        <button>paypal</button>
                    </div>
                    <div>
                        <span>shipping:</span>
                        <select name="" id="">
                            <option value="">store pick-up - free</option>
                            <option value="">standard post</option>
                            <option value="">express</option>
                            <option value="">free shipping for orders above 200$</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout1