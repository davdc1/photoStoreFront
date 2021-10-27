export const RecentPost = ({blog}) => {
    console.log("Recentblog:", blog);
    return(
        <div className="w-4/6">
            <img className="border w-full h-96" src="" alt="imageHere" />
            <h1 className="text-xl font-semibold">{blog.title}</h1>
            <h5>{blog.date}</h5>
            <p>{blog.content}</p>
        </div>
    )
}