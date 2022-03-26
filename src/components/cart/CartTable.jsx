import { useContext, useState } from "react"
import { Global } from '../../contexts/GlobalContext'
import { Link } from 'react-router-dom'


function CartTable(){
    let context = useContext(Global);
    const [editCart, setEditCart] = useState(false);
    return(
        <div className="flex flex-col sm:justify-center items-stretch border border-2 rounded sm:m-10 w-90v sm:w-auto">
            {context.cart.length > 0 &&  
                <div className="hidden sm:flex justify-around">
                    <div className="flex-1 w-44"></div>
                    <div className="flex-1 w-44 mr-14"></div>
                    <span className="flex-1 mx-2">unit price</span>
                    <span className="flex-1 mx-2">quantity</span>                        
                    <span className="flex-1 ml-2">total</span>
                    <span className="flex-1 w-44"></span>
                </div>}
            {context.cart.map((item, index) =>{
                if(item.quantity){
                    return (
                        <div key={index.toString()} className="flex justify-center border-t-2 sm:py-6 sm:px-8 py-2 px-3">
                            <Link to={{pathname:`/prodpage/${item.productId}`}}>
                                <img src={`${process.env.REACT_APP_API_URL}/images/smallProdImgs/${item.imageName}`} alt="" className="w-16 sm:w-auto sm:h-72 mx-3" />
                            </Link>
                            <div className="sm:flex-1 flex flex-col sm:flex-row justify-between sm:items-center items-start ">
                                <div className="flex flex-col">
                                    <Link to={{pathname:`/prodpage/${item.productId}`}}>
                                        <span className="font-semibold">{item.prodName || "name!"}</span>
                                    </Link>
                                    <div>
                                        <span className="sm:hidden">size: </span>
                                        <span className="mx-3">{item.size}</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="sm:hidden">unit price: </span>
                                    <span className="mx-3">${item.price}</span>
                                </div>
                                <div className="sm:mx-3 flex sm:items-strech items-start">
                                    {/* <span>quantity: {item.quantity}</span> */}
                                    <div className="flex sm:items-strech sm:mx-3">
                                        <span className="sm:hidden mr-2">quantity:</span>
                                        {editCart && <button onClick={()=>{context.minusQuant(item.idSize)}} className="w-6 border border-1 rounded-l">
                                            -
                                        </button>}
                                        <span className="px-2 py-1 border border-1 ">{item.quantity}</span>
                                        {editCart && <button onClick={()=>{context.plusQuant(item.idSize)}} className="w-6 border border-1 rounded-r">
                                            +
                                        </button>}
                                    </div>
                                </div>
                                <div>
                                    <span className="sm:hidden">total: </span>
                                    <span className="mx-3">${item.price * item.quantity}</span>
                                </div>
                                <div>
                                    {editCart && <button onClick={() => context.removeItem(item.idSize)} className="text-xs">
                                        remove
                                    </button>}
                                </div>
                            </div>
                        </div>)
                }else{
                    return null
                }
        })}
        {context.cart.length === 0 && <div className="border-t-2 py-6 px-8"><span>your cart is empty</span></div>}
            <div className="border border-b-0 border-r-0 border-l-0 border-t-2">
                {!editCart && <button onClick={() => setEditCart(!editCart)} className="text-sm my-1">Edit cart</button>}
                {editCart && context.cart.length > 0 && <button onClick={context.emptyCart} className="text-sm my-1">empty cart</button>}
                {editCart && <div><button onClick={() => {context.sendCart(); setEditCart(!editCart)}} className="text-sm my-1">Apply changes</button></div>}
            </div>
        </div>
    )
}

export default CartTable