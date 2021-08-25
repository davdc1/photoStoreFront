import Carousel from "./Carousel"
import CarouselLarge from "./CarouselLarge"
import CarouselLine from "./CarouselLine"
//import productsJson from 'src/components/stuff/products.json'

function Welcome(){

    //let products = productsJson.prodArray

    let images = [
        "https://i.ibb.co/YkTt4JD/2.jpg",
        "https://i.ibb.co/D7FfSgc/city.jpg",
        "https://i.ibb.co/kQKH4m7/IMG-4547.jpg",
        "https://i.ibb.co/xfPpJw1/bridge.jpg",
        "https://i.ibb.co/hyVKDZ4/dwntwn.jpg"
    ]

    return(
        <div>
            <h1 className="text-3xl my-8">Welcome</h1>
            <div>
                <div className="pt-5 mt-20 mb-24 bg-green-50 border-t-2 border-b-2 border-turq">
                    <p className="text-2xl mb-10">it's a headline!</p>
                    <Carousel imagesArray={images}/>
                </div>
                <div className="pt-5 mt-20 mb-24 bg-green-50 border-t-2 border-b-2 border-turq">
                    <p className="text-2xl mb-10">it's a headline!</p>
                    <CarouselLine imagesArray={images}/>
                </div>
                {/* <div className="pt-5 mt-20 mb-24 bg-green-50 border-t-2 border-b-2 border-turq">
                    <p className="text-2xl mb-10">it's a headline!</p>
                    <CarouselLarge imagesArray={images}/>
                </div> */}
            </div>
        </div>
    )
}

export default Welcome