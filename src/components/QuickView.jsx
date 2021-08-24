import React from "react";

function QuickView({show, showQuick, product}){

    if(show == false){
        return null
    }
    return (
        <div className="flex justify-center items-center w-screen h-screen z-10 fixed">
            <div className="w-96 h-96 border border-1 bg-light mb-44">
                <p>Quick View</p>
                <button onClick={showQuick} className="border border-1 rounded py-0.5 px-1.5">close</button>
            </div>
        </div>
    ) 
}

export default QuickView