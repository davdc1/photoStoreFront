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
                    <button className="border border-1 border-turq rounded px-2 py-1 mx-4 my-4 ">credit/debit card</button>
                    <button className="border border-1 border-turq rounded px-2 py-1 mx-4 my-4">paypal</button>
                </div>
                <div className="my-4 w-72">
                    <span className="mx-4">shipping:</span>
                    <select className="border border-1 rounded" name="" id="">
                        <option value="">store pick-up - free</option>
                        <option value="">standard post</option>
                        <option value="">express</option>
                        <option value="">free shipping for orders above 200$</option>
                    </select>
                </div>
                <button className="border border-turq border-1 rounded px-2 py-1 my-4">Place Order</button>
            </div> 
        )
    }
}

export default Form3