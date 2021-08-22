
function CatCard({product}){
    return(
        <div className='flex flex-col my-14 mx-4'>
            <div className="">
                <img className="w-52 shadow-xl" src={product.imageStr} alt="ProdImage" />
            </div>
            <div className="flex flex-col">
                <div>
                    <span className="mx-3">name: {product.prodName}</span>
                    <span>price: ${product.price}</span>
                </div>
                <div>
                    <span className="mx-3">rank: {product.rank}</span>
                    <button className="border py-0.5 px-1">Add to cart</button>
                </div>
            </div>
        </div>
    )
}



export default CatCard