import React, { useContext } from "react";
import './CartItems.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
const CartItems = () => {
    const {getTotalCartAmount,all_product,CartItems,removeFromCart} = useContext(ShopContext);
    return(
        <div className="cartitems">
            <div className="cartitems-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
           {all_product.map((e)=>{
            if(CartItems[e.id]>0)  
            {
                return(
                    <div key={e.id}>
                    <div className="cartitems-format cartitems-main">
                        <img src={e.image} alt="" className="cartitems-producticon"/>
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className="cartitems-quantity">{CartItems[e.id]}</button>
                        <p>${e.new_price*CartItems[e.id]}</p>
                        <img className="cartitems-removeicon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr />
                </div>
                )
            }
            else
            {
                return null;
            }
           })}
           <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promocode, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" />
                    <button>Submit</button>
                </div>
            </div>
           </div>
        </div>
    )
}
export default CartItems;