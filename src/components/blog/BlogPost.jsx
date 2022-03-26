import React from "react";
import { useContext, useState, useEffect } from "react";
import { Global } from '../../contexts/GlobalContext'
import { Link } from "react-router-dom";
import axios from "axios";


function BlogPost(props){
   
    const post = props.location.state.blog;
    const context = useContext(Global)
    const [comments, setComments] = useState([]);
    const [loadingComments, setLoadingComments] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchComments();
    }, [])

    let fetchComments= async () => {
        try{
            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/comments/forPost/${post._id}`)
            setComments(data);
            setLoadingComments(false);
        }
        catch(err){
            setError(true);
            setLoadingComments(false);
        }
    }

    let submitComment = (e) => {
        e.preventDefault();
        let comment = {
            title: e.target[0].value,
            content: e.target[1].value,
            userId: context.signedUser._id,
            date: new Date().toDateString(),
            postId: post._id,
        }

        axios.post(`${process.env.REACT_APP_API_URL}/comments`, comment).then(() => {
            fetchComments();
            e.target.reset();
        })
        .catch()
    }

    return(
        <div className="relative top-24">
            <div className="mb-20 px-20 xl:px-96 text-left">
                <p className="text-2xl my-10">{post.title}</p>
                <img src={`${process.env.REACT_APP_API_URL}/images/blogImages/${post.imageName}`} alt="" />
                <p className="my-5">{post.content}</p>
            </div>
            <div className="border-t-2 my-10 py-5">
                <p className="mb-5 font-semibold">comments</p>
                {context.signedUser &&
                <form onSubmit={submitComment} className="mx-auto flex flex-col justify-center items-center w-96">
                    <div className="flex self-stretch">
                        <input className="px-2 border rounded mx-2 flex-1" placeholder="title" type="text" />
                    </div>
                    <div className="flex self-stretch">
                        <textarea className="px-2 border rounded mx-2 flex-1" placeholder="comment" name="" id="" cols="30" rows="2"></textarea>
                    </div>
                        <button>submit</button>     
                </form>}
                {!context.signedUser && <p><Link className="underline" to="/signUp">Sign in</Link> to comment</p>}
                {loadingComments && <div className="my-10">Loading comments</div>}
                {error && <div className="my-10">cannot load comments</div>}
                {!error && comments.length === 0 && <p className="my-10">no comments</p>}
                {comments.map((comment, index)=>{                
                    return (
                    <div className="flex flex-col items-start xl:mx-72 border-b-2 my-3 pb-3 px-3" key={index.toString()}>
                        <p className="font-semibold">{comment.title}</p>
                        <p className="text-left">{comment.content}</p>
                        <div className="flex justify-between self-stretch">
                            {comment.userId && <span>written by: <span className="italic">{comment.userId.name.firstName + " " + comment.userId.name.lastName}</span></span>}
                            <span>{comment.date}</span>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className="h-10v"></div>
        </div>
    )
    
}

export default BlogPost

