
import NavBar from "./NavBar";

function Header({inCart, inCartNum}){
    return(
        <div className="z-50 text-gray-800 bg-light h-24 flex flex-col justify-center border-b-4 border-gray-600 fixed top-0 w-full">
          <NavBar inCart={inCart} inCartNum={inCartNum} />  
        </div>
    )
}

export default Header