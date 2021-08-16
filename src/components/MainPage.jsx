
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProdPage from "./ProdPage";

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
                <ProdPage />
                <Footer />
            </div>
        )
    }
}

export default MainPage;