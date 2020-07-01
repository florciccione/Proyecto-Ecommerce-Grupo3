import React from 'react';
//import {Link} from 'react-router-dom';
// CSS
import './ProductsList.css';
// Components
import ProductItem from './ProductItem.js';

export default function ProductsList({arrayProductos, deleteItem, updateItem}){
  //muestra una lista de todos los productos (ver/modifica/borrar)
  function showProducts(arrayProductos){
    return arrayProductos.map( product => <ProductItem product={product} deleteItem={deleteItem} updateItem={updateItem}/> );
  }; 

  return(
      <div className="crud_products_list">
          <div className="crud_products_header">
              <h2>Listado de Productos</h2>
              {/*<div className="btn_create_product">Nuevo Producto</div>*/}
          </div>
          <div className="products_list">
              {showProducts(arrayProductos)}
          </div>
          

      </div>
  )
}