
import {Link} from "react-router-dom"

function CatCard({product, showQuick}){
    return(
        <div className='flex h-96 my-14 mx-4 items-center px-8 border-2 border-light'>
            <div className="">
                <Link to={{pathname:`/prodpage/${product.id}`}}><img className="w-52 shadow-xl" src={product.imageStr} alt="ProdImage" /></Link>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div className="flex flex-col justify-around h-4/6 ml-4">
                    <span className="mx-3 font-medium text-xl mb-12"><Link to={{pathname:`/prodpage/${product.id}`}}>product name (id: {product.id})</Link></span>
                    <span className="mx-3">rank: {product.rank}</span>
                    <div className="flex items-center justify-around">
                        <button className="rounded border-2 border-turq py-0.5 px-1 ">Add to cart</button>
                        <span className="mx-3 font-medium text-xl">${product.price}</span>
                    </div>
                    <button className="" onClick={showQuick}>Quick view</button>
                </div>
            </div>
        </div>
    )
}



export default CatCard