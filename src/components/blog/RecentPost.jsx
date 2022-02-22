export const RecentPost = ({blog}) => {
    return(
        <div className="w-4/6">
            <img className="border w-full h-96" src={`${process.env.REACT_APP_API_URL}/images/blogImages/${blog.imageName}`} alt="imageHere" />
            <h1 className="text-xl font-semibold">{blog.title}</h1>
            <h5>{blog.date}</h5>
            <p>{blog.content}</p>
        </div>
    )
}