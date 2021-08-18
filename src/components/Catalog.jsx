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
            filterBy: ""
        }
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
        this.setState({
            filterBy: event.target.value
        })
    }
    render(){
        return (
            <div>
                <div className="my-2">
                    <span className="mr-2">Sort by: </span>
                    <select className="p-0.5 border-light border-2" name="" id="" onChange={this.sortCat}>
                        <option value="default" selected="selected"></option>
                        <option value="low">price: Low to High</option>
                        <option value="high">price: High to low</option>
                        <option value="rank">Rank</option>
                    </select>
                    <span>Filter: </span>
                    <select className="p-0.5 border-light border-2" name="" id="" onChange={this.filterCat}>
                        <option value="" selected="selected"></option>
                        <option value="city">Theme: City</option>
                        <option value="nature">Theme: Nature</option>
                        <option value="architecture">Theme: Architecture</option>
                    </select>
                </div>
                <div className="flex flex-wrap justify-around 2xl:mx-96">
                    
                    {this.state.prodArray.map((product)=>{
                        if(this.state.filterBy === ""){
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
                    })}
                </div>
            </div>
        )
    }
}

export default Catalog