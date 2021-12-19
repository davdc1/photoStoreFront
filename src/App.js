import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProdPage from "./components/ProdPage";
import Catalog2 from './components/Catalog2';
import Welcome from './components/Welcome';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Blog from './components/Blog';
import SignUp from './components/SignUp';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import Checkout from './components/Checkout';
import BlogPost from './components/BlogPost';
import { ProtectedRoute } from './components/ProtectedRoute';
import { OrderPage } from './components/OrderPage';
import { AdminPage } from './components/Admin/AdminPage'
import { Profile } from './components/Profile';
import GlobalContextProvider from './components/contexts/GlobalContext'
import { AdminRoute } from './components/AdminRoute';
import { Cart } from './components/Cart'

class App extends React.Component{

  render(){
  return (
    <GlobalContextProvider>
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          
          <Route  path="/catalog/" component={props => <Catalog2 updateCartPrev={this.updateCartPrev} {...props}/>} />
          
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
          
          <Route  path="/signUp" component={props => <SignUp getUserByEmail={this.getUserByEmail} {...props} />} />

          <Route  path ="/prodPage/:id" component={props => <ProdPage  updateCartPrev={this.updateCartPrev} {...props} />}/>
         
          <Route  path="/Cart">
            <Cart />
          </Route>

          <Route  path="/Gallery">
            <Gallery />
          </Route>

          <Route path="/Checkout" component={props => <ProtectedRoute component={Checkout} {...props} />} />

          <Route path="/profile" component={props => <ProtectedRoute component={Profile} {...props} />}/>

          <Route path="/orderpage/:id" component={ OrderPage } />

          <Route path="/admin" component={props => <AdminRoute component={AdminPage} {...props} />} />

          <Route  path="">
            <NotFound />
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
    </GlobalContextProvider>
  )
  }
}

export default App;
