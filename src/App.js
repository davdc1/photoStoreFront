import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProdPage from "./components/ProdPage";
import Catalog from "./components/Catalog";
import Welcome from './components/Welcome';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Blog from './components/Blog';
import SignUp from './components/SignUp';
import Cart from './components/Cart';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import Checkout from './components/Checkout';
import Profile from './components/Profile';


class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      inCart: [],
      inCartNum: 0,
      userLogged: false,
      userName: ""
    }
  }

componentDidMount(){
  this.updateCartPrev();
}

updateCartPrev = () => {
  let items = this.getCartItems();
  let sum = this.getInCartNum(items);
  this.setState({inCart: items, inCartNum: sum});
}

getInCartNum(items){
    let sum = 0;
    for(let i = 0; i < items.length; i++){
        sum += items[i].quantity;
    }
    return sum;
}

getCartItems(){
   return localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[];
}



getUserList(){
    return localStorage.getItem("userList")?JSON.parse( localStorage.getItem("userList")):[];
}

  handleLogIn = (event) => {
    event.preventDefault();
    console.log("event:", event.target[0].value, event.target[1].value);

    let users = this.getUserList();
    for(let i = 0; i < users.length; i++){
        if(users[i].userName === event.target[0].value && event.target[1].value === users[i].password){
            console.log("logIn successfull");
            
            this.setState({
              userLogged: true,
              userName: users[i].userName
            })
            //this.props.history.push("/profile")
        }else{
            console.log("incorrect userName/password");
        }
    }
}


  render(){
  return (
    <Router>
      <div className="App">
        <Header inCart={this.state.inCart} inCartNum={this.state.inCartNum} />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          
          <Route  path="/catalog/" component={props => <Catalog updateCartPrev={this.updateCartPrev} {...props}/>} />
          
          <Route  path="/catalog/:category" component={props => <Catalog {...props}/>} />
          
          <Route  path="/contactUs">
            <ContactUs />
          </Route>
          
          <Route  path="/about">
            <About />
          </Route>
          
          <Route  path="/blog">
            <Blog />
          </Route>
          
          <Route  path="/signUp" >
            <SignUp  handleLogIn={this.handleLogIn} userLogged={{logged: this.state.userLogged, userName: this.state.userName}} />
          </Route>

          <Route  path ="/prodPage/:id" component={ProdPage}/>
         
          <Route  path="/Cart">
            <Cart />
          </Route>

          <Route  path="/Gallery">
            <Gallery />
          </Route>

          <Route path="/Checkout" component={Checkout} />

          <Route path="/profile">
            <Profile userLogged={{logged: this.state.userLogged, userName: this.state.userName}} />
          </Route>
          
          <Route  path="">
            <NotFound />
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  )
  }
}

export default App;
