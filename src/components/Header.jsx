
import NavBar from "./NavBar";

function Header({inCart, inCartNum}){
    return(
        <div className="text-gray-800 bg-light h-24 flex flex-col justify-center">
          <NavBar inCart={inCart} inCartNum={inCartNum} />  
        </div>
    )
}

export default Header