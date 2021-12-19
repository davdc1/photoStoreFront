import React from "react";

function LargeImage({largeImage, showLarge, imageName}){

    if(largeImage === false){
        return null
    }
    return (
        <div className="z-50 flex justify-center items-center w-screen h-screen fixed top-0 bg-black bg-opacity-100">
                <div className="flex flex-col justify-center items-center w-screen sm:w-3/6">
                    <img className="w-100v sm:w-3/5" src={`${process.env.REACT_APP_API_URL}/images/largeProdImgs/${imageName}`} alt="imageHere" />
                    <button onClick={showLarge} className="text-white rounded px-1.5 my-1">close</button>
            </div>
        </div>
    ) 
}

export default LargeImage