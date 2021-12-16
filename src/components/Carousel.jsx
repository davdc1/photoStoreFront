import React from "react"
import {Link} from 'react-router-dom'

class Carousel extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            products: this.props.productArray
        }
    }

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
            <div >
                <div className="flex justify-center items-center pb-12">
                    <button onClick={this.rotateLeft} className="text-xl bg-light rounded-full w-8 h-8 mx-4">{"<"}</button>
                    {this.state.products.map((product, index) => {
                        if(index <= 4){
                            if(index === 2){
                                return (
                                <Link to={{pathname:`/prodpage/${product.id}`, state:{product}}} key={index} >
                                    <div key={index} className="border border-1 rounded shadow-2xl 2xl:h-72 h-20vw 2xl:w-72 w-20v bg-center bg-cover 2xl:mx-8 mx-2" style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/images/smallProdImgs/${product.imageName})`}}>
                                    </div>
                                </Link>
                                    )
                            }else{
                                return (
                                <Link to={{pathname:`/prodpage/${product.id}`, state:{product}}} key={index} >
                                    <div key={index} className="md:inline-block hidden border border-1 rounded filter grayscale 2xl:h-52 h-15vw 2xl:w-52 w-15v bg-center bg-cover 2xl:mx-2 mx-1" style={{backgroundImage:  `url(${process.env.REACT_APP_API_URL}/images/smallProdImgs/${product.imageName})`}}>
                                        </div>
                                </Link>
                                )
                            }
                        }else{
                            return null
                        }
                    })}
                    <button onClick={this.rotateRight} className="text-xl bg-light rounded-full w-8 h-8 mx-4">{">"}</button>
                </div>
            </div>
        )
    }
}


export default Carousel
