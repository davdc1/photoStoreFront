import { Link } from "react-router-dom"
import Carousel from "./Carousel"
import CarouselLarge from "./CarouselLarge"
import CarouselLine from "./CarouselLine"
import productJson from "./stuff/products.json"

function Welcome(){

    let products = productJson.prodArray

    return(
        <div>
            <h1 className="text-3xl my-8">Welcome</h1>
            <div>
                <div className="pt-5 mt-20 mb-24 bg-blue-50 border-t-2 border-b-2 border-turq">
                    <p className="text-2xl mb-10"><Link to={{pathname: `/catalog`, search: "?q=theme%20city", state: {notFromSearch: true}}}>Best-selling products!</Link></p>
                    <Carousel productArray={products}/>
                </div>
                <div className="pt-5 mt-20 mb-24 bg-blue-50 border-t-2 border-b-2 border-turq">
                    <p className="text-2xl mb-10"><Link to={{pathname: `/catalog`, search: "?q=theme%20architecture", state: {notFromSearch: true}}}>Another Category products!</Link></p>
                    <CarouselLine productArray={products}/>
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