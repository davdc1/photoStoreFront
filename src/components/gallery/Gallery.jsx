import { useEffect, useState } from "react"
import LargeImage from "./LargeImage";
import axios from "axios";

function Gallery(){
    const [galleryImages, setGalleryImages] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [largeImg, setLargeImg] = useState(null);

    useEffect(() => {
        async function getGalleryImages(){
            setError(false)
        setLoading(true)
        try {
            await axios.get(`${process.env.REACT_APP_API_URL}/galleryImages`)
            .then((res) => {
                setGalleryImages(res.data);
                setLoading(false)
            })
        }
        catch (error) {
            setError(true);
            setLoading(false);
            }
        }
        getGalleryImages();
    }, []);

    let showLarge = (img) => {
        setLargeImg(img);
        setShow(!show);
    }
    return (
        <div className="flex flex-row justify-center relative top-24 my-24">
            <LargeImage largeImage={show} showLarge={showLarge} imageName={largeImg} />
            <div className="flex flex-wrap justify-center mb-24">
                {!error && !loading && galleryImages.map((img, index) => {
                    return (
                        <div key={index.toString()}>
                            <img onClick={()=>showLarge(img.imageName)} className="sm:h-96 mx-4 my-4 shadow-2xl cursor-pointer" src={`${process.env.REACT_APP_API_URL}/images/smallProdImgs/${img.imageName}`} alt=""/>
                        </div>
                    )
                })}
                {error && <p>an error ocoured. can't load images.</p>}
                {loading && [1, 2, 3, 4, 5, 6].map((item, index) => {
                    return <div key={index.toString()} className="flex justify-center items-center shadow-2xl sm:h-96"><p>loading image</p></div>
                })}
            </div>
        </div>
    )
}

export default Gallery