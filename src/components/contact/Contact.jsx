import "./contact.scss";
import { useState } from "react";

import React from 'react'

const Contact = () => {
    const [message, setMessage] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/shake6.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your E-mail"/>
                    <textarea placeholder="Enter your Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll respond ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
