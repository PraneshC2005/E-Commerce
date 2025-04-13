import React from "react";
import './Newsletter.css';
const Newsletter=()=>{
    return (
        <div className="news-letter">
            <h1>Get Exclusive offers on your email</h1>
            <p>Subscribe to your newsletter and stay updated</p>
            <div>
                <input type="email" placeholder="Your email id" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default Newsletter;