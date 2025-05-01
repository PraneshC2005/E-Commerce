import React, { createContext, useEffect, useState } from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart={};
    for (let index = 0; index < all_product.length; index++) {
        cart[all_product[index].id] = 0;
    }
    return cart;
}
const ShopContextProvider = (props)=>{
    const[CartItems,setCartItems] = useState(getDefaultCart);
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(CartItems);
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in CartItems)
        {
            if(CartItems[item]>0)
            {
                let iteminfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += iteminfo.new_price * CartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems = () =>{
        let Totalitems = 0;
        for(const item in CartItems)
        {
            Totalitems += CartItems[item];
        }
        return Totalitems;
    }
    const contextValue ={getTotalCartItems,getTotalCartAmount,all_product,CartItems,addToCart,removeFromCart};

    useEffect(()=>{
        console.log("cart updated:",CartItems);
    },[CartItems])
    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    )
}
export default ShopContextProvider;