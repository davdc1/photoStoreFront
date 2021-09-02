import { Link } from 'react-router-dom'

function ChckoutCart(){
    
    let items = localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[];
    let total = 0;
        if(items){
            for(let i = 0; i < items.length; i++){
                total += (parseInt(items[i].price) * items[i].quantity);
            }
        }

    return(
        <div className="h-96 overflow-x-scroll">
            {items.map((item, index)=>{
                 if(item.quantity){
                    return (<div key={index.toString()} className="flex justify-between items-center border-t-2 py-6 px-8">
                                <Link to={{pathname:`/prodpage/${item.id}`}}><img src={item.image} alt="" className="h-20 mx-3" /></Link>
                                <div className="flex flex-col">
                                    <Link to={{pathname:`/prodpage/${item.id}`}}><span className="font-semibold">{item.prodName}</span></Link>
                                    <span className="mx-3">{item.size}</span>
                                </div>
                                <span className="mx-3">${item.price}</span>
                                <div className="mx-3 flex items-strech ">
                                    {/* <span>quantity: {item.quantity}</span> */}
                                    {/* <div className="flex items-strech mx-3">
                                        <button onClick={()=>{this.minusQuant(item.idSize)}} className="w-6 border border-1 rounded-l">-</button>
                                        <span className="px-2 py-1 border border-1 ">{item.quantity}</span>
                                        <button onClick={()=>{this.plusQuant(item.idSize)}} className="w-6 border border-1 rounded-r">+</button>
                                    </div> */}
                                </div>
                                <span className="mx-3">${item.price * item.quantity}</span>
                        </div>)
                }
            })}
            <p>total: {total}</p>
        </div>
    )
}

export default ChckoutCart