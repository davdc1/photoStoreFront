import React from "react"


class Carousel extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            images:  [
                "url(https://i.ibb.co/YkTt4JD/2.jpg)",
                "url(https://i.ibb.co/D7FfSgc/city.jpg)",
                "url(https://i.ibb.co/kQKH4m7/IMG-4547.jpg)",
                "url(https://i.ibb.co/xfPpJw1/bridge.jpg)",
                "url(https://i.ibb.co/hyVKDZ4/dwntwn.jpg)"
            ]
        }
    }

    rotateRight = () => {
        let array = this.state.images;
        
        let temp = array[array.length - 1]
        for(let i = array.length - 1; i >= 0; i--){
            array[i] = array[i - 1];
        }
        array[0] = temp;
        this.setState({images: array})
    }

    rotateLeft = () => {
        let array = this.state.images;
        let temp = array[0];
        for(let i = 0; i < array.length - 1; i++){
            array[i] = array[i + 1];
        }
        array[array.length - 1] = temp;
        this.setState({images: array});
    }

    render(){
        return(
            <div className="pt-5 mt-20 mb-24 bg-green-50 border-t-2 border-b-2 border-turq">
                <p className="text-2xl mb-10">it's a headline!</p>
                <div className="flex justify-center items-center pb-12">
                    <button onClick={this.rotateLeft} className="text-xl bg-light rounded-full w-8 h-8 mx-4">{"<"}</button>
                    {/* {this.state.images.map((str, index) => {
                        if(index === 0 || index === (this.state.images.length - 1)){
                            return <div className="rounded filter grayscale h-52 w-52 bg-center bg-cover mx-2" style={{backgroundImage:  this.state.images[index]}}></div>
                        }
                        return <div className="rounded shadow-2xl h-72 w-72 bg-center bg-cover mx-8" style={{backgroundImage:  this.state.images[index]}}></div>
                    })} */}
                    {this.state.images.map((str, index) => {
                        if(index === (this.state.images.length / 2) - 0.5){
                            return <div key={index} className="border border-1 rounded shadow-2xl h-72 w-72 bg-center bg-cover mx-8" style={{backgroundImage:  str}}></div>
                        }
                        return <div key={index} className="border border-1 rounded filter grayscale h-52 w-52 bg-center bg-cover mx-2" style={{backgroundImage:  this.state.images[index]}}></div>
                    })}
                    <button onClick={this.rotateRight} className="text-xl bg-light rounded-full w-8 h-8 mx-4">{">"}</button>
                </div>
            </div>
        )
    }
}


export default Carousel
