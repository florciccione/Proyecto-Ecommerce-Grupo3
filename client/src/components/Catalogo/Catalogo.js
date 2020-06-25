import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// CSS
import './Catalogo.css';
// Components
// import Product from '../Product/Product.js';
import SearchBar from '../SearchBar/SearchBar.js';
import ProductCard from './ProductCard.js';

export default function Catalogo({arrayProductos,showProducts,onSearch}){
  //muestra todos los productos
  function showProducts(arrayProductos){
    return arrayProductos.map(product => <Link to={'/producto/' + product.id} className="catalogo_product"> 
    <ProductCard product={product}/>
    </Link> );
  }; 

    return(
        <div className="catalogo">

            <div className="catalogo_bg"></div>

            <div className="catalogo_title">
                <h1>Shop Online</h1>
                <h5>En nuestra tienda vas a encontrar accesorios de diseño exclusivo, confeccionados a mano con una visión que conjuga moda, belleza y pasión.</h5>
            </div>

            <div className="catalogo_bar">
                <SearchBar onSearch={onSearch}/>
            </div>
            
            <div className="container">
                <div className="catalogo_products">
                    {showProducts(arrayProductos)}
                </div>
            </div>

        </div>
    )
}