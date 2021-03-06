import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";


export const BlogAtHomePage = () => {

    const [blog, setBlog] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        async function getBlog(){
            try{
                const { data }  = await axios.get(`${process.env.REACT_APP_API_URL}/posts/latest`)
                setBlog(data);
                setLoading(false);
                setError(false);
            }
            catch(error){
                setError(true);
                setLoading(false);
            }
        }
        getBlog();
    }, []);
    
    return(
        <div className="flex justify-center bg-appbg">
            {!loading && !error &&
            <div className="my-8 border border-black rounded p-6">
                <h1 className="text-2xl mb-4">Latest article</h1>
                <hr className="pb-4"/>
                <div className="flex justify-center flex-col md:flex-row items-center 4xl:w-50v 2xl:w-60v w-90v md:max-h-40vw overflow-hidden">
                    <div className="flex-1 justify-center pr-8 mb-4 md:mb-0">
                        <p className="text-2xl my-4">{blog.title}</p>
                        <p className="text-lg">{blog.content} {blog.content}</p>
                    </div>
                    <div className="flex-1">
                        <img src={`${process.env.REACT_APP_API_URL}/images/blogImages/${blog.imageName}`} alt="" />
                    </div>
                </div>
                <Link to={{pathname: `/blog/blogPost/${blog._id}`, state:{blog}}}>
                    <button className="border rounded mt-4 px-2 py-1.5">Read article</button>
                </Link>
            </div>}
            {loading && <div><p>loading</p></div>}
            {error && <div><p>somthing is missing</p></div>}
        </div>
    )
}