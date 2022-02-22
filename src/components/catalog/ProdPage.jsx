import React from "react";
import LargeImage from "../gallery/LargeImage";
import ItemAdded from "./ItemAdded";
import { Global } from '../contexts/GlobalContext'
import axios from "axios";

class ProdPage extends React.Component{

    static contextType = Global;

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            error: false,
            quant: "1",
            largeImage: false,
            added: false
        }
    }

    async getProduct(){
        try{
            let {data} = await axios.get(`${process.env.REACT_APP_API_URL}/products/${this.props.match.params.id}`);
            this.setState({
                error:false,
                loading: false,
                product: data,
                price: data.sizes[0].price,
                size: data.sizes[0].size,
                idSize: data.sizes[0].idSize,
                priceTag: '$' + data.sizes[0].price,
            })
        }
        catch(error){
            this.setState({
                error:true,
                loading:false
            })
        }
    }

    componentDidMount(){
        if(this.props.location.state){
            if(this.props.location.state.product){
                let product = this.props.location.state.product
                this.setState({
                    error: false,
                    loading: false,
                    product: product,
                    price: product.sizes[0].price,
                    size: product.sizes[0].size,
                    idSize: product.sizes[0].idSize,
                    priceTag: '$' + product.sizes[0].price,
                })

            }else{
            this.getProduct()
            }
        }else{
            this.getProduct()
        }
    }

    showAdded = () => {
        this.setState({
            added: !this.state.added
        })
    }

    addToCartAtGlobalContext = () => {
        let item = {
            productId: this.state.product._id,
            prodName: this.state.product.prodName,
            price: this.state.price,
            size: this.state.size,
            idSize: this.state.idSize,
            quantity: parseInt(this.state.quant),
            imageName: this.state.product.imageName
        }

        this.context.addToCart(item);
    }

    showLarge = (product) => {
        this.setState({
            largeImage: !this.state.largeImage,
        });
    }

    setPrice = (event) => {
        this.setState({
            price: this.state.product.sizes[parseInt(event.target.value)].price,
            size: this.state.product.sizes[parseInt(event.target.value)].size,
            idSize: this.state.product.sizes[parseInt(event.target.value)].idSize,
            priceTag: "$" + this.state.product.sizes[parseInt(event.target.value)].price
        })
    }

    getQuant = (event) => {
        this.setState({quant:  event.target.value});
    }

    render(){
        if(this.state.error){
            return(
            <div className="h-600 flex flex-col justify-center items-center mt-20 mb-32 mx-auto w-10/12 p-4 border-2 md:flex-row md:p-14">
                <p>something went wrong</p>
            </div>)
        }else if(this.state.loading){
            return (
            <div className="h-600 flex flex-col justify-center items-center mt-20 mb-32 mx-auto w-10/12 p-4 border-2 md:flex-row md:p-14">
                <p>loading</p>
            </div>)
        }else
        {return (
            <div className="text-gray-600 relative top-24">
                <LargeImage  imageName={this.state.product.imageName} largeImage={this.state.largeImage} showLarge={this.showLarge} />
                {this.state.added && <ItemAdded product={this.state.product} chosenProdProps={this.state} show={this.state.added} showAdded={this.showAdded} />}
                <div className="flex flex-col justify-center items-center mt-20 mb-32 mx-auto w-10/12 p-4 border-2 rounded md:flex-row md:p-14">
                    <div className="mx-3 flex-1 flex flex-row justify-center">
                        <img onClick={this.showLarge} className="max-h-70v shadow-2xl cursor-pointer" src={`${process.env.REACT_APP_API_URL}/images/largeProdImgs/${this.state.product.imageName}`} alt="productImage" />
                    </div>
                    <div className="flex flex-col flex-1 mx-auto">
                        <div className="flex flex-col  mx-3 text-left">
                            <div className="mb-4 flex flex-col justify-between">
                                <h1 className="text-2xl mb-2 align-top">{this.state.product.prodName}</h1>
                                <p>product id: {this.props.match.params.id}</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit., tempore, corrupti quisquam magnam.</p>
                            </div>
                            <hr />
                            <div className="my-4"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  perspiciatis architecto odio, reprehenderit amet maiores aliquid alias mollitia eum similique</p></div>
                            <hr />
                        </div>
                        <div className="h-24  mx-3 my-4">   
                            <div className="mb-4 flex flex-row items-center">
                                <span className="mr-3">Print size</span>
                                <select className="mr-3 p-0.5 border-2 rounded" onChange={this.setPrice}>
                                    {this.state.product.sizes.map((obj, index) => {
                                        return <option value={index} key={index} >{obj.size}</option>
                                    })}
                                </select>
                                <span className="text-xl font-semibold">{this.state.priceTag}</span>
                            </div>
                            <div className="flex flex-row justify-start">
                                <input onChange={this.getQuant} className="border-2 w-10 h-8 rounded pl-1" type="number" min="1" value={this.state.quant} name="" id="" />
                                <button onClick={()=>{this.addToCartAtGlobalContext(); this.showAdded();}}  className={catBtn}>Add to basket</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    }
}

let catBtn = "mx-2 px-2 pb-1 h-8 bg-turq2 rounded font-medium text-gray-200"

export default ProdPage;