import { Link } from 'react-router-dom'


function ItemAdded({show, showAdded, product, chosenProdProps}){

    if(show === false){
        return null
    }
    return (
        <div className="flex justify-center items-center w-screen h-screen z-10 fixed top-0 bg-gray-500 bg-opacity-60">
            <div className=" flex flex-col justify-start items-center border border-1 rounded bg-white h-p500 w-p600 p-12 pt-6 my-auto">
                <button onClick={showAdded} className="border border-1 rounded px-1.5 mb-4 self-end">X</button>
                <div className="flex flex-col justify-between items-center w-full my-10">
                    <div className="w-full my-4 text-xl">
                        <span>Item added to cart:</span>
                        <hr className="border-2 mt-8" />
                    </div>
                    <div className="flex justify-evenly items-center w-full my-4">
                        <div>
                            <img className="w-16" src={`${process.env.REACT_APP_API_URL}/images/smallProdImgs/${product.imageName}`} alt="" />
                        </div>
                        <div className="flex flex-col">
                            <span>{product.prodName}</span>
                            <span>{chosenProdProps.size}</span>
                        </div>
                        <div>
                            <span>${chosenProdProps.price}</span>
                        </div>
                        <div>
                            <span>X{chosenProdProps.quant}</span>
                        </div>
                    </div>
                    <div className="w-full">
                        <hr className="border-2 mb-8" />
                        <div className="flex justify-evenly w-full my-4">
                            <Link to="/catalog"><button onClick={showAdded} className="mx-2 px-2 pb-1 h-8 bg-turq2 border-solid rounded">Continue shopping</button></Link>
                            <Link to="/cart"><button className="mx-2 px-2 pb-1 h-8 bg-turq2 border-solid rounded">Cart</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}


export default ItemAdded