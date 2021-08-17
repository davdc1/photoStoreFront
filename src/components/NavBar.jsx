
function NavBar(){
    return (
        <div  className="flex flex-row justify-between mx-6">
            <div>
                <img src="" alt="logo" />
            </div>
            <div>
                <button className={catBtn}>category</button>
                <button className={catBtn}>category</button>
                <button className={catBtn}>category</button>
                <button className={catBtn}>category</button>
            </div>
            <div>
                <button className="mx-2">sign in</button>
                <button className="mx-2">cart</button>
            </div>
        </div>
    )
}

let catBtn = "mx-2 px-2 pb-1 h-8 bg-turq2 border-solid rounded"


export default NavBar