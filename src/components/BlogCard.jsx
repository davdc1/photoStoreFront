import { Link } from "react-router-dom"
import React from "react"

function BlogCard({blog}){
    //let buttonRef = React.createRef()
    return(
        <Link className="" to={{pathname: `/blogpost/${blog.id}`, state:{blog: blog}}} >
            <div className="flex flex  w-96 my-10 mx-5 p-5 border justify-between text-left">
                <div className="flex flex-col">
                    {/* <span className="">{blog.id}</span> */}
                    <span className="text-lg font-semibold">{blog.title}</span>
                    <span>{blog.date}</span>
                    {/* <span className="">{blog.content}</span> */}
                    {/* <span className="">by: {blog.userId} (user-id)</span> */}
                    {/* <button className="border rounded px-2 mt-2 font-semibold">read</button> */}
                </div>
                <img className="border w-36" src="" alt="imageMissing" />
            </div>
        </Link>
    )
}
export default BlogCard