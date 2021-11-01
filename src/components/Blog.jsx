
import React from "react"
import BlogCard from "./BlogCard"
import axios from 'axios'
import { RecentPost } from "./RecentPost"
import { Link } from "react-router-dom"


class Blog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            blogs: [],
            loading: true
        }
    }

    async fetchBlogPosts(){
        const { data } = await axios.get(process.env.REACT_APP_API_URL+'/posts')
        this.setState({blogs: data, loading: false});
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
        this.fetchBlogPosts();
        //this.fetchPosts2();
        //this.setState({blogs: this.fetchBlogPosts(), loading: false})
        //console.log("data blog", this.fetchBlogPosts());
      }

    render(){
        return(
            <div className="relative top-24">
                
                {this.state.loading && 
                <div className="flex justify-center" >
                    <div className="flex justify-center items-center bg-light border my-10 mx-5 w-96 h-64 text-xl">
                        <p>loading post</p>
                    </div>
                    <div className="flex justify-center items-center bg-light border my-10 mx-5 w-96 h-64 text-xl">
                        <p>loading post</p>
                    </div>
                    <div className="flex justify-center items-center bg-light border my-10 mx-5 w-96 h-64 text-xl">
                        <p>loading post</p>
                    </div>
                    <div className="flex justify-center items-center bg-light border my-10 mx-5 w-96 h-64 text-xl">
                        <p>loading post</p>
                    </div>
                </div>}
                {!this.state.loading &&
                <div className="my-14 flex justify-center">
                    <div className="flex justify-center">
                    <Link className="flex justify-center" to={{pathname: `/blogpost/${this.state.blogs[0].id}`, state:{blog: this.state.blogs[0]}}} >
                        <RecentPost blog={this.state.blogs[0]} />
                    </Link>
                    {/* <RecentPost blog={this.state.blogs[0]} /> */}
                    </div>
                </div>}
                <p>other posts</p>
                {!this.state.loading &&
                <div className="flex flex-wrap justify-center items-center">
                    {/* posts should be sorted by date, the most recent one displayed on top. the rest are mapped: */}
                    {this.state.blogs.map((blog, index) => {
                        if(index !== 0){
                            return <BlogCard className="" key={index.toString()} blog={blog}/>
                        }else{
                            return null
                        }
                    })}
                </div>}
            </div>

        )
}
}

export default Blog