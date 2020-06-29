import React from 'react';
//import {Link} from 'react-router-dom';
// CSS
import './ProductsList.css';
// Components
import CategoryItem from './CategoryItem.js';

export default function ProductsList({categories, deleteCategory, updateCategory}){
  //muestra una lista de todos los productos (ver/modifica/borrar)
  function showCategories(categories){
    return categories.map( category => <CategoryItem category={category} deleteCategory={deleteCategory} updateCategory={updateCategory}/> );
  }; 

  return(
      <div className="crud_products_list">
          <div className="crud_products_header">
              <h1>Categorías</h1>
              {/* <div className="btn_create_product">Nuevo Producto</div> */}
          </div>
          <div className="products_list">
              {showCategories(categories)}
          </div>
          

      </div>
  )
}