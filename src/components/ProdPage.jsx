
import React from "react";

class ProdPage extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }


    render(){
        return (
            <div className="text-gray-600 ">
                <div className="h-600 flex flex-row mt-20 mb-32 mx-10">
                    <div className="w-11/12 border-2 border-gray-200 mx-3">
                        <img className="w-full mx-auto my-auto px-auto" src="" alt="image" />
                    </div>
                    <div className="flex flex-col w-11/12 mx-3">
                        <div className="my-4"><h1 className="text-2xl mb-2">a product</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit., tempore, corrupti quisquam magnam.</p></div>
                        <hr />
                        <div className="my-4"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  perspiciatis architecto odio, reprehenderit amet maiores aliquid alias mollitia eum. Officia temporibus similique incidunt suscipit nihil?</p></div>
                        <hr />
                        <div className="my-4"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. est quidem sint nesciunt aut incidunt. Illo neque natus eum maxime nisi.</p></div>
                    </div>
                    <div className="w-11/12 border-2 border-gray-200 mx-3"></div>
                </div>
            </div>
        )
    }
}


export default ProdPage;