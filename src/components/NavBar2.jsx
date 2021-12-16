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
    const [showSmall, setShowSmall] = useState(false);


    let cart = globalState.signedUser ? globalState.signedUser.cart : JSON.parse(localStorage.getItem("cartItems"));

    const search = (e) => {
        e.preventDefault();
        setNoMatch(false);
        console.log("searchStr: ", e.target[0].value);
        
        if(e.target[0].value !== ""){
            setSearchStr(e.target[0].value);
            setSearchRedirect(true);
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
            {searchRedirect && <Redirect to={`/catalog?search=${searchStr}`}/>}
            <div  className="lg:flex hidden flex-row justify-between items-center mx-6">
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

                {/* small navbar: */}
            <div className="lg:hidden flex justify-between">
                <div className="flex flex-col items-start justify-between mx-6">
                    {!showSmall && <div onClick={() => setShowSmall(!showSmall)}>
                        <p className="m-1 font-semibold text-4xl">MENU</p>
                    </div>}
                    {showSmall &&
                    <p onClick={() => setShowSmall(!showSmall)}>
                         X close
                    </p>}
                    {showSmall && <div>
                        <div className="flex flex-col items-start">
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
                                <button>search</button>
                                <input className="ml-2 p-0.5 bg-transparent border-b-2" type="text"></input>
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