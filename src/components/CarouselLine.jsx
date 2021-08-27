import React from "react"
import { Link } from 'react-router-dom'

class CarouselLine extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            products: this.props.productArray,
            // images2: [
            //     "https://i.ibb.co/YkTt4JD/2.jpg",
            //     "https://i.ibb.co/D7FfSgc/city.jpg",
            //     "https://i.ibb.co/kQKH4m7/IMG-4547.jpg",
            //     "https://i.ibb.co/xfPpJw1/bridge.jpg",
            //     "https://i.ibb.co/hyVKDZ4/dwntwn.jpg"
            // ]
        }
    }

    //pass images as props. try to use array.map on first state asignement

    rotateRight = () => {
        let array = this.state.products;
        
        let temp = array[array.length - 1]
        for(let i = array.length - 1; i >= 0; i--){
            array[i] = array[i - 1];
        }
        array[0] = temp;
        this.setState({products: array})
    }

    rotateLeft = () => {
        let array = this.state.products;
        let temp = array[0];
        for(let i = 0; i < array.length - 1; i++){
            array[i] = array[i + 1];
        }
        array[array.length - 1] = temp;
        this.setState({products: array});
    }

    render(){
        return(
            <div className="flex justify-center items-center pb-12 mx-72">
                <button onClick={this.rotateLeft} className="text-xl bg-light rounded-full w-8 h-8 mx-4">{"<"}</button>
                <div className="flex justify-center items-center pb-12  overflow-hidden">
                    {this.state.products.map((product, index) => {
                        //return <div key={index} className="border border-1 rounded shadow-2xl h-72 w-auto bg-center bg-cover mx-8 overflow-hidden" style={{backgroundImage:  product}}></div>
                        return <Link to={{pathname:`/prodpage/${product.id}`}} key={index} ><img src={product.imageStr} alt="thing" className="border border-1 rounded h-p300 w-auto mx-8" /></Link>
                    })}
                </div>
                <button onClick={this.rotateRight} className="text-xl bg-light rounded-full w-8 h-8 mx-4">{">"}</button>
            </div>
        )
    }
}


export default CarouselLine
