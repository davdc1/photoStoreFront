import { NavBar } from "./NavBar";

function Header(){
    return(
        <div className="z-50 text-gray-800 bg-light sm:h-24 flex flex-col justify-center sm:border-b-4 border-gray-600 fixed top-0 w-full">
          <NavBar />
        </div>
    )
}

export default Header