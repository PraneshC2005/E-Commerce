import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import Description from '../Components/Description/Description';
const Product = () =>{
        const { all_product } = useContext(ShopContext);
        const { productid } = useParams();
    
        const product = all_product.find((e) => e.id === Number(productid));
        if (!product) {
            return <div>Product Not Found or Loading...</div>;
        }
    
        return (
            <div>
                <Breadcrums product={product} />
                <ProductDisplay product={product}/>
                <Description/>
                <RelatedProducts/>
            </div>
        );
    
};
export default Product;