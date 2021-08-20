import React from "react"
import CatCard from "./CatCard";

class Catalog extends React.Component{
    constructor(){
        super();
        this.state = {
            prodArray: [
                {id: 1, prodName: "first", price: 100, rank: 4.5, theme: "architecture", imageStr: "https://i.ibb.co/qJFGd2W/2.jpg"},
                {id: 2, prodName: "second", price: 150, rank: 4, theme: "city", imageStr: "https://i.ibb.co/LCGKvc5/city.jpg"},
                {id: 3, prodName: "third", price: 260, rank: 5, theme: "nature", imageStr: "https://i.ibb.co/zGPSsXJ/E054093-D-ED10-4667-B82-B-DFF1507-DAA5-E.jpg"},
                {id: 4, prodName: "fourth", price: 250, rank: 3.5, theme: "architecture", imageStr: "https://i.ibb.co/qJFGd2W/2.jpg"},
                {id: 5, prodName: "fifth", price: 90, rank: 4, theme: "city", imageStr: "https://i.ibb.co/LCGKvc5/city.jpg"},
                {id: 6, prodName: "sixth", price: 300, rank: 4.5, theme: "architecture", imageStr: "https://i.ibb.co/qJFGd2W/2.jpg"},
                {id: 7, prodName: "seventh", price: 200, rank: 4, theme: "nature", imageStr: "https://i.ibb.co/zGPSsXJ/E054093-D-ED10-4667-B82-B-DFF1507-DAA5-E.jpg"},
                {id: 7, prodName: "eighth", price: 120, rank: 3, theme: "city", imageStr: "https://i.ibb.co/LCGKvc5/city.jpg"},
            ],
            filterBy: "all",
            filterByArr: [],
            searchStr: ""
        }
    }
    
    searchCat = (event) => {
        let str = event.target.value;
        this.setState({searchStr: str});
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
        }
        this.setState({prodArray: array});
    }

    filterCat = (event) => {
        console.log("event: ", event.target.id);
        this.setState({
            filterBy: event.target.id
        });
    }

    filter3 = (event) => {
        let temp = [];
        if(event.target.checked == true){
            temp.push(event.target.name)
            this.setState({filterBy: temp})
        }else{  }
    }
    render(){
        return (
            <div>
                <div className="my-2">
                <span className="mx-2">Search: </span>
                    <input className="border-light border-2 p-0.5" type="text"  onChange={this.searchCat}/>
                    <span className="mx-2">Sort by: </span>
                    <select className="p-0.5 border-light border-2" name="" id="" onChange={this.sortCat}>
                        <option value="default" selected="selected"></option>
                        <option value="low">price: Low to High</option>
                        <option value="high">price: High to low</option>
                        <option value="rank">Rank</option>
                    </select>
                </div>
                <div className="flex items-start">
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
                    {/* 2xl:mx-96 */}
                <div className="flex flex-wrap justify-around 2xl:mx-72">
                    
                    {this.state.prodArray.map((product)=>{
                        if(product.prodName.includes(this.state.searchStr) ||product.theme.includes(this.state.searchStr) || this.state.searchStr === ""){
                            if(this.state.filterBy === "all"){
                                return <CatCard product={product} />
                            }else if(this.state.filterBy === "city"){
                                if(product.theme === "city"){
                                    return <CatCard product={product} />
                                }
                            }else if(this.state.filterBy === "nature"){
                                if(product.theme === "nature"){
                                    return <CatCard product={product} />
                                }
                            }else if(this.state.filterBy === "architecture"){
                                if(product.theme === "architecture"){
                                    return <CatCard product={product} />
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