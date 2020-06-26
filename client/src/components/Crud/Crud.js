import React from 'react';
import {Link} from 'react-router-dom';
// CSS
import './Crud.css';
// Components
import FormCreate from './FormCreate.js';
import ProductsList from './ProductsList.js';

export default function Crud(arrayProductos){
  //muestra por defecto la lista de productos + opciones para agregar categoria o productos
 
    return(
        <div className="crud">

            <div className="crud_bg"></div>

            <div className="crud_title">
                <h1>Panel de Administración de Producto</h1>
                <h5>Desde aquí podrás administrar los productos de tu tienda.</h5>
            </div>

            <div className="crud_bar">
            {/*AGREGAR EL RENDERIZADO DEL COMPONENTE QUE CORRESPONDA PARA CADA CLICK*/}    
               <Link to={'/panel-admin/agregar-producto/'} className='btn_crud_bar'>Agregar producto nuevo</Link>
               <button className='btn_crud_bar'>Agregar nueva categoría</button>
            </div>
            
            <div className="container">
                <div className="crud_forms">
                   <ProductsList arrayProductos={arrayProductos.arrayProductos}/>
                </div>
            </div>

        </div>
    )
}