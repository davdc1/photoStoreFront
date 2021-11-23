import React from "react"
import QuickView from "./QuickView";
import ItemAdded from "./ItemAdded";
import axios from 'axios'
import CatCard3 from "./CatCard3";
import { ProductCardSkeleton } from './skeletons/ProductCardSkeleton'


class Catalog2 extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            loading: true,
            prodArray: [],
            filterByArr: [],
            searchStr: "",
            quickV: false,
            quickProduct: "",
            added: false,
            addedProduct: "",
            chosenProdProps: ""
        }
    }

    getUrlFilters(){
        console.log("parse query:", this.parseQuery());
        let query = this.parseQuery().q;
        
        return query ? [{
            key: query.split(" ")[0],
            value: query.split(" ")[1] || query.split(" ")[0]
        }] : []
    }

    getSearchQuery(){
        if(this.props.location.state){
            if(this.props.location.state.notFromSearch === true)
                return "";
        }
        console.log("search:", this.parseQuery().search || "");
        return this.parseQuery().search || "";
    }
    
    componentDidMount(){
        this.setState({
            filterByArr: this.getUrlFilters(),
            searchStr: this.getSearchQuery()
        }, () => this.fetchProducts());
    }

    fetchProducts = async () => {
        this.setState({loading: true})
        console.log("url at catalog:", `${process.env.REACT_APP_API_URL}/products/${this.createQueryString() || ""}`);
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/products/${this.createQueryString()}`)
        this.setState({
            prodArray: data,
            loading: false
        });
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
    
    showQuick = (product) => {
        this.setState({
            quickV: !this.state.quickV,
            quickProduct: product
        });
    }
    
    showAdded = (product, chosenProdProps) => {
        this.setState({
            added: !this.state.added,
            addedProduct: product,
            chosenProdProps: chosenProdProps
        });
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

    sort = (e) => {
        this.setState({sortBy: e.target.value}, () => this.fetchProducts());
    }

    createQueryString = () => {
        if(this.state.filterByArr.length > 0){
            let str = `?filter=theme`;
            let temp = this.state.filterByArr;
            
            for(let i = 0;i < temp.length; i++){
                str += `&filterBy=${temp[i].value}`
            }
    
            // str += `&sort=${this.state.sortBy || ""}`
    
            return str + `&search=${this.getSearchQuery()}&sort=${this.state.sortBy || ""}`;
        }
        return `?search=${this.getSearchQuery()}&sort=${this.state.sortBy || ""}`;
    }

    render(){
        return (
            <div className="relative top-24">
                <div>
                    <div className="my-2 flex flex-col sm:flex-row justify-center">
                        <input className="sm:mx-1 border-light border-2 rounded p-0.5" type="text" placeholder="Search" onChange={this.searchCat}/>
                        <select className="sm:mx-1 p-0.5 border-light border-2 rounded" name="" id="" onChange={this.sort}>
                            <option value="" defaultValue>Sort by:</option>
                            <option value="price%201">price: Low to High</option>
                            <option value="price%20-1">price: High to low</option>
                            <option value="rank%20-1">Rank</option>
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
                                        <button className="border-2 border-turq rounded mx-1 my-1" onClick={this.fetchProducts}>Filter</button>
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
                                    <button className="border-2 border-turq rounded mx-1 my-1" onClick={this.fetchProducts}>Filter</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-wrap justify-around 2xl:mx-48">
                            {this.state.prodArray.length === 0 && !this.state.loading && <p className="my-24">no items _______ selection</p>}
                            {this.state.loading && [1, 2, 3, 4].map((item) => {return <ProductCardSkeleton key={item.toString()} />})}                        
                            {!this.state.loading && this.state.prodArray.length > 0 && this.state.prodArray.map((product, index) => {
                                return (
                                        <CatCard3
                                            product={product}
                                            key={index}
                                            showAdded={this.showAdded}
                                            showQuick={this.showQuick}
                                            updateCartPrev={this.props.updateCartPrev}
                                        />
                                        )
                            })}
                        </div>
                    </div>
                </div>
                <div className="h-20v"></div>
            </div>
        )
    }
}


export default Catalog2