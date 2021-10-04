import { useState } from "react"

const imgs = [
    "2.jpg",
    "bridge.jpg",
    "city.jpg",
    "IMG_4547.jpg",
    "dwntwn.jpg"
]

function Gallery(){
    let {ze, veze} = useState();
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-wrap justify-center py-10">
                {imgs.map((img) => {
                    return (
                        <div>
                            <img className="h-96 mx-4 my-4 shadow-2xl" src={`./images/${img}`} alt=""/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery