import React from "react";
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
const ProductDisplay = (props) => {
    const {product} = props;
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productimglist">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="img-left" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                {product.name};
                <div className="productright-left-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                </div>
                <div className="productright-price">
                    <p>${product.old_price}</p>
                </div>
            </div>
        </div>
    )
};
export default ProductDisplay;