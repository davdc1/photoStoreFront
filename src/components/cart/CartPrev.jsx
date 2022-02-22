import { useContext } from "react";
import { Global } from '../contexts/GlobalContext'

function CartPrev(){

    const context = useContext(Global);

    return(
        <div className="z-20 flex flex-col justify-center items-center absolute max-w-sm top-24 right-6 border border-1 border-turq bg-white px-2">
            <div>
                {context.total && <span className="text-xl">total: ${context.total}</span>}
                <hr className="w-32 border-2 border-turq" />
            </div>
            <div className="flex flex-wrap justify-center">
                {context.cart && context.cart.map((item, index) => {
                    if(item.quantity){
                        return (
                            <div key={index}>
                                <div className="flex justify-evenly items-center my-4">
                                    <img className="w-14 mx-3" src={`${process.env.REACT_APP_API_URL}/images/smallProdImgs/${item.imageName}`} alt="" />
                                    <div>
                                        <p>(X {item.quantity}):</p>
                                        <p>{item.size}</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        )
                    }else{
                        return null
                    }
                })}
            </div>
        </div>
    )
}

export default CartPrev