import { Link } from 'react-router-dom'

function ChckoutCart({shippingPrice, taxRate, total, items}){
    // let taxRate = 0.17;
    // let items = localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[];
    // let total = 0;

    // if(items){
    //     for(let i = 0; i < items.length; i++){
    //         total += (parseInt(items[i].price) * items[i].quantity);
    //     }
    // }

    return(
        <div className="">
            <div className="h-96 overflow-x-scroll">
                {items.map((item, index)=>{
                    if(item.quantity){
                        console.log("itemImage:", item.imageName);
                        return (<div key={index.toString()} className="flex justify-between items-center border-t-2 py-6 px-8">
                                    {/* <Link to={{pathname:`/prodpage/${item.id}`}}><img src={item.image} alt="product image" className="h-20 mx-3" /></Link> */}
                                    <Link to={{pathname:`/prodpage/${item.productId}`}}><img src={`/images/smallProdImgs/${item.imageName}`} alt="product image" className="h-20 mx-3" /></Link>
                                    <div className="flex flex-col">
                                        <Link to={{pathname:`/prodpage/${item.productId}`}}><span className="font-semibold">{item.prodName}</span></Link>
                                        <span className="mx-3">{item.size}</span>
                                    </div>
                                    <span className="mx-3">${item.price}</span>
                                    <div className="mx-3 flex items-strech ">
            
                                    </div>
                                    <span className="mx-3">${item.price * item.quantity}</span>
                            </div>)
                    }
                })}
            </div>
            
            <div className="flex flex-col items-start pl-3 py-3">
                <span className="">sub-total: ${total}</span>
                <span>shipping: ${shippingPrice}</span>
                <span>tax: ${((total + shippingPrice) * taxRate).toFixed(2)}</span>
                <span>total: ${((total + shippingPrice) * (1 + taxRate)).toFixed(2)}</span>
            </div>
        </div>
    )
}

export default ChckoutCart