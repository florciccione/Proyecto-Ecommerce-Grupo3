import React from 'react';
import { useSelector } from "react-redux";

// CSS
import './ProductsList.css';
// Components
import ProductItem from './ProductItem.js';

export default function ProductsList({deleteItem, updateItem}){
  
  const arrayProductos = useSelector((state) => state.products.products);

  //muestra una lista de todos los productos (ver/modifica/borrar)
  function showProducts(arrayProductos){
    if(arrayProductos){
      return arrayProductos.map( product => <ProductItem deleteItem={deleteItem} updateItem={updateItem}/> );
    }
  }; 

  return(
      <div className="crud_products_list">
          <div className="crud_products_header">
              <h2>Listado de Productos</h2>
          </div>
          <div className="products_list">
              {showProducts(arrayProductos)}
          </div>
          

      </div>
  )
}