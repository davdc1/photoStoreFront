import React from "react"
import {Link} from "react-router-dom"
import { Global } from './contexts/GlobalContext'

class CatCard extends React.Component{
    
    static contextType = Global;
    
    constructor(props){
        super(props)
        this.product = this.props.product;
        this.state = {
            loggedUser: "",
            price: this.product.sizes[0].price,
            size: this.product.sizes[0].size,
            idSize: this.product.sizes[0].idSize,
            priceTag: '$' + this.product.sizes[0].price,
            quant: "1"
        }
    }

    componentDidMount(){
        const user = this.context.signedUser;
        this.setState({loggedUser: user})
    }

    addToCartAtGlobalContext = () => {
        let item = {
            productId: this.product._id,
            prodName: this.product.prodName,
            price: this.state.price,
            size: this.state.size,
            idSize: this.state.idSize,
            quantity: parseInt(this.state.quant),
            imageName: this.product.imageName
        }

        this.context.addToCart(item);
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
                    <Link to={{pathname:`/prodpage/${this.product.id}`, state: {product: this.product}}}>
                        <img className="w-full sm:w-52 shadow-xl" src={`${process.env.REACT_APP_API_URL}/images/largeProdImgs/${this.product.imageName}`} alt="ProdImage" />
                    </Link>
                </div>
                    <div className="flex flex-col justify-between sm:ml-4 self-stretch mt-10 sm:mt-0">
                        <span className="font-medium text-xl mb-12"><Link to={{pathname:`/prodpage/${this.product.id}`, state: {product: this.product}}}>name: {this.product.prodName}</Link></span>
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
                                    <button onClick={()=>{
                                        this.addToCartAtGlobalContext();
                                        this.props.showAdded(this.product, this.state)
                                        }} className={catBtn}>
                                            Add to basket
                                    </button>
                                    <input onChange={this.getQuant} className="border-2 w-10 h-8 rounded pl-1 mr-4 sm:mr-0" type="number" min="1" value={this.state.quant} name="" id="" />
                                </div>
                            </div>
                            <button className="hidden sm:inline border border-1 rounded px-1 py-0.5 text-red-500" onClick={() => this.props.showQuick(this.product)}>Quick view</button>
                        </div>
                    </div>
            </div>
        )
    }
}

let catBtn = "mx-2 px-2 pb-1 sm:h-8 bg-turq2 rounded sm:font-medium font-lg text-gray-200"


export default CatCard