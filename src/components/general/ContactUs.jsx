import axios from 'axios'
import React, { useState } from 'react'
// import MyMapComponent from './GoogleMap'

function ContactUs(){
    
    const [sent, setSent] = useState(false);

    const sendMessage = async (message) => {
        try{
            await axios.post(`${process.env.REACT_APP_API_URL}/tickets`, message);
            setSent(true);
        }
        catch(err){
            setSent(false);
        }
    }


    const submit = (e) => {
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
        sendMessage(message);
    }


    return(
        <div className="relative top-24">
            {!sent &&
            <form action="" onSubmit={submit}>
                <div className="flex flex-col items-center">
                    <h1 className="my-8 text-xl">Contact us</h1>
                    <div className="p-2 flex flex-col justify-center items-center w-96 border border-1 mb-10">
                        <input className="py-0.5 pl-1 border border-1 w-full" type="text" placeholder="Name*"/>
                        <div className="flex w-full">
                            <input className="py-0.5 border border-1" type="text" placeholder="Email*"/>
                            <input className="py-0.5 border border-1" type="text" placeholder="Phone"/>
                        </div>
                        <input className="py-0.5 pl-1 border border-1 w-full" type="text" placeholder="subject" />
                        <textarea className="py-0.5 pl-1 border border-1 w-full" placeholder="Your message*" name="" id="" cols="30" rows="10"></textarea>
                        <button className="border-2 rounded border-turq px-1 py-0.5 mt-2">Send</button>
                    </div>
                </div>
            </form>}
            {sent &&
            <div className="h-44 flex items-center justify-center">
                <span className="text-xl">Message submitted</span>
            </div>}
            {/* <div className="w-50v h-30v">
                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div> */}
            <div className="h-20v"></div>
        </div>
)
}

export default ContactUs