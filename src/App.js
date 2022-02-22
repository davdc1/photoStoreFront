import './App.css';
import React from 'react';

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ProdPage from "./components/catalog/ProdPage";
import Catalog2 from './components/catalog/Catalog2';
import Welcome from './components/home page/Welcome';
import ContactUs from './components/general/ContactUs';
import About from './components/general/About';
import Blog from './components/blog/Blog';
import SignUp from './components/general/SignUp';
import Gallery from './components/gallery/Gallery';
import { NotFound } from './components/general/NotFound';
import Checkout from './components/checkout/Checkout';
import BlogPost from './components/blog/BlogPost';
import { ProtectedRoute } from './components/route Hoc/ProtectedRoute';
import { OrderPage } from './components/profile/OrderPage';
import { AdminPage } from './components/Admin/AdminPage'
import { Profile } from './components/profile/Profile';
import GlobalContextProvider from './components/contexts/GlobalContext'
import { AdminRoute } from './components/route Hoc/AdminRoute';
import { Cart } from './components/cart/Cart'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component{

  render(){
  return (
    <GlobalContextProvider>
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          
          <Route  path="/catalog/" component={props => <Catalog2 {...props}/>} />
          
          <Route  path="/contactUs" component={ContactUs} />
          
          <Route  path="/about" component={About} />
          
          <Route exact path="/blog" component={Blog} />

          <Route path="/blog/blogpost/:id" component={BlogPost} />
          
          <Route  path="/signUp" component={props => <SignUp getUserByEmail={this.getUserByEmail} {...props} />} />

          <Route  path ="/prodPage/:id" component={props => <ProdPage  updateCartPrev={this.updateCartPrev} {...props} />}/>
         
          <Route  path="/Cart" component={Cart} />

          <Route  path="/Gallery" component={Gallery} />

          <Route path="/Checkout" component={props => <ProtectedRoute component={Checkout} {...props} />} />

          <Route path="/profile" component={props => <ProtectedRoute component={Profile} {...props} />}/>

          <Route path="/orderpage/:id" component={ OrderPage } />

          <Route path="/admin" component={props => <AdminRoute component={AdminPage} {...props} />} />

          <Route  path="/notFound" component={NotFound} />
          
          <Route  path="" component={NotFound} />

        </Switch>
        <Footer />
      </div>
    </Router>
    </GlobalContextProvider>
  )
  }
}

export default App;
