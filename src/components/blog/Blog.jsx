
import React from "react"
import { useState, useEffect } from "react"
import BlogCard from "./BlogCard"
import { RecentPost } from "./RecentPost"
import { Link } from "react-router-dom"
import axios from 'axios'


function Blog(){
    
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogPosts();
    }, [])

    let fetchBlogPosts = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/posts`)
        setBlogs(data);
        setLoading(false);
    }

    return(
        <div className="relative top-24">
                
        {loading && 
        <div className="flex justify-center" >
            {[1, 2, 3, 4].map((item) => {
                return(
            <div key={item.toString()} className="flex justify-center items-center bg-light border my-10 mx-5 w-96 h-64 text-xl">
                <p>loading post</p>
            </div>
                )
            })}
        </div>}
        {!loading &&
        <div className="my-14 flex justify-center">
            <div className="flex justify-center">
            <Link className="flex justify-center" to={{pathname: `/blog/blogpost/${blogs[0].id}`, state:{blog: blogs[0]}}} >
                <RecentPost blog={blogs[0]} />
            </Link>
            </div>
        </div>}
        <p>other posts</p>
        {!loading &&
        <div className="flex flex-wrap justify-center items-center">
            {blogs.map((blog, index) => {
                if(index !== 0){
                    return <BlogCard className="" key={index.toString()} blog={blog}/>
                }else{
                    return null
                }
            })}
        </div>}
        <div className="h-10v"></div>
    </div>
    )
}

export default Blog