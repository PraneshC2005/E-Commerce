import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import './RelatedProduct.css';
const RelatedProducts = () =>{
    return(
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-main">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}
export default RelatedProducts;