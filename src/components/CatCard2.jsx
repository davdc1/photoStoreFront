import React from "react"
import {Link} from "react-router-dom"


class CatCard extends React.Component{
    constructor(props){
        super(props)
        this.product = this.props.product;
        this.state = {
            price: this.product.sizes[0].price,
            size: this.product.sizes[0].size,
            idSize: this.product.sizes[0].idSize,
            priceTag: '$' + this.product.sizes[0].price,
            quant: "1"
        }
    }

    addToCart = () => {
        let items = localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[];
        //handle duplicates:
        let sum = 0;
        for(let i = 0; i < items.length; i++){
            if(items[i].idSize === this.state.idSize){
                
                sum += parseInt(items[i].quantity);
                items.splice(i, 1);
                i--;
            }
        }
        
        items.push({
            id: this.product.id,
            prodName: this.product.prodName,
            price: this.state.price,
            size: this.state.size,
            idSize: this.state.idSize,
            quantity: (parseInt(this.state.quant) + sum) <= 10 ? (parseInt(this.state.quant) + sum) : 10,
            image: this.product.imageStr
        })
        localStorage.setItem("cartItems", JSON.stringify(items));
    }

    setPrice = (event) => {
        this.setState({
            price: this.product.sizes[parseInt(event.target.value)].price,
            size: this.product.sizes[parseInt(event.target.value)].size,
            idSize: this.product.sizes[parseInt(event.target.value)].idSize,
            priceTag: "$" + this.product.sizes[parseInt(event.target.value)].price
        })
    }

    getQuant = (event) => {
        this.setState({quant:  event.target.value});
    }

    render(){
        return(
            <div className='flex flex-col sm:flex-row min-h-96 my-14 mx-4 items-center px-8 py-8 border-2 border-light rounded'>
                <div className="">
                    <Link to={{pathname:`/prodpage/${this.product.id}`}}><img className="w-full sm:w-52 shadow-xl" src={this.product.imageStr} alt="ProdImage" /></Link>
                </div>
                    <div className="flex flex-col justify-between sm:ml-4 self-stretch mt-10 sm:mt-0">
                        <span className="font-medium text-xl mb-12"><Link to={{pathname:`/prodpage/${this.product.id}`}}>name: {this.product.prodName}</Link></span>
                        <span className="mt-3 ">rank: {this.product.rank}</span>
                        <div>
                            <div className="flex flex-row-reverse sm:flex-col justify-center h-24  mx-3 mt-4">   
                                <div className="mb-4 flex flex-row items-center ">
                                    <select className="mr-3 p-0.5 border-2 rounded" onChange={this.setPrice}>
                                        {this.product.sizes.map((obj, index) => {
                                            return <option value={index} key={index} >{obj.size}</option>
                                        })}
                                    </select>
                                    <span className="text-xl font-semibold">{this.state.priceTag}</span>
                                </div>
                                <div className="mb-4 sm:mb-0 flex flex-row justify-start items-center">
                                    <button onClick={()=>{this.addToCart(); this.props.updateCartPrev(); this.props.showAdded(this.product, this.state)}} className={catBtn}>Add to basket</button>
                                    <input onChange={this.getQuant} className="border-2 w-10 h-8 rounded pl-1 mr-4 sm:mr-0" type="number" min="1" value={this.state.quant} name="" id="" />
                                </div>
                            </div>
                            <button className="hidden sm:inline" onClick={() => this.props.showQuick(this.product)}>Quick view</button>
                        </div>
                    </div>
            </div>
        )
    }
}

let catBtn = "mx-2 px-2 pb-1 sm:h-8 bg-turq2 rounded sm:font-medium font-lg text-gray-200"


export default CatCard