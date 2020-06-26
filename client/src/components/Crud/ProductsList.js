import React, {useState} from 'react';
//import {Link} from 'react-router-dom';
// CSS
import './ProductsList.css';
// Components
import ProductItem from './ProductItem.js';

export default function ProductsList({arrayProductos}){
  //muestra una lista de todos los productos (ver/modifica/borrar)
  function showProducts(arrayProductos){
    return arrayProductos.map( product => <ProductItem product={product}/> );
  }; 

    return(
        <div>
            
            <div className="products_list">
                {showProducts(arrayProductos)}
            </div>
           

        </div>
    )
}