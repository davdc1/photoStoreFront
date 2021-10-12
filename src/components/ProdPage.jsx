
import React from "react";
import productJson from './stuff/products.json'
import LargeImage from "./LargeImage";
import ItemAdded from "./ItemAdded";

class ProdPage extends React.Component{
    constructor(props){
        super(props);

        //either pass id and make an api request to get the product by id, or pass the product object itself and fetch only the img. or? 
        this.product = props.location.state.product;
        // this.product = productJson.prodArray[props.match.params.id - 1];
        //this.product = productJson.prodArray[0];
        //console.log("prod: ", props.location);
        //console.log("product: ", this.product);
        this.state = {
            price: this.product.sizes[0].price,
            size: this.product.sizes[0].size,
            idSize: this.product.sizes[0].idSize,
            priceTag: '$' + this.product.sizes[0].price,
            quant: "1",
            largeImage: false,
            added: false
        }
    }

    showAdded = () => {
        this.setState({
            added: !this.state.added
        })
    }

    addToCart = () => {
        let items = localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[];
        //handle duplicates:
        let sum = 0;
        console.log("add:", this.state.idSize);
        for(let i = 0; i < items.length; i++){
            if(items[i].idSize === this.state.idSize){
                sum += parseInt(items[i].quantity);
                items.splice(i, 1);
                i--;
            }
        }

        items.push({
            id: this.props.match.params.id,
            prodName: this.product.prodName,
            price: this.state.price,
            size: this.state.size,
            idSize: this.state.idSize,
            quantity: (parseInt(this.state.quant) + sum) <= 10 ? (parseInt(this.state.quant) + sum) : 10,
            image: this.product.imageStr
        })
        localStorage.setItem("cartItems", JSON.stringify(items));
    }


    showLarge = (product) => {
        this.setState({
            largeImage: !this.state.largeImage,
        });
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
        return (
            <div className="text-gray-600 ">
                <LargeImage  imageName={this.product.imageName} largeImage={this.state.largeImage} showLarge={this.showLarge} />
                {this.state.added && <ItemAdded product={this.product} chosenProdProps={this.state} show={this.state.added} showAdded={this.showAdded} />}
                <div className="h-600 flex flex-col justify-center items-center mt-20 mb-32 mx-auto w-10/12 p-4 border-2 md:flex-row md:p-14">
                    <div className="mx-3 flex-1 flex flex-row justify-center">
                        <img onClick={this.showLarge} className="max-h-70vh shadow-2xl cursor-pointer" src={"http://127.0.0.1:5000/images/largeProdImgs/" + this.product.imageName} alt="image" />
                    </div>
                    <div className="flex flex-col flex-1 mx-auto">
                        <div className="flex flex-col  mx-3 text-left">
                            <div className="mb-4 flex flex-col justify-between">
                                <h1 className="text-2xl mb-2 align-top">{this.product.prodName}</h1>
                                <p>product id: {this.props.match.params.id}</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit., tempore, corrupti quisquam magnam.</p>
                            </div>
                            <hr />
                            <div className="my-4"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  perspiciatis architecto odio, reprehenderit amet maiores aliquid alias mollitia eum similique</p></div>
                            <hr />
                        </div>
                        <div className=" h-24  mx-3 my-4">   
                            <div className="mb-4 flex flex-row items-center">
                                <span className="mr-3">Print size</span>
                                <select className="mr-3 p-0.5 border-2 rounded" onChange={this.setPrice}>
                                    {this.product.sizes.map((obj, index) => {
                                        return <option value={index} key={index} >{obj.size}</option>
                                    })}
                                </select>
                                <span className="text-xl font-semibold">{this.state.priceTag}</span>
                            </div>
                            <div className="flex flex-row justify-start">
                                <input onChange={this.getQuant} className="border-2 w-10 h-8 rounded pl-1" type="number" min="1" value={this.state.quant} name="" id="" />
                                <button onClick={()=>{this.addToCart(); this.showAdded(); this.props.updateCartPrev()}}  className={catBtn}>Add to basket</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let catBtn = "mx-2 px-2 pb-1 h-8 bg-turq2 rounded font-medium text-gray-200"

export default ProdPage;