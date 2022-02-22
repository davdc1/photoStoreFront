import { Link } from "react-router-dom"

export function OrderAlreadySent(){
    return(
        <div>
            <div className="flex justify-center items-center border border-purple-500 rounded h-70v w-50v p-8">
                <p>It apears you are trying to access an already finished checkout procces
                    <br/>
                    if you wish to submit a new order, checkout from your 
                    <Link className="underline" to='/cart'> cart </Link>
                </p>

            </div>
        </div>
    )
}