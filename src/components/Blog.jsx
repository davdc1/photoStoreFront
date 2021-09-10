
import React from "react"
import BlogCard from "./BlogCard"

class Blog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            blogs: [],
            loading: true
        }
    }


    componentDidMount() {
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

    render(){
        return(
            <div>
                <h1>blog</h1>
                {this.state.loading && 
                <div>
                    <div className="bg-light border my-10 mx-5 h-48 text-xl">
                        
                    </div>
                    <div className="bg-light border my-10 mx-5 h-48 text-xl">
                        
                    </div>
                    <div className="bg-light border my-10 mx-5 h-48 text-xl">
                        
                    </div>
                    <div className="bg-light border my-10 mx-5 h-48 text-xl">
                        
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