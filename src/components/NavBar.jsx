
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function NavBar(){
    return (
        <div  className="flex flex-row justify-between mx-6">
            <div>
                {/* <img src="" alt="logo" /> */}
                Logo
            </div>
            <div className="flex items-center">
                <div className="mx-2">
                    <button className={catBtn}>Home</button>
                    <button className={catBtn}>Gallery</button>
                </div>
                <input className="h-6 p-1.5 rounded" type="text" placeholder="Search"></input>
            </div>
            <div className="">
                <button className="mx-2">sign in</button>
                <button className="mx-2"><FontAwesomeIcon icon={faShoppingCart}/></button>
            </div>
        </div>
    )
}

let catBtn = "mx-2 px-2 pb-1 h-8 bg-turq2 border-solid rounded"


export default NavBar