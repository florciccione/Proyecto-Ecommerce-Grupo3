import React from 'react';
import { useSelector } from "react-redux";

// CSS
import './ProductsList.css';
// Components
import CategoryItem from './CategoryItem.js';

export default function ProductsList({deleteCategory, updateCategory}){
  const arrayCategories = useSelector((state) => state.categories.categories);

  //muestra una lista de todos los productos (ver/modifica/borrar)
  function showCategories(arrayCategories){
    if(arrayCategories){
      return arrayCategories.map( category => <CategoryItem category={category} deleteCategory={deleteCategory} updateCategory={updateCategory}/> );
    }
  }; 

  return(
      <div className="crud_products_list">
          <div className="crud_products_header">
              <h1>Categorías</h1>
              {/* <div className="btn_create_product">Nuevo Producto</div> */}
          </div>
          <div className="products_list">
              {showCategories(arrayCategories)}
          </div>
          

      </div>
  )
}