import React from "react"
import { Link } from "react-router-dom"

function BlogCard({blog}){
    return(
        <Link className="" to={{pathname: `/blog/blogpost/${blog.id}`, state:{ blog }}} >
            <div className="flex w-96 my-10 mx-5 p-5 border justify-between text-left">
                <div className="flex flex-col">
                    <span className="text-lg font-semibold">{blog.title}</span>
                    <span>{blog.date}</span>
                </div>
                <img className="border w-36" src={`${process.env.REACT_APP_API_URL}/images/blogImages/${blog.imageName}`} alt="imageMissing" />
            </div>
        </Link>
    )
}
export default BlogCard