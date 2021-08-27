
import React from "react";
import {Link} from "react-router-dom"


function LargeImage({largeImage, showLarge, product}){

    if(largeImage == false){
        return null
    }
    return (
        <div className="flex justify-center items-center w-screen h-screen z-10 fixed top-0 bg-black bg-opacity-90">
            <div className="flex flex-col justify-center items-center rounded h-screen my-14">
                <div className="flex flex-col justify-center items-center">
                    <img className="h-5/6" src={product.imageStr} alt="image here" />
                    <button onClick={showLarge} className="text-white rounded px-1.5 my-1">close</button>
                </div>
            </div>
        </div>
    ) 
}

export default LargeImage