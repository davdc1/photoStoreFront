import React from "react";
import axios from "axios";
import { User } from './contexts/UserContext'


class BlogPost extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            postId: props.match.params.id,
            post: props.location.state.blog,
            comments: [],
            loading: true,
            loggedUser: ""
        }
    }

    static contextType = User;

    componentDidMount(){
        this.fetchComments();
        this.setState({loggedUser: this.context.signedUser})
    }

    async fetchComments(){
        try{
            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/comments/forPost/${this.state.postId}`)
            this.setState({comments: data, loading: false}, ()=>console.log("comments:", this.state.comments));
        }
        catch(err){
            console.log("fetchComments error:", err.response.data.message);
        }
    }


    getPostComments(){
        let allComments = localStorage.getItem("allPostComments")?JSON.parse(localStorage.getItem("allPostComments")):[];
        console.log("all:", allComments);
        for(let i = 0; i < allComments.length; i++){
            if(allComments[i].postId === this.state.postId){
                this.setState({comments: allComments[i].comments})
                break;
            }
        }
    }

    submitComment = (e) => {
        e.preventDefault();
        console.log("form:", e.target[0].value, e.target[1].value);
        let comment = {
            commentId: 0,
            title: e.target[1].value,
            content: e.target[2].value,
            //user: e.target[0].value,
            userId: this.state.loggedUser._id,
            date: new Date().toDateString(),
            postId: this.state.postId,
        }
        console.log("comment:", comment);
        
        // {
        //     commentId:Number,
        //     postId:Number,
        //     userId:Number,
        //     title:String,
        //     content:String,
        //     date:String,
        //     id:String
        // }


        this.postComment(comment);
        //this.pushToLclStrg(comment);

    }

    async postComment(comment){
        axios.post(`${process.env.REACT_APP_API_URL}/comments`, comment).then((res)=>{
            console.log("post res:", res.data);
        })
        .catch((err) => {console.log("postError:", err.response.data)})
        console.log("posted?");
    }

    pushToLclStrg(comment){
        let allComments = localStorage.getItem("allPostComments")?JSON.parse(localStorage.getItem("allPostComments")):[];
        let notFound = true;
        for(let i = 0; i < allComments.length; i++){
            if(allComments[i].postId === this.state.postId){
                allComments[i].comments.push(comment);
                this.setState({comments: allComments[i].comments})
                notFound = false;
                break;
            }
        }
        if(notFound){
            allComments.push({postId: this.state.postId, comments: [comment]});
            this.setState({comments: [comment]});
        }

        localStorage.setItem("allPostComments", JSON.stringify(allComments));
    }


    render(){
        return(
            <div>
                <div className="flex p-5">
                    <p>blogPost: {this.state.postId}</p>
                </div>
                <div className="mb-20 px-20 xl:px-96 text-left">
                    <p className="text-2xl ">{this.state.post.title}</p>
                    <p className="my-5">{this.state.post.body}</p>
                </div>
                <div className="border-t-2 my-10 py-5">
                    <p className="mb-5 font-semibold">comments</p>
                    <form onSubmit={this.submitComment} className="mx-auto flex flex-col justify-center items-center w-96">
                        <div className="flex self-stretch">
                            <input className="px-2 border rounded mx-2 flex-1" placeholder="name" type="text" />
                        </div>
                        <div className="flex self-stretch">
                            <input className="px-2 border rounded mx-2 flex-1" placeholder="title" type="text" />
                        </div>
                        <div className="flex self-stretch">
                            <textarea className="px-2 border rounded mx-2 flex-1" placeholder="comment" name="" id="" cols="30" rows="2"></textarea>
                        </div>
                            <button>submit</button>
                    </form>
                    {this.state.comments.length === 0 && <p>no comments</p>}
                    {this.state.comments.map((comment, index)=>{
                        return (
                        <div className="flex flex-col items-start xl:mx-72 border-b-2 my-3 pb-3 px-3" key={index.toString()}>
                            <p className="font-semibold">{comment.title}</p>
                            <p className="text-left">{comment.content}</p>
                            <div className="flex justify-between self-stretch">
                                <span>written by: <span className="italic">{comment.userId.name.firstName + " " + comment.userId.name.lastName}</span></span>
                                <span>{comment.date}</span>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default BlogPost

