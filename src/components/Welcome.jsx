import axios from "axios"
import { Link } from "react-router-dom"
import Carousel from "./Carousel"
import CarouselLine from "./CarouselLine"
import { BlogAtHomePage } from "./BlogAtHomePage"

import React from 'react'

class Welcome extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loading: true,
            products: null
        }
    }

    componentDidMount(){
        this.getProducts();
    }

    async getProducts(){
        try{
            let products = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
            this.setState({
                products: products.data,
                loading: false
            })
        }
        catch(error){
        }
    }
    
    render(){
        return(
            <div className="flex flex-col items-center bg-appbg">
                {/* <div className="fixed top-24 flex justify-center">
                    <div className="h-80v w-100v">
                        <img className="w-full overflow-hidden absolute -bottom-56" src="./images/toMuch2.jpg" alt="" />
                    </div>
                </div> */}
                <img className="w-full overflow-hidden fixed top-24" src="./images/toMuch2.jpg" alt="" />

                <div className="relative">
                    <div className="mx-96 bg-opacity-0 h-95v flex justify-center items-center">
                        <div className="bg-opacity-30 bg-gray-700 mx-36 border-4 border-gray-600 rounded p-20">
                            <h1 className="text-5xl mb-14 text-green-700">Some nice words</h1>
                            <p className="text-xl text-gray-200">
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Atque nisi voluptates labore aliquam
                                illum incidunt fugiat esse excepturi sit libero alias, 
                                deleniti beatae est error rerum ducimus eligendi!
                                Dignissimos, voluptatibus.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-50">
                        <BlogAtHomePage />
                        <div className="pt-5 mb-24 bg-blue-50 border-t-2 border-b-2 border-turq">
                            <p className="text-2xl mb-10">
                                <Link to={{pathname: `/catalog`, search: "?q=theme%20city", state: {notFromSearch: true}}}>
                                    Best-selling products!
                                </Link>
                            </p>
                            {!this.state.loading && <Carousel productArray={this.state.products}/>}
                        </div>
                        <div className="pt-5 mt-20  bg-blue-50 border-t-2 border-b-2 border-turq">
                            <p className="text-2xl mb-10"><Link to={{pathname: `/catalog`, search: "?q=theme%20architecture", state: {notFromSearch: true}}}>Another Category products!</Link></p>
                            {!this.state.loading && <CarouselLine productArray={this.state.products}/>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome