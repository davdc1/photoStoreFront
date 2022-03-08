import React, { useEffect, useState } from 'react'
import Carousel from "./Carousel"
import { BlogAtHomePage } from "./BlogAtHomePage"
import { Link } from "react-router-dom"
import axios from "axios"

function Welcome(){

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async() => {
        try{
            let {data} = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
            setProducts(data);
            setLoading(false)
        }
        catch(error){
        }
    }
    
    return(
        <div className="flex flex-col justify-center items-center bg-appbg">
            <div className="hidden xs:inline-block fixed top-24">
                <div style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/images/wallpaper/toMuch2.jpg)`}} className="bg-contain bg-no-repeat sm:bg-bottom lg:bg-center lg:bg-cover">
                    <img className="opacity-0 w-100v" src={`${process.env.REACT_APP_API_URL}/images/wallpaper/toMuch2.jpg`} alt="" />
                </div>
            </div>

            <div className="relative">
                <div className="bg-opacity-0 h-40v sm:h-50v md:h-60v lg:h-100v flex justify-center items-center overflow-hidden">
                    <div className="bg-opacity-30 bg-gray-700 border-4 border-gray-600 rounded xs:mx-14 sm:mx-24 sm:mt-36 sm:mb-24 md:mx-36 md:mt-24 md:p-8 lg:mt-0 xl:mx-64 xl:p-20 overflow-hidden">
                        <h1 className="text-5xl mb-14 text-green-700">Some nice words</h1>
                        <p className="text-xl text-gray-200 hidden sm:inline-block">
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
                    <div className="pt-5 bg-blue-50 border-t-2 border-b-2 border-turq">
                        <p className="text-2xl mb-10">
                            <Link to={{pathname: `/catalog`, search: "?q=theme%20city", state: {notFromSearch: true}}}>
                                Best-selling products!
                            </Link>
                        </p>
                        {!loading && <Carousel productArray={products}/>}
                    </div>                        
                    <div className="h-20v border-2">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome