import React from "react";
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';
const Offers = () => {
    return (
        <div className="offer">
            <div className="offer_left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS</p>
                <button>Check Now</button>
            </div>
            <div className="offers_right">
                <img src={exclusive_image} alt=""></img>
            </div>
        </div>
    )
};
export default Offers;