import React, { useContext } from "react";
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
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
                <h1>{product.name}</h1>
                <div className="productright-left-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                </div>
                <div className="productright-old_price">
                    <p>${product.old_price}</p>
                </div>
                <div className="productright-new_price">
                    <p>${product.new_price}</p>
                </div>
                <div className="product-description">
                    <p>A lightweight,good sleave shirts.</p>
                </div>
                <div className="product-rightsize">
                    <h1>Select Size</h1>
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                    <p className="product-rightcategory"><span>Category : </span>Men , Shirts</p>
                    <p className="product-rightcategory"><span>Tags : </span>Men , Shirts</p>
                </div>
                <div className="product-display-button">
                    <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
};
export default ProductDisplay;