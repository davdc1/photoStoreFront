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
          <Route exact path="/catalog">
            <Catalog />
          </Route>
          <Route exact path="/contactUs">
            <ContactUs />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>

          <Route exact path ="/prodPage/:id" component={ProdPage}/>

          {/* <Route exact path="/prodPage/:id"
          render={({match}) => <ProdPage match={match} id={this.state.id}/>} /> */}
         
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route exact path="/Gallery">
            <Gallery />
          </Route>
          <Route exact path="">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
