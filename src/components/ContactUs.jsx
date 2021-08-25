

function ContactUs(){
    return(
        <form action="">
            <div className="flex flex-col items-center">
                <h1 className="my-8 text-xl">Contact us</h1>
                <div className="p-2 flex flex-col items-center w-96 border border-1 mb-10">
                    <input className="p-0.5 border border-1 w-full" type="text" placeholder="Full name"/>
                    <div className="flex w-full">
                        <input className="p-0.5 border border-1 flex-1" type="text" placeholder="Email"/>
                        <input className="p-0.5 border border-1 flex-1" type="text" placeholder="Phone"/>
                    </div>
                    <textarea className="p-0.5 border border-1 w-full" placeholder="your message" name="" id="" cols="30" rows="10"></textarea>
                    <button className="border-2 rounded border-turq px-1 py-0.5 mt-2">Send</button>
                </div>
            </div>
        </form>
    )
}

export default ContactUs