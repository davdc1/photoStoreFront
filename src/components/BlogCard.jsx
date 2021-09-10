import { Link } from "react-router-dom"
import React from "react"

function BlogCard({blog}){
    //let buttonRef = React.createRef()
    return(
        <div className="flex flex-col  w-96 my-10 mx-5 p-5 border items-start text-left">
            <span className="">{blog.id}</span>
            <span className="text-lg font-semibold">{blog.title}</span>
            <span className="">{blog.body}</span>
            <span className="">by: {blog.userId} (user-id)</span>
           <Link to={{pathname: `/blogpost/${blog.id}`, state:{blog: blog}}} ><button className="border rounded px-2 mt-2 font-semibold">read</button></Link>
        </div>
    )
}
export default BlogCard