
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProdPage from "./ProdPage";
import Catalog from "./Catalog";


class MainPage extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <Header />
                {/* <ProdPage /> */}
                <Catalog />
                <Footer />
            </div>
        )
    }
}

export default MainPage;