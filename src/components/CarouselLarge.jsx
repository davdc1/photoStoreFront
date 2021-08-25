import React from "react"


class CarouselLarge extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            images: this.props.imagesArray,
            images2: [
                "https://i.ibb.co/YkTt4JD/2.jpg",
                "https://i.ibb.co/D7FfSgc/city.jpg",
                "https://i.ibb.co/kQKH4m7/IMG-4547.jpg",
                "https://i.ibb.co/xfPpJw1/bridge.jpg",
                "https://i.ibb.co/hyVKDZ4/dwntwn.jpg"
            ]
        }
    }

    rotateRight = () => {
        let array = this.state.images2;
        
        let temp = array[array.length - 1]
        for(let i = array.length - 1; i >= 0; i--){
            array[i] = array[i - 1];
        }
        array[0] = temp;
        this.setState({images2: array})
    }

    rotateLeft = () => {
        let array = this.state.images2;
        let temp = array[0];
        for(let i = 0; i < array.length - 1; i++){
            array[i] = array[i + 1];
        }
        array[array.length - 1] = temp;
        this.setState({images2: array});
    }

    render(){
        return(
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center w-p1000 overflow-hidden">
                    <button onClick={this.rotateLeft} className="text-xl bg-light rounded-full w-8 h-8 mx-4">{"<"}</button>
                    <div className="flex justify-center items-center ">
                        {this.state.images2.map((str, index) => {
                            //return <div key={index} className="border border-1 rounded shadow-2xl w-p200 h-p300 bg-center bg-cover" style={{backgroundImage:  str}}></div>
                            return <img src={str} alt="thing" className="border border-1 rounded w-p1000 m-0" />
                        })}
                    </div>
                    <button onClick={this.rotateRight} className="text-xl bg-light rounded-full w-8 h-8 mx-4">{">"}</button>
                </div>
            </div>
        )
    }
}


export default CarouselLarge
