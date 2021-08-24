
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import { render } from '@testing-library/react'

class NavBar extends React.Component{
    
    constructor(props){
        super(props)
        this.str = ""
        this.state = {
            searchStr: "",
            searchRedirect: false,
            toggle: true
        }
    }

    getSearchInput = (event) => {
        this.str = event.target.value
    }

    search = () => {
        console.log("here: ", this.str);
        this.setState({searchRedirect: true, searchStr: this.str, toggle: !this.state.toggle}, () => {console.log("go: ", this.state.searchStr)})
    }
    
    render(){
        return (
            <div  className="flex flex-row justify-between mx-6">
                {this.state.searchRedirect && <Redirect to={`/catalog?q=${this.state.searchStr}`}/>}
                <div>
                    <Link to="/"><img className="w-16 my-2" src="images\logo.png" alt="Logo" /></Link>
                </div>
                <div className="flex items-center">
                    <div className="mx-2">
                        <button className={catBtn}><Link to="/">Home</Link></button>
                        <button className={catBtn}><Link to="/gallery">Gallery</Link></button>
                        <button className={catBtn}><Link to="/catalog">Catalog</Link></button>
                        <button className={catBtn}><Link to="/about">About</Link></button>
                    </div>
                    <input onChange={this.getSearchInput} className="border border-light border-2 p-0.5 rounded rounded-r-none" type="text" placeholder=""></input>
                    <button onClick={this.search} className="border border-turq border-2 p-0.5 rounded rounded-l-none bg-light">Search</button>
                </div>
                <div className="">
                    <button className="mx-2 border border-1 rounded px-2"><Link to="/signUp">sign in</Link></button>
                    <button className="mx-2"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/></Link></button>
                </div>
            </div>
        )
    }
}

let catBtn = "mx-2 px-2 pb-1 h-8 bg-turq2 border-solid rounded"


export default NavBar