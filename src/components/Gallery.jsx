import { useState } from "react"
import LargeImage from "./LargeImage";

const imgs = [
    "2.jpg",
    "bridge.jpg",
    "city.jpg",
    "IMG_4547.jpg",
    "dwntwn.jpg"
]

function Gallery(){
    let [show, setShow] = useState(false);
    let [largeImg, setLargeImg] = useState(null);

    let showLarge = (img) => {
        console.log("img:", img);
        setLargeImg(img);
        setShow(!show);
    }
    return (
        <div className="flex flex-row justify-center relative top-24 my-24">
            {/* {show && <p onClick={()=>showLarge()}>{`only shown when true. (img is ${largeImg}) click to hide`}</p>} */}
            <LargeImage largeImage={show} showLarge={showLarge} imageName={largeImg} />
            <div className="flex flex-wrap justify-center mb-24">
                {imgs.map((img, index) => {
                    return (
                        <div key={index.toString()}>
                            <img onClick={()=>showLarge(img)} className="h-96 mx-4 my-4 shadow-2xl" src={`./images/${img}`} alt=""/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery