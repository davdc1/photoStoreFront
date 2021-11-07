import { useContext, useState } from "react";
import { User } from './contexts/UserContext';
import { Global } from "./contexts/GlobalContext";
import CartPrev from "./CartPrev";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export const NavBar2 = () => {

    //const user = useContext(User);
    const globalState = useContext(Global);

    const [searchStr, setSearchStr] = useState("");
    const [searchRedirect, setSearchRedirect] = useState(false)
    const [noMatch, setNoMatch] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [showPrev, setShowPrev] = useState(false);


    let cart = globalState.signedUser ? globalState.signedUser.cart : JSON.parse(localStorage.getItem("cartItems"));
    console.log("cart at navbar2:", cart);
    console.log("context at navbar2:", globalState);

    const search = (e) => {
        e.preventDefault();
        setNoMatch(false);
        console.log("searchStr: ", e.target[0].value);
        
        if(e.target[0].value !== ""){
            setSearchRedirect(true);
            setSearchStr(e.target[0].value);
            setToggle(!toggle);
        }else{
            setNoMatch(true)
        }
    }

    const showCartPrev = () => {
        setShowPrev(!showPrev);
    }

    return(
        <div>
                <div  className="sm:flex hidden flex-row justify-between items-center mx-6">
                    {searchRedirect && <Redirect to={`/catalog?q=${searchStr}`}/>}
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
                        <div onMouseEnter={()=>{showCartPrev();console.log("mouseEnter");}} onMouseLeave={showCartPrev}>
                            {globalState.inCartNum > 0 &&
                            <div className="w-6 h-6 border border-2 border-turq rounded relative top-3 left-6 bg-light">
                                <span>{globalState.inCartNum}</span>
                            </div>}
                            <button className="mx-2 text-lg"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/></Link></button>
                        </div>
                    </div>
                            {showPrev && <CartPrev />}
                </div>
                <div className="absolute top-0 sm:hidden flex flex-col justify-between items-center mx-6">
                <div>   
                        <Link to="/"><img className="w-16 my-2" src="/images/logo.png" alt="Logo" /></Link>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center">
                        <button className="mx-2 border border-1 rounded px-2"><Link to="/signUp">sign in</Link></button>
                        <button className="mx-2 border border-1 rounded px-2"><Link to="/profile">profile</Link></button>
                        <div onMouseEnter={()=>{showCartPrev();console.log("mouseEnter");}} onMouseLeave={showCartPrev}>
                            {globalState.inCartNum > 0 && <div className="w-6 h-6 border border-2 border-turq rounded relative top-3 left-6 bg-light">
                                <span>{globalState.inCartNum}</span>
                            </div>}
                            <button className="mx-2 text-lg"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/></Link></button>
                        </div>
                    </div>
                        <div className="mx-2 flex flex-col">
                            <button className={catBtn}><Link to="/">Home</Link></button>
                            <button className={catBtn}><Link to="/gallery">Gallery</Link></button>
                            <button className={catBtn}><Link to="/catalog">Catalog</Link></button>
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
                            {showPrev && <CartPrev />}
                </div>
            </div>
    )
}

let catBtn = "mx-2 px-2 pb-1 h-8 bg-turq2 border-solid rounded"