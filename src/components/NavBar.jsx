
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import CartPrev from './CartPrev'

class NavBar extends React.Component{
    
    constructor(props){
        super(props)
        this.str = ""
        this.state = {
            searchStr: "",
            searchRedirect: false,
            inCart: this.getCartItems(),
            //doesn't update until mouseOver cart:
            inCartNum: this.getInCartNum(),
            noMatch: false,
            toggle: false,
            showPrev: false
        }
    }

    updateCartPrev = () => {
        this.setState({
            inCart: this.getCartItems(),
            inCartNum: this.getCartItems()?this.getInCartNum():0,
            showPrev: !this.state.showPrev
        });
    }

    getInCartNum(){
        let items = this.getCartItems();
        let sum = 0;
        for(let i = 0; i < items.length; i++){
            sum += items[i].quantity;
        }
        return sum;
    }

    getCartItems(){
       return JSON.parse(localStorage.getItem("cartItems"));
    }

    search = (e) => {
        this.setState({noMatch: false})
        e.preventDefault();
        console.log("searchStr: ", e.target[0].value);
        
        //validation. propTypes?
        
        if(e.target[0].value !== ""){
            this.setState({searchRedirect: true, searchStr: e.target[0].value, toggle: !this.state.toggle})
        }else{
            this.setState({noMatch: true})
        }
    }

    render(){
        return (
            <div  className="flex flex-row justify-between items-center mx-6">
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
                    <div className="flex flex-col">
                        <form onSubmit={this.search} action="">
                            <input className="border border-light border-2 p-0.5 rounded rounded-r-none" type="text" placeholder=""></input>
                            <button className="border border-turq border-2 p-0.5 rounded rounded-l-none bg-light"> search</button>
                        </form>
                        {this.state.noMatch && <span className="text-black">enter a valid term</span>}
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="mx-2 border border-1 rounded px-2"><Link to="/signUp">sign in</Link></button>
                    <div onMouseEnter={()=>{this.updateCartPrev();console.log("mouseEnter");}} onMouseLeave={this.updateCartPrev} >
                        {this.state.inCartNum > 0 && <div className="w-6 h-6 border border-2 border-turq rounded relative top-3 left-6 bg-light">
                            <span>{this.state.inCartNum}</span>
                        </div>}
                        <button className="mx-2 text-lg"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/></Link></button>
                    </div>
                </div>
                        {this.state.showPrev && <CartPrev items={this.state.inCart} />}
            </div>
        )
    }
}

let catBtn = "mx-2 px-2 pb-1 h-8 bg-turq2 border-solid rounded"


export default NavBar