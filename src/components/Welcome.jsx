import axios from "axios"
import { Link } from "react-router-dom"
import Carousel from "./Carousel"
import CarouselLine from "./CarouselLine"

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
            <div>
                <h1 className="text-3xl my-8">Welcome</h1>
                <div>
                    <div className="pt-5 mt-20 mb-24 bg-blue-50 border-t-2 border-b-2 border-turq">
                        <p className="text-2xl mb-10">
                            <Link to={{pathname: `/catalog`, search: "?q=theme%20city", state: {notFromSearch: true}}}>
                                Best-selling products!
                            </Link>
                        </p>
                        {!this.state.loading && <Carousel productArray={this.state.products}/>}
                    </div>
                    <div className="pt-5 mt-20 mb-24 bg-blue-50 border-t-2 border-b-2 border-turq">
                        <p className="text-2xl mb-10"><Link to={{pathname: `/catalog`, search: "?q=theme%20architecture", state: {notFromSearch: true}}}>Another Category products!</Link></p>
                        {!this.state.loading && <CarouselLine productArray={this.state.products}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome