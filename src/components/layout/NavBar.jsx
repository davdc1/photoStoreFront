import { useContext, useState } from "react";
import { Global } from "../contexts/GlobalContext";
import CartPrev from "../cart/CartPrev";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";

export const NavBar = () => {

    const globalState = useContext(Global);

    const [noMatch, setNoMatch] = useState(false);
    const [showPrev, setShowPrev] = useState(false);
    const [showSmall, setShowSmall] = useState(false);

    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        setNoMatch(false);
        if(e.target[0].value !== ""){
            history.push(`/catalog?search=${e.target[0].value}`)
        }else{
            setNoMatch(true)
        }
    }

    const showCartPrev = () => {
        setShowPrev(!showPrev);
    }

    return(
        <div>
            <div className="lg:flex hidden flex-row justify-between items-center mx-6">
                <div>   
                    <Link to="/"><img className="w-16 my-2" src="/images/logo.png" alt="Logo" /></Link>
                </div>
                <div className="flex items-center">
                    <div className="mx-2">
                        <button className={catBtn}><Link to="/">Home</Link></button>
                        <button className={catBtn}><Link to="/gallery">Gallery</Link></button>
                        <button className={catBtn}><Link to="/catalog">Catalog</Link></button>
                        <button className={catBtn}><Link to="/blog">Blog</Link></button>
                        <button className={catBtn}><Link to="/about">About</Link></button>
                     </div>
                     <div className="flex flex-col">
                        <form onSubmit={search} action="">
                            <input className="border border-light border-2 p-0.5 rounded rounded-r-none" type="text" placeholder=""></input>
                            <button className="border border-turq border-2 p-0.5 rounded rounded-l-none bg-light"> search</button>
                        </form>
                        {noMatch && <span className="text-black">enter a valid term</span>}
                     </div>
                 </div>
                <div className="flex items-center">
                    {globalState.signedUser && <span>{`Hello ${globalState.signedUser.name.firstName}`}</span>}
                    {globalState.signedUser && <button className="mx-2 border border-1 rounded px-2"><Link to="/signUp">Change user</Link></button>}
                    {!globalState.signedUser && <button className="mx-2 border border-1 rounded px-2"><Link to="/signUp">sign in</Link></button>}
                    <button className="mx-2 border border-1 rounded px-2"><Link to="/profile">profile</Link></button>
                    <div onMouseEnter={()=>{showCartPrev();}} onMouseLeave={showCartPrev}>
                        {globalState.inCartNum > 0 &&
                        <div className="w-6 h-6 border border-2 border-turq rounded relative top-3 left-6 bg-light">
                            <span>{globalState.inCartNum}</span>
                        </div>}
                        <button className="mx-2 text-lg"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/></Link></button>
                    </div>
                </div>
                 {showPrev && <CartPrev />}
            </div>

                {/* small navbar: */}
            <div className="lg:hidden flex justify-between">
                <div className="flex flex-col items-start justify-between mx-6">
                    {!showSmall && <div onMouseEnter={() => setShowSmall(!showSmall)}>
                        <p className="m-1 font-semibold text-2xl cursor-pointer">Menu</p>
                    </div>}
                    
                    {showSmall &&
                    <div  onMouseLeave={() => setShowSmall(false)}>
                        <div className="sm:h-64 xs:h36"></div>
                        <div className="flex flex-col items-start border border-purple-500 bg-light py-6 px-4">
                            <button className="m-2 px-2 border" onClick={() => setShowSmall(!showSmall)}> X close</button>
                            <div className="flex flex-col items-start">
                                <button className="mx-2 px-2"><Link to="/signUp">sign in</Link></button>
                                <button className="mx-2 px-2"><Link to="/profile">profile</Link></button>
                            </div>
                            <div className="mx-2 flex flex-col items-start">
                                <button className={smallCatBtn}><Link to="/">Home</Link></button>
                                <button className={smallCatBtn}><Link to="/gallery">Gallery</Link></button>
                                <button className={smallCatBtn}><Link to="/catalog">Catalog</Link></button>
                                <button className={smallCatBtn}><Link to="/blog">Blog</Link></button>
                                <button className={smallCatBtn}><Link to="/about">About</Link></button>
                            </div>
                            <div className="flex flex-col items-start">
                                <form onSubmit={search} action="">
                                    <input className="ml-2 p-0.5 bg-transparent border-b-2" type="text"></input>
                                    <button className="border rounded px-1 py-0.5">search</button>
                                </form>
                                {noMatch && <span className="text-black">enter a valid term</span>}
                            </div>
                        </div>
                    </div>}
                </div>
                {
                <div className="mr-4">
                    {globalState.inCartNum > 0 &&
                    <div className="w-6 h-6 border border-2 border-turq rounded relative top-3 left-6 bg-light">
                        <span>{globalState.inCartNum}</span>
                    </div>}
                    <button className="mx-2 text-lg"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/></Link></button>
                </div>}
            </div>
        </div>
   )
}

let catBtn = "mx-2 px-2 pb-1 h-8 bg-turq2 border-solid rounded"
let smallCatBtn = "mx-2 my-2 h-8 text-turq"