import React from 'react';
// CSS
import './Catalogo.css';

export default function ProductCard({product}) {
    function showImg(colors){
        return colors.find(color => color.stockXColor.main).stockXColor.image;
    }
    return (
    <div>
        <div className='catalogo_product_img'>
            {/* <img src={'producto/'+product.arrayImages[0]} alt=""/> */}
            <img src={'producto/'+showImg(product.colors)} alt=""/>
        </div>
        <div className='catalogo_product_name'>
            {product.name}
        </div>
        <div className='catalogo_product_price'>
            {'$ '+product.price}
        </div>
        <div className='catalogo_product_description'>
            {product.description}
        </div>
    </div>   
    );
}