
import React from "react";


class ProdPage extends React.Component{
    constructor(props){
        super(props);
        console.log("params: ", props.match.params);
        this.state = {
            price: null,
            size: 0,
            priceTag: "$100",
            quant: "1"
        }
    }


    setPrice = (event) => {
        let obj = {...this.state};
        obj.size = parseInt(event.target.value[0]);
        obj.price = (parseInt(event.target.value[0]) * 100);
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
                        <img className="max-h-70vh shadow-2xl" src="https://i.ibb.co/LCGKvc5/city.jpg" alt="image" />
                    </div>
                    <div className="flex flex-col flex-1 mx-auto">
                        <div className="flex flex-col  mx-3 text-left">
                            <div className="mb-4 flex flex-col justify-between">
                                <h1 className="text-2xl mb-2 align-top">a product</h1>
                                <p>here: {this.props.match.params.id} Lorem ipsum dolor sit amet consectetur, adipisicing elit., tempore, corrupti quisquam magnam.</p>
                            </div>
                            <hr />
                            <div className="my-4"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  perspiciatis architecto odio, reprehenderit amet maiores aliquid alias mollitia eum similique</p></div>
                            <hr />
                        </div>
                        <div className=" h-24  mx-3 my-4">   
                            <div className="mb-4 flex flex-row items-center">
                                <span className="mr-3">Print size</span>
                                <select className="mr-3 p-0.5 border-2 rounded" onChange={this.setPrice}>
                                    {/* <option value="0-none">Choose size</option> */}
                                    <option value="1-A3">A3 (31X25cm)</option>
                                    <option value="2-A2">A2 (45X36)</option>
                                    <option value="3-A1">A1 (67X54cm)</option>
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