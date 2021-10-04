
import React from "react"
import BlogCard from "./BlogCard"
import axios from 'axios'


class Blog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            blogs: [],
            loading: true
        }
    }

    async fetchBlogPosts(){
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return data;
    }

    fetchPosts2(){
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(function(response) {
            console.log("res:", response);
            return response.json();
          })
          .then(json => {
            this.setState({ blogs: json, loading: false });
            console.log("parsed json", json);
          })
          .catch(function(ex) {
            console.log("parsing failed", ex);
          });
    }

    componentDidMount() {
        this.fetchPosts2();
        //this.setState({blogs: this.fetchBlogPosts(), loading: false})
        //console.log("data blog", this.fetchBlogPosts());
      }

    render(){
        return(
            <div className="">
                <h1>blog</h1>
                {this.state.loading && 
                <div className="flex justify-center" >
                    <div className="bg-light border my-10 mx-5 w-96 h-64 text-xl">
                        
                    </div>
                    <div className="bg-light border my-10 mx-5 w-96 h-64 text-xl">
                        
                    </div>
                    <div className="bg-light border my-10 mx-5 w-96 h-64 text-xl">
                        
                    </div>
                    <div className="bg-light border my-10 mx-5 w-96 h-64 text-xl">
                        
                    </div>
                </div>}
                {!this.state.loading &&
                <div className="flex flex-wrap justify-center">
                    {this.state.blogs.map((blog, index) => {
                        return <BlogCard key={index.toString()} blog={blog}/>
                    })}
                </div>}
            </div>

        )
}
}

export default Blog