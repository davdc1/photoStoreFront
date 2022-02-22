import React from "react";
import { Global } from '../contexts/GlobalContext'
import { Link } from "react-router-dom";
import axios from "axios";


class BlogPost extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            postId: props.match.params.id,
            post: props.location.state.blog,
            comments: [],
            loadingComments: true,
            loggedUser: ""
        }
    }

    static contextType = Global;

    componentDidMount(){
        this.fetchComments();
    }

    async fetchComments(){
        try{
            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/comments/forPost/${this.state.postId}`)
            this.setState({comments: data, loadingComments: false});
        }
        catch(err){
        }
    }

    submitComment = (e) => {
        e.preventDefault();
        let comment = {
            title: e.target[0].value,
            content: e.target[1].value,
            userId: this.context.signedUser._id,
            date: new Date().toDateString(),
            postId: this.state.postId,
        }
      
        this.postComment(comment);
    }

    async postComment(comment){
        axios.post(`${process.env.REACT_APP_API_URL}/comments`, comment).then(() => this.fetchComments())
        .catch()
    }

    render(){
        return(
            <div className="relative top-24">
                <div className="mb-20 px-20 xl:px-96 text-left">
                    <p className="text-2xl my-10">{this.state.post.title}</p>
                    <img src={`${process.env.REACT_APP_API_URL}/images/blogImages/${this.state.post.imageName}`} alt="" />
                    <p className="my-5">{this.state.post.content}</p>
                </div>
                <div className="border-t-2 my-10 py-5">
                    <p className="mb-5 font-semibold">comments</p>
                    {this.context.signedUser &&
                    <form onSubmit={this.submitComment} className="mx-auto flex flex-col justify-center items-center w-96">
                        <div className="flex self-stretch">
                            <input className="px-2 border rounded mx-2 flex-1" placeholder="title" type="text" />
                        </div>
                        <div className="flex self-stretch">
                            <textarea className="px-2 border rounded mx-2 flex-1" placeholder="comment" name="" id="" cols="30" rows="2"></textarea>
                        </div>
                            <button>submit</button>
                            
                    </form>}
                    {!this.context.signedUser && <p><Link to="/signUp">Sign in</Link> to comment</p>}
                    {this.state.comments.length === 0 && <p>no comments</p>}
                    {this.state.comments.map((comment, index)=>{
                        
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
}

export default BlogPost

