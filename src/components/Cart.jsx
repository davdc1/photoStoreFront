
import React from "react"
import { Link } from 'react-router-dom'

class Cart extends React.Component{
    constructor(props){
        
        super(props)
        
        this.state = {
            // itemsTemp: [
            //     {id: 1, prodName: "name1", price: 100, size: "A1", quantity: 1, image: "https://i.ibb.co/YkTt4JD/2.jpg"},
            //     {id: 4, prodName: "name2", price: 200, size: "A2", quantity: 2, image: "https://i.ibb.co/D7FfSgc/city.jpg"},
            //     {id: 7, prodName: "name3", price: 340, size: "A3", quantity: 1, image: "https://i.ibb.co/kQKH4m7/IMG-4547.jpg"}
            // ],
            items: []
        }
    }

    componentDidMount(){
        this.getItemList();
    }

    itemCountTotal = () => {
        let sum = 0;
        this.state.items.map((item) => {
            sum += item.quantity
        })
    }
    
    getItemList = () => {
        let items = localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[];
        this.setState({items: items})
    }

    render(){
        return (
            <div className="flex flex-col justify-center items-center">
                <h1>Cart</h1>

                <div className="flex flex-col justify-around w-p500  border border-2 rounded m-10">
                    {/* <div className="flex justify-around">
                        <span>item:</span>
                        <span>image</span>
                        <span>quantity</span>
                        <span>size/additional info</span>
                        <span>price</span>
                    </div> */}
                    {this.state.items.map((item) =>{
                        return <div className="flex justify-around items-center h-24 border-t-2">
                                    <Link to={{pathname:`/prodpage/${item.id}`}}><span>{item.prodName}</span></Link>
                                    <span><img src={item.image} alt="" className="h-20" /></span>
                                    <span>size: {item.size}</span>
                                    <span>price: {item.price}</span>
                                    <span>quantity: {item.quantity}  <input type="number" value={item.quantity} min="0" max="10" className="w-10 border border-1 rounded ml-2"/></span>
                                    <span>total: {item.price * item.quantity}</span>
                               </div>
                    })}
                </div>

            </div>
        )
    }
}

export default Cart