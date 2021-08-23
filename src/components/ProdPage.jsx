
import React from "react";
import productJson from 'C:/experis/project/clone/src/components/stuff/products.json'


class ProdPage extends React.Component{
    constructor(props){
        super(props);
        //console.log("params.id: ", props.match.params.id);
        //console.log("that: ", productJson.prodArray[props.match.params.id].price);
        this.product = productJson.prodArray[props.match.params.id - 1];
        console.log("product: ", this.product);
        this.state = {
            price: this.product.sizes[0].price,
            size: this.product.sizes[0].size,
            priceTag: '$' + this.product.sizes[0].price,
            quant: "1"
        }
    }


    setPrice = (event) => {
        let obj = {...this.state};
        obj.size = this.product.sizes[parseInt(event.target.value)].size ;
        obj.price = this.product.sizes[parseInt(event.target.value)].price;
        obj.priceTag = "$" + obj.price;
        this.setState(obj);
    }

    getQuant = (event) => {
        this.setState({quant:  event.target.value});
    }

    render(){
        return (
            <div className="text-gray-600 ">
                <div className="h-600 flex flex-col justify-center items-center mt-20 mb-32 mx-auto w-10/12 p-4 border-2 md:flex-row md:p-14">
                    <div className="mx-3 flex-1 flex flex-row justify-center">
                        <img className="max-h-70vh shadow-2xl" src={this.product.imageStr} alt="image" />
                    </div>
                    <div className="flex flex-col flex-1 mx-auto">
                        <div className="flex flex-col  mx-3 text-left">
                            <div className="mb-4 flex flex-col justify-between">
                                <h1 className="text-2xl mb-2 align-top">a product</h1>
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
                                        return <option value={obj.val} key={index} >{obj.size}</option>
                                    })}
                                </select>
                                <span className="text-xl font-semibold">{this.state.priceTag}</span>
                            </div>
                            <div className="flex flex-row justify-start">
                                <input onChange={this.getQuant} className="border-2 w-10 h-8 rounded pl-1" type="number" min="1" value={this.state.quant} name="" id="" />
                                <button className={catBtn}>Add to basket</button>
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