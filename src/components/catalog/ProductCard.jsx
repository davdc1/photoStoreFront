import React from "react"
import { useState, useContext } from "react";
import { Global } from '../../contexts/GlobalContext'
import {Link} from "react-router-dom"

function ProductCard({product, showAdded, showQuick}){
    
    const context = useContext(Global);
    const [price, setPrice] = useState(product.sizes[0].price);
    const [size, setSize] = useState(product.sizes[0].size);
    const [idSize, setidSize] = useState(product.sizes[0].idSize);
    const [priceTag, setPriceTag] = useState('$' + product.sizes[0].price);
    const [quant, setQuant] = useState(1);
    

    let addToCartAtContext = () => {
        let item = {
            productId: product._id,
            prodName: product.prodName,
            price: price,
            size: size,
            idSize: idSize,
            quantity: parseInt(quant),
            imageName: product.imageName
        }

        context.addToCart(item);
    }

    let setChosenProps = (event) => {
        setPrice(product.sizes[parseInt(event.target.value)].price);
        setSize(product.sizes[parseInt(event.target.value)].size);
        setidSize(product.sizes[parseInt(event.target.value)].idSize);
        setPriceTag('$' + product.sizes[parseInt(event.target.value)].price);
    }

    let getQuant = (event) => {
        setQuant(event.target.value);
    }

    return(
        <div className='flex flex-col sm:flex-row min-h-96 my-14 mx-4 items-center px-8 py-8 border-2 border-red-50 rounded shadow-lg'>
            <div className="">
                <Link to={{pathname:`/prodpage/${product.id}`, state: {product: product}}}>
                    <img className="w-full sm:w-52 shadow-xl" src={`${process.env.REACT_APP_API_URL}/images/smallProdImgs/${product.imageName}`} alt="ProdImage" />
                </Link>
            </div>
                <div className="flex flex-col justify-between sm:ml-4 self-stretch mt-10 sm:mt-0">
                    <span className="font-medium text-2xl text-dark mb-12"><Link to={{pathname:`/prodpage/${product.id}`, state: {product: product}}}>{product.prodName}</Link></span>
                    <span className="mt-3 ">rank: {product.rank}</span>
                    <div>
                        <div className="flex flex-row-reverse sm:flex-col justify-center h-24  mx-3 mt-4">   
                            <div className="mb-4 flex flex-row items-center ">
                                <select className="mr-3 p-0.5 border-2 rounded" onChange={setChosenProps}>
                                    {product.sizes.map((obj, index) => {
                                        return <option value={index} key={index} >{obj.size}</option>
                                    })}
                                </select>
                                <span className="text-xl font-semibold">{priceTag}</span>
                            </div>
                            <div className="mb-4 sm:mb-0 flex flex-row justify-start items-center">
                                <button onClick={()=>{
                                    addToCartAtContext();
                                    showAdded(product, {price, size, quant})
                                    }} className={catBtn}>
                                        Add to basket
                                </button>
                                <input onChange={getQuant} className="border-2 w-10 h-8 rounded pl-1 mr-4 sm:mr-0" type="number" min="1" value={quant} name="" id="" />
                            </div>
                        </div>
                        <button className="hidden sm:inline border border-1 rounded px-1 py-0.5 text-red-500" onClick={() => showQuick(product)}>Quick view</button>
                    </div>
                </div>
        </div>
    )
}


let catBtn = "mx-2 px-2 pb-1 sm:h-8 bg-turq2 rounded sm:font-medium font-lg text-gray-200"


export default ProductCard