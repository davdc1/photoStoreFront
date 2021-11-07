import React from 'react'
import { Link } from 'react-router-dom'

class Form3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div className="flex flex-col w-72 my-4">
                    <span>payment method:</span>
                    <Link to="/checkout/creditCardDet">
                        <button className="border border-1 border-turq rounded px-2 py-1 mx-4 my-4 ">credit/debit card</button>
                    </Link>
                    <Link to="/checkout/paypal">
                        <button className="border border-1 border-turq rounded px-2 py-1 mx-4 my-4">paypal</button>
                    </Link>
                   
                    
                </div>
                <div className="h-10v"></div>
            </div> 
        )
    }
}

export default Form3