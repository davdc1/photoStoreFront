import React from "react"
import CatCard2 from "./CatCard2";
import QuickView from "./QuickView";
import productJson from 'C:/experis/project/clone/src/components/stuff/products.json'


class Catalog extends React.Component{
    
    constructor(){
        
        super();
        
        let urlSearchParams = new URLSearchParams(window.location.search);
        let params = Object.fromEntries(urlSearchParams.entries());
        console.log("at catalog: search params.q: ", params.q);
        
        this.state = {
            prodArray: productJson.prodArray,
            filterBy: "all",
            filterByArr: [],
            searchStr: params.q,
            quickV: false,
            quickProduct: ""
        }
    }
    

    showQuick = (product) => {
        this.setState({
            quickV: !this.state.quickV,
            quickProduct: product
        });
    }

    searchCat = (event) => {
        this.setState({searchStr: event.target.value});
    }

    sortCat = (event) => {
        let array = this.state.prodArray;
        if(event.target.value === "low"){
            array.sort((a, b) => {
                if(a.price > b.price){
                    return 1;
                }else if(a.price < b.price){
                    return -1;
                }else{
                    return 0;
                }
            });
        }else if(event.target.value === "high"){
            array.sort((a, b) => {
                if(a.price > b.price){
                    return -1;
                }else if(a.price < b.price){
                    return 1;
                }else{
                    return 0;
                }
            });
        }else if(event.target.value === "rank"){
            array.sort((a, b) => {
                if(a.rank > b.rank){
                    return -1;
                }else if(a.rank < b.rank){
                    return 1;
                }else{
                    return 0;
                }
            });
        }
        this.setState({prodArray: array});
    }

    filterCat = (event) => {
        console.log("event: ", event.target.id);
        this.setState({
            filterBy: event.target.id
        });
    }

    filter2 = (event) => {
        let temp = this.state.filterByArr;
        if(event.target.checked == true){
            temp.push(event.target.id)
            this.setState({filterByArr: temp})
        }else{  
            temp.splice(temp.indexOf(event.target.id),1)
        }
        console.log("filter array: ", this.state.filterByArr);
    }
    render(){
        console.log(this.props)
        return (
            <div>
                <div className="my-2">
                    <input className="mr-1 border-light border-2 rounded p-0.5" type="text" placeholder="Search" onChange={this.searchCat}/>
                    <select className="ml-1 p-0.5 border-light border-2 rounded" name="" id="" onChange={this.sortCat}>
                        <option value="default" defaultValue>Sort by:</option>
                        <option value="low">price: Low to High</option>
                        <option value="high">price: High to low</option>
                        <option value="rank">Rank</option>
                    </select>
                    <QuickView product={this.state.quickProduct} show={this.state.quickV} showQuick={this.showQuick} />
                </div>
                <div className="flex items-start">
                    <div>
                        <div className="flex flex-col justify-center w-52 pb-4 px-4 ml-4 mt-14 border-4 h-80">
                            <div className="flex flex-col">
                                <p className="w-52 text-left">Filter by:</p>
                                <div className="flex justify-between items-center my-2">
                                    <span htmlFor="city">All</span>
                                    <input onClick={this.filterCat} type="radio" name="filter" id="all" />
                                </div>
                                <div className="flex justify-between items-center my-2">
                                    <span htmlFor="city">Theme: City</span>
                                    <input onClick={this.filterCat} type="radio" name="filter" id="city" />
                                </div>
                                <div className="flex justify-between items-center my-2">
                                    <span htmlFor="architecture">Theme: architecture</span>
                                    <input onClick={this.filterCat}  type="radio" name="filter" id="architecture" />
                                </div>
                                <div className="flex justify-between items-center my-2">
                                    <span htmlFor="nature">Theme: Nature</span>
                                    <input onClick={this.filterCat}  type="radio" name="filter" id="nature" />
                                </div>
                            </div>
                            
                        </div>
                        <div  className="flex flex-col justify-center w-52 pb-4 px-4 ml-4 mt-14 border-4 h-80">
                            <div className="flex flex-col">
                                <span className="mx-2">Filter by: </span>
                                <div className="flex justify-between items-center my-2">
                                    <span htmlFor="city">Theme: City</span>
                                    <input onClick={this.filter2} type="checkbox" name="filter" id="city" />
                                </div>
                                <div className="flex justify-between items-center my-2">
                                    <span htmlFor="architecture">Theme: architecture</span>
                                    <input onClick={this.filter2}  type="checkbox" name="filter" id="architecture" />
                                </div>
                                <div className="flex justify-between items-center my-2">
                                    <span htmlFor="nature">Theme: Nature</span>
                                    <input onClick={this.filter2}  type="checkbox" name="filter" id="nature" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-wrap justify-around 2xl:mx-52">
                    
                        {this.state.prodArray.map((product, index)=>{
                            console.log("index: ", index);
                            if(product.prodName.includes(this.state.searchStr) || product.theme.includes(this.state.searchStr) || this.state.searchStr === "" || !this.state.searchStr){
                                if(this.state.filterBy === "all"){
                                        return <CatCard2 product={product} key={index} showQuick={this.showQuick} />
                                }else if(this.state.filterBy === "city"){
                                    if(product.theme === "city"){
                                        return <CatCard2 product={product} key={index} showQuick={this.showQuick}  />
                                    }
                                }else if(this.state.filterBy === "nature"){
                                    if(product.theme === "nature"){
                                        return <CatCard2 product={product} key={index} showQuick={this.showQuick}  />
                                    }
                                }else if(this.state.filterBy === "architecture"){
                                    if(product.theme === "architecture"){
                                        return <CatCard2 product={product} key={index} showQuick={this.showQuick}  />
                                    }
                                }
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
}


export default Catalog