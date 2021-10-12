import axios from 'axios'
import React from 'react'
import MyMapComponent from './GoogleMap'


class ContactUs extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            sent: false
        }
    }

    async sendMessage(message){
        try{
            await axios.post('tickets', message);
            this.setState({sent: true})
        }
        catch(err){
            console.log('contact us error:', err);
            this.setState({sent: false})
        }
    }


    submit = (e) => {
        e.preventDefault();
        
        let message = {
            name: e.target[0].value,
            email: e.target[1].value,
            phone: e.target[2].value,
            date: new Date().toLocaleDateString(),
            title: e.target[3].value,
            content: e.target[4].value,
            status: "pending",
            comment: ""
        }
        console.log("contact message:", message);
        this.sendMessage(message);
    }

    render(){
        return(
            <div>
                {!this.state.sent && <form action="" onSubmit={this.submit}>
                    <div className="flex flex-col items-center">
                        <h1 className="my-8 text-xl">Contact us</h1>
                        <div className="p-2 flex flex-col items-center w-96 border border-1 mb-10">
                            <input className="p-0.5 pl-1 border border-1 w-full" type="text" placeholder="Name*"/>
                            <div className="flex w-full">
                                <input className="p-0.5 pl-1 border border-1" type="text" placeholder="Email*"/>
                                <input className="p-0.5 pl-1 border border-1" type="text" placeholder="Phone"/>
                            </div>
                            <input className="p-0.5 pl-1 border border-1 w-full" type="text" placeholder="subject" />
                            <textarea className="p-0.5 pl-1 border border-1 w-full" placeholder="Your message*" name="" id="" cols="30" rows="10"></textarea>
                            <button className="border-2 rounded border-turq px-1 py-0.5 mt-2">Send</button>
                        </div>
                    </div>
                </form>}
                {this.state.sent &&
                <div className="h-44 flex items-center justify-center">
                    <span className="text-xl">Message submitted</span>
                </div>}
                <div className="mx-auto w-2/6 mt-4 mb-14">
                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                </div>
            </div>
    )
    }
}

export default ContactUs