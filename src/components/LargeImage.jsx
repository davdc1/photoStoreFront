
import React from "react";


function LargeImage({largeImage, showLarge, imageName}){

    if(largeImage === false){
        return null
    }
    return (
        <div className="flex justify-center items-center w-screen h-screen z-10 fixed top-0 bg-black bg-opacity-100">
            <div className="flex flex-col justify-center items-center rounded h-screen my-14">
                <div className="flex flex-col justify-center items-center w-3/6">
                    <img className="w-3/5" src={"/images/largeProdImgs/" + imageName} alt="imageHere" />
                    <button onClick={showLarge} className="text-white rounded px-1.5 my-1">close</button>
                </div>
            </div>
        </div>
    ) 
}

export default LargeImage