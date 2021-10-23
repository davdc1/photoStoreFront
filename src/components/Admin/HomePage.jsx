import { Link } from "react-router-dom"

export const HomePage = () => {
    return(
        <div>
            <div>
                Home page
                <div>
                    <Link to="/admin">Admin</Link>
                </div>
            </div>
        </div>
    )
}