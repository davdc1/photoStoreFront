import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProdPage from "./components/ProdPage";
import Catalog from "./components/Catalog";
import Catalog2 from './components/Catalog2';
import Welcome from './components/Welcome';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Blog from './components/Blog';
import SignUp from './components/SignUp';
import Cart from './components/Cart';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import Checkout from './components/Checkout';
import BlogPost from './components/BlogPost';
import { ProtectedRoute } from './components/ProtectedRoute';
import { OrderPage } from './components/OrderPage';

//import AdminPage from './components/AdminPage';
import { AdminPage } from './components/Admin/AdminPage'


import axios from 'axios';
import { Profile2 } from './components/Profile2';
import UserContextProvider from './components/contexts/UserContext';
import GlobalContextProvider from './components/contexts/GlobalContext'
import { AdminRoute } from './components/AdminRoute';
import { Cart3 } from './components/Cart3';
import { Temp } from './components/Temp';

//export const LoggedUserContext = React.createContext();

class App extends React.Component{
  
  constructor(props){
    super(props)
    // this.state = {
    //   inCart: [],
    //   inCartNum: 0,
    //   isLogged: false,
    //   loggedUser: ""
    // }
  }

componentDidMount(){
  //this.updateCartPrev();
}

// updateCartPrev = () => {
//   console.log("updateCartPrev at app.js");
//   let items =
//   this.state.loggedUser ?
//   this.state.loggedUser.cart :
//   this.getCartItemsFromLocalStorage();
  
//   let sum = this.getInCartNum(items);
  
//   this.setState({
//     inCart:items,
//     inCartNum: sum
//   });
// }

// getInCartNum(items){
//     let sum = 0;
//     for(let i = 0; i < items.length; i++){
//         sum += items[i].quantity;
//     }
//     return sum;
// }

// getCartItemsFromLocalStorage(){
//    return localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[];
// }

// getUserByEmail = (email) => {
//   console.log("get user by email");
//   axios.post('/users/getId', {email: email})
//   .then((res)=>{
//     this.setState({loggedUser: res.data})
//   })
// }


// setUserLogged = () => {
// let user =  app.auth().currentUser
// }

//look at all the user & login things. remove what's not neccessary 
// getUserList(){
//     return localStorage.getItem("userList")?JSON.parse( localStorage.getItem("userList")):[];
// }

  render(){
  return (
    <GlobalContextProvider>
    <UserContextProvider>
    {/* <LoggedUserContext.Provider value={this.state.loggedUser} > */}
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          
          {/* <Route  path="/catalog/" component={props => <Catalog updateCartPrev={this.updateCartPrev} {...props}/>} /> */}
          <Route  path="/catalog/" component={props => <Catalog2 updateCartPrev={this.updateCartPrev} {...props}/>} />
          
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

          <Route path="/blogpost/:id" component={BlogPost} />

          {/* <Route  path="/blogtemp">
            <BlogTemp />
          </Route> */}
          
          <Route  path="/signUp" component={props => <SignUp getUserByEmail={this.getUserByEmail} {...props} />} />

          <Route  path ="/prodPage/:id" component={props => <ProdPage  updateCartPrev={this.updateCartPrev} {...props} />}/>
         
          {/* <Route  path="/Cart">
            <Cart updateCartPrev={this.updateCartPrev} userCart={UserContextProvider.value} />
          </Route> */}
          <Route  path="/Cart">
            <Cart3 />
          </Route>

          <Route  path="/Gallery">
            <Gallery />
          </Route>

          <Route path="/Checkout" component={props => <ProtectedRoute component={Checkout} {...props} />} />

          {/* <Route path="/profile"> */}
            {/* <Profile userLogged={{logged: this.state.userLogged, userName: this.state.userName}} /> */}
            {/* <ProtectedRoute component={Profile} />
          </Route> */}

          <Route path="/profile" component={props => <ProtectedRoute component={Profile2} {...props} />}/>

          <Route path="/orderpage/:id" component={ OrderPage } />
          {/* <Route path="/orderpage" component={ Temp } /> */}

          
          {/* <Route path="/admin" component={AdminPage} /> */}

          <Route path="/admin" component={props => <AdminRoute component={AdminPage} {...props} />} />

          <Route  path="">
            <NotFound />
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
    {/* </LoggedUserContext.Provider> */}
    </UserContextProvider>
    </GlobalContextProvider>
  )
  }
}

export default App;
