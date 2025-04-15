import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
const Product = () =>{
        const { all_product } = useContext(ShopContext);
        const { productid } = useParams();
    
        const product = all_product.find((e) => e.id === Number(productid));
        console.log("Product ID from URL:", productid);
        console.log("All Products List:", all_product);

        if (!product) {
            return <div>Product Not Found or Loading...</div>;
        }
    
        return (
            <div>
                <Breadcrums product={product} />
                {/* Other product details */}
            </div>
        );
    
};
export default Product;