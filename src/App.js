import './App.css';

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


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route  path="/catalog" component={props => <Catalog {...props}/>} />
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
          
          <Route  path="">
            <NotFound />
          </Route>


        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
