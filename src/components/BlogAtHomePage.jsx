import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";


export const BlogAtHomePage = () => {

    const [blog, setBlog] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    
    const getBlog = async () => {
        try{
            const { data }  = await axios.get(`${process.env.REACT_APP_API_URL}/posts/latest`)
            console.log("latest blog?", blog);
            setBlog(data);
            setLoading(false);
            setError(false);
        }
        catch(error){
            setError(true);
            setLoading(false);
        }
    }
    
    useEffect(getBlog, []);
    
    return(
        <div className="flex justify-center">
            {!loading && !error &&
            <div className="my-8">
                <h1 className="text-2xl mb-4">Latest article</h1>
                <hr />
                <div className="flex justify-center items-center px-10">
                    <div className="px-8 w-20v ">
                        <p className="text-2xl my-4">{blog.title}</p>
                        <p className="text-lg">{blog.content} {blog.content}</p>
                    </div>
                    <div className="w-20v">
                        <img src="./images/fence.jpg" alt="" />
                    </div>
                </div>
                <Link to={{pathname: `/blogPost/${blog._id}`, state:{blog}}}>
                    <button className="border rounded px-2 py-1.5">Read article</button>
                </Link>
            </div>}
            {loading && <div><p>loading</p></div>}
            {error && <div><p>somthing is missing</p></div>}
        </div>
    )
}