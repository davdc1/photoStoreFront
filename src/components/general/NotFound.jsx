import { Link } from 'react-router-dom'

export function NotFound(){
    return (
        <div  className="relative top-24 h-70v flex flex-col items-center justify-center">
            <div className="border border-red-400 rounded flex flex-col justify-center items-center h-40v w-50v text-xl">
                <p>Page not found</p>
                <p className='text-purple-600'><Link to='/'>Return to home page</Link></p>
            </div>
            <div className='h-10v'></div>
        </div>
    )
}