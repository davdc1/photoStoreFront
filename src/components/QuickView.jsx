import React from "react";
import {Link} from "react-router-dom"


function QuickView({show, showQuick, product}){

    if(show == false){
        return null
    }
    return (
        <div className="flex  justify-center items-center w-screen h-screen z-10 fixed">
            <div className=" flex border border-1 bg-light h-96 p-8 mb-72">
                <div className="">
                    <Link to={{pathname:`/prodpage/${product.id}`}}><img className="w-52 shadow-xl" src={product.imageStr} alt="ProdImage" /></Link>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <div className="flex flex-col justify-around h-4/6 ml-4 w-64">
                        <span className="mx-3 font-medium text-xl mb-12"><Link to={{pathname:`/prodpage/${product.id}`}}>product name (id: {product.id})</Link></span>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique Voluptatibus necessitatibus, perspiciatis quibusdam  sapien.</p>
                        <br />
                        <span className="mx-3">rank: {product.rank}</span>
                        <div className="flex items-center justify-around">
                            <button className="rounded border-2 border-turq py-0.5 px-1 ">Add to cart</button>
                            <span className="mx-3 font-medium text-xl">${product.price}</span>
                        </div>
                        <button onClick={showQuick} className="border border-1 rounded py-0.5 px-1.5 mt-6">close</button>
                    </div>
                </div>
            </div>
        </div>
    ) 

    return (
        <div className='flex h-96 my-14 mx-4 items-center px-8 border-2 border-light'>
            <div className="">
                <Link to={{pathname:`/prodpage/${product.id}`}}><img className="w-52 shadow-xl" src={product.imageStr} alt="ProdImage" /></Link>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div className="flex flex-col justify-around h-4/6 ml-4">
                    <span className="mx-3 font-medium text-xl mb-12"><Link to={{pathname:`/prodpage/${product.id}`}}>product name (id: {product.id})</Link></span>
                    <span className="mx-3">rank: {product.rank}</span>
                    <div className="flex items-center justify-around">
                        <button className="rounded border-2 border-turq py-0.5 px-1 ">Add to cart</button>
                        <span className="mx-3 font-medium text-xl">${product.price}</span>
                    </div>
                    <button onClick={showQuick} className="border border-1 rounded py-0.5 px-1.5">close</button>
                </div>
            </div>
        </div>
    )
}

export default QuickView