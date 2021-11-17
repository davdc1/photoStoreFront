
import NavBar from "./NavBar";
import { NavBar2 } from "./NavBar2";

function Header({inCart, inCartNum}){
    return(
        <div className="z-50 text-gray-800 bg-light sm:h-24 flex flex-col justify-center sm:border-b-4 border-gray-600 fixed top-0 w-full">
          {/* <NavBar inCart={inCart} inCartNum={inCartNum} />   */}
          <NavBar2 />
        </div>
    )
}

export default Header