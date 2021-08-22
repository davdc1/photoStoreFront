
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom'

function NavBar(){
    return (
        <div  className="flex flex-row justify-between mx-6">
            <div>
                <img src="src\images\logo.png" alt="Logo" />
            </div>
            <div className="flex items-center">
                <div className="mx-2">
                    <button className={catBtn}><Link to="/">Home</Link></button>
                    <button className={catBtn}><Link to="/gallery">Gallery</Link></button>
                    <button className={catBtn}><Link to="/catalog">Catalog</Link></button>
                    <button className={catBtn}><Link to="/about">About</Link></button>
                </div>
                <input className="h-6 p-1.5 rounded" type="text" placeholder="Search"></input>
            </div>
            <div className="">
                <button className="mx-2"><Link to="/signUp">sign in</Link></button>
                <button className="mx-2"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/></Link></button>
            </div>
        </div>
    )
}

let catBtn = "mx-2 px-2 pb-1 h-8 bg-turq2 border-solid rounded"


export default NavBar