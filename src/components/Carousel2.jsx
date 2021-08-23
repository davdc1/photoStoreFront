import React from "react"


class Carousel2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
        <div className="carousel relative rounded relative overflow-hidden shadow-xl flex justify-center">
        <div className="carousel-inner relative overflow-hidden w-full mb-10 flex justify-center">
          {/* <!--Slide 1--> */}
          <div>
          <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" defaultChecked="checked" />
          <div className="carousel-item absolute opacity-0 bg-center bg-cover w-96" style={{height: "500px", backgroundImage: "url(https://i.ibb.co/qJFGd2W/2.jpg)", }}>
          
          </div>
          <label htmlFor="carousel-3"
            className="border border-1 control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"><i
              className="fas fa-angle-left mt-3"></i></label>
          <label htmlFor="carousel-2"
            className="border border-1 next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              className="fas fa-angle-right mt-3"></i></label>
          </div>
      
          {/* <!--Slide 2--> */}
          <div>
          <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
          <div className="carousel-item absolute opacity-0 bg-center bg-cover w-96" style={{height: "500px", backgroundImage: "url(https://i.ibb.co/LCGKvc5/city.jpg)"}}>
          </div>
          <label htmlFor="carousel-1"
            className=" border border-1 control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
              className="fas fa-angle-left mt-3"></i></label>
          <label htmlFor="carousel-3"
            className="border border-1 next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              className="fas fa-angle-right mt-3"></i></label>
          </div>
      
          {/* <!--Slide 3--> */}
          <div>
          <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
          <div className="carousel-item absolute opacity-0 bg-center bg-cover w-96" style={{height:" 500px", backgroundImage: "url(https://i.ibb.co/zGPSsXJ/E054093-D-ED10-4667-B82-B-DFF1507-DAA5-E.jpg)"}}>
          </div>
          <label htmlFor="carousel-2"
            className="border border-1 control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
              className="fas fa-angle-left mt-3"></i></label>
          <label htmlFor="carousel-1"
            className="border border-1 next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              className="fas fa-angle-right mt-3"></i></label>

          </div>
      
          {/* <!-- Add additional indicators for each slide--> */}
          {/* <ol className="carousel-indicators">
            <li className="inline-block mr-3">
              <label htmlFor="carousel-1"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
            <li className="inline-block mr-3">
              <label htmlFor="carousel-2"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
            <li className="inline-block mr-3">
              <label htmlFor="carousel-3"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
          </ol> */}
      
        </div>
      </div>
        )
    }
}

export default Carousel2