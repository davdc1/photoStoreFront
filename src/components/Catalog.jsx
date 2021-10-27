import React from "react"
import CatCard2 from "./CatCard2";
import QuickView from "./QuickView";
import ItemAdded from "./ItemAdded";
import axios from 'axios'

class Catalog extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            //prodArray: productJson.prodArray,
            prodArray: [],
            filterByArr: "",
            searchStr: "",
            quickV: false,
            quickProduct: "",
            added: false,
            addedProduct: "",
            chosenProdProps: ""
        }
    }


    getUrlFilters(){
        let query = this.parseQuery().q;
        return query ? [{
            key: query.split(" ")[0],
            value: query.split(" ")[1]
        }] : []
    }

    getSearchQuery(){
        if(this.props.location.state){
            if(this.props.location.state.notFromSearch === true)
                return "";
        }
        return this.parseQuery().q
    }
    
    componentDidMount(){
        this.fetchProducts();
        this.setState({
            filterByArr: this.getUrlFilters(),
            searchStr: this.getSearchQuery()
        })
    }

    async fetchProducts(){
        const {data} = await axios.get("/products")
        console.log(data);
        this.setState({prodArray: data});
    }


    getCartItems(){
       return JSON.parse(localStorage.getItem("cartItems"));
    }

    parseQuery(){
        let urlSearchParams = new URLSearchParams(this.props.location.search);
        return Object.fromEntries(urlSearchParams.entries());
    }


    componentDidUpdate(prevProps){
        if(prevProps.location.search !== this.props.location.search){
           
            let params = this.parseQuery();

            this.setState({          
                searchStr: params.q
            });
        }
    }

    //read about this function:

    // componentWillReceiveProps(prevProps){
    //     if(prevProps.location.search !== this.props.location.search){
    //         console.log("prop change true");
            
    //         let params = this.parseQuery();

    //         this.setState({          
    //             searchStr: params.q
    //         }, console.log("state after didMount: ", this.state.searchStr));
    //     }
    // }
    
    showQuick = (product) => {
        this.setState({
            quickV: !this.state.quickV,
            quickProduct: product
        });
    }
    
    showAdded = (product, chosenProdProps) => {
        console.log("show addd", this.state.added);
        this.setState({
            added: !this.state.added,
            addedProduct: product,
            chosenProdProps: chosenProdProps
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

    getFilters = (event) => {
        let temp = JSON.parse(JSON.stringify(this.state.filterByArr));
        if(event.target.checked === true){
            temp.push({key: event.target.id.split(" ")[0], value: event.target.id.split(" ")[1]})
        }else{  
            for(let i = 0; i < temp.length; i++){
                if(temp[i].key === event.target.id.split(" ")[0] && temp[i].value === event.target.id.split(" ")[1]){
                    temp.splice(i, 1);
                    break;
                }
            }
        }

        this.setState({filterByArr: temp});
    }

    filter2(product, index){
        let temp = this.state.filterByArr
        for(let i = 0; i < temp.length; i++){
            if(product[temp[i].key] !== temp[i].value){
                return null
            }
        }
        //try changing the return to true/false. then conditionally render: {this.filter2() && <CatCard...>}
        console.log("card product:", product);
        return (
            <CatCard2
                product={product}
                key={index}
                showAdded={this.showAdded}
                showQuick={this.showQuick}
                updateCartPrev={this.props.updateCartPrev}
            />
            )
    }

    render(){
        return (
            <div className="flex">
                <div>
                    <div className="my-2 flex flex-col sm:flex-row justify-center">
                        <input className="sm:mx-1 border-light border-2 rounded p-0.5" type="text" placeholder="Search" onChange={this.searchCat}/>
                        <select className="sm:mx-1 p-0.5 border-light border-2 rounded" name="" id="" onChange={this.sortCat}>
                            <option value="default" defaultValue>Sort by:</option>
                            <option value="low">price: Low to High</option>
                            <option value="high">price: High to low</option>
                            <option value="rank">Rank</option>
                        </select>
                        
                        {/* <details> displays only on small screens: */}
                        <div className="sm:mx-1 flex justify-center xl:hidden">
                            <details className="border-light border-1 rounded">
                                <summary>Filters</summary>
                                    <div className="flex flex-col justify-center w-52 pb-4 px-4 ml-4 mt-0 border-4 border-t-0 h-auto">
                                        <span className="mx-2">Filter by: </span>
                                        <div className="flex justify-between items-center my-2">
                                            <span htmlFor="city">Theme: City</span>
                                            <input onClick={this.getFilters} type="checkbox" name="filter" id="theme city" />
                                        </div>
                                        <div className="flex justify-between items-center my-2">
                                            <span htmlFor="architecture">Theme: architecture</span>
                                            <input onClick={this.getFilters}  type="checkbox" name="filter" id="theme architecture" />
                                        </div>
                                        <div className="flex justify-between items-center my-2">
                                            <span htmlFor="nature">Theme: Nature</span>
                                            <input onClick={this.getFilters}  type="checkbox" name="filter" id="theme nature" />
                                        </div>
                                    </div>
                            </details>
                        </div>
                        <QuickView product={this.state.quickProduct} show={this.state.quickV} showQuick={this.showQuick} />
                        <ItemAdded product={this.state.addedProduct} chosenProdProps={this.state.chosenProdProps} show={this.state.added} showAdded={this.showAdded}  />
                    </div>
                    <div className="flex items-start">
                        <div className="hidden xl:inline-block">
                            <div  className="flex flex-col justify-center w-52 pb-4 px-4 ml-4 mt-14 border-4 h-80">
                                <div className="flex flex-col">
                                    <span className="mx-2">Filter by: </span>
                                    <div className="flex justify-between items-center my-2">
                                        <span htmlFor="city">Theme: City</span>
                                        <input onClick={this.getFilters} type="checkbox" name="filter" id="theme city" />
                                    </div>
                                    <div className="flex justify-between items-center my-2">
                                        <span htmlFor="architecture">Theme: architecture</span>
                                        <input onClick={this.getFilters}  type="checkbox" name="filter" id="theme architecture" />
                                    </div>
                                    <div className="flex justify-between items-center my-2">
                                        <span htmlFor="nature">Theme: Nature</span>
                                        <input onClick={this.getFilters}  type="checkbox" name="filter" id="theme nature" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-around 2xl:mx-48">
                        
                            {this.state.prodArray.map((product, index)=>{
                                if(this.state.searchStr !== "" && this.state.searchStr){
                                    if(product.prodName.includes(this.state.searchStr) || product.theme.includes(this.state.searchStr)){
                                        return this.filter2(product, index)
                                    }
                                }else{
                                    return this.filter2(product, index)
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Catalog