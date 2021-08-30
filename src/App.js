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
import Checkout1 from './components/Checkout1';

class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      inCart: [],
      toggleAdded: false
    }
  }

  getCartItems(){

  }

  itemAdded = () => {
    this.setState({toggleAdded: !this.state.toggleAdded})
  }


  render(){
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          
          <Route  path="/catalog/" component={props => <Catalog {...props}/>} />
          
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
          
          <Route  path="/signUp">
            <SignUp />
          </Route>

          <Route  path ="/prodPage/:id" component={ProdPage}/>
         
          <Route  path="/Cart">
            <Cart />
          </Route>

          <Route  path="/Gallery">
            <Gallery />
          </Route>

          <Route path="/Checkout1" component={Checkout1} />
          
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
