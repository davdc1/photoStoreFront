import React from "react";
import {Link} from "react-router-dom"


function QuickView({show, showQuick, product}){

    if(show === false){
        return null
    }
    return (
        <div className="flex justify-center items-center w-screen h-screen z-10 fixed top-0 bg-gray-500 bg-opacity-60">
            <div className=" flex flex-col justify-between items-center border border-1 rounded bg-white h-p500 w-p600 p-12 pt-6 my-auto">
                <button onClick={showQuick} className="border border-1 rounded px-1.5 mb-4 self-end">X</button>
                <div className="flex justify-between items-center w-full">
                    <div className="">
                        <Link to={{pathname:`/prodpage/${product.id}`}}><img className="w-p250 shadow-xl" src={`${process.env.REACT_APP_API_URL}/images/largeProdImgs/${product.imageName}`} alt="ProdImage" /></Link>
                    </div>
                        <div className="flex flex-col justify-between self-stretch w-p200">
                            <span className="mx-3 font-medium text-xl mb-12"><Link to={{pathname:`/prodpage/${product.id}`}}>product name: {product.prodName}</Link></span>
                            <hr />
                            <p className="text-left my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique Voluptatibus necessitatibus, perspiciatis quibusdam  sapien.</p>
                            <hr />
                            <span className="my-3">rank: {product.rank}</span>
                        </div>
                </div>
            </div>
        </div>
    ) 
}

export default QuickView