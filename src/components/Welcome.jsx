import Carousel from "./Carousel"
import Carousel2 from "./Carousel2"


function Welcome(){
    return(
        <div>
            <h1 className="text-3xl my-8">Welcome</h1>
            <div>
                <Carousel>
                    {/* <div className="w-96 bg-center bg-cover" style={{backgroundImage: "url((https://i.ibb.co/qJFGd2W/2.jpg)"}}></div>
                    <div className="w-96 bg-center bg-cover" style={{backgroundImage: "url(https://i.ibb.co/LCGKvc5/city.jpg)"}}></div>
                    <div className="w-96 bg-center bg-cover" style={{backgroundImage: "url(https://i.ibb.co/zGPSsXJ/E054093-D-ED10-4667-B82-B-DFF1507-DAA5-E.jpg)"}}></div> */}
                    {/* <div className="h-72 w-72 bg-center bg-cover mx-2" style={{backgroundImage: "url(https://i.ibb.co/YkTt4JD/2.jpg)"}}>1</div>
                    <div className="h-72 w-72 bg-center bg-cover mx-2" style={{backgroundImage: "url(https://i.ibb.co/D7FfSgc/city.jpg)"}}>2</div>
                    <div className="h-72 w-72 bg-center bg-cover mx-2" style={{backgroundImage: "url(https://i.ibb.co/kQKH4m7/IMG-4547.jpg)"}}>3</div> */}
                </Carousel>

                {/* <Carousel2 /> */}
            </div>
        </div>
    )
}

export default Welcome