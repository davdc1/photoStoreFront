// import axios from "axios";
// import React, {useEffect, useState} from "react";

// //import SinglePost from "./SinglePost/SinglePost"


// //AXIOS NOT INSTALLED!!

// const basePostsURL = "https://jsonplaceholder.typicode.com/posts";
// const baseUsersURL = "https://jsonplaceholder.typicode.com/users";

// function BlogTemp () {
//     const [posts, setPosts] = useState([]);
//     const [users, setUsers] = useState([]);

//     useEffect(() => {let postsAxios = axios.get(basePostsURL)
//         let usersAxios = axios.get(baseUsersURL)
//             Promise.all([postsAxios,usersAxios]).then(data => {
//                 setPosts(data[0].data)
//                 setUsers(data[1].data)
//             })
//             console.log(posts)
    
//         }, []);
    
//         const getUser=(userId)=>{return users.find(({ id }) => id === userId )}
    
//         if (!posts || !users) return null;
//         return(
//             <div className="container">
//                <span className="homeHeaderSpan"><h2 className="homeHeader" style={{marginBottom: "60px"}}>Blog</h2></span>
//                <div className="row">
//                     {posts.length !== 0 && posts.map((post) => {
//                         //return <SinglePost post={post} user={getUser(post.userId)}/>
//                         return <div>post: {post.userId}</div>
//                    })}
//                 </div>
//             </div>
//         )
//       }
    
//     export default BlogTemp
    
