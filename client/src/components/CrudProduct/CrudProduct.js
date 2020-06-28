import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
// CSS
import './CrudProduct.css';
// Components
import ProductCreateForm from './forms/ProductCreateForm.js';
import ProductUpdateForm from './forms/ProductUpdateForm.js';
import ProductsList from './ProductsList.js';

export default function Crud({arrayProductos, categories}){
  //muestra por defecto la lista de productos + opciones para agregar categoria o productos
    const [componentName, setComponentName] = useState('default');
    const [productSelected, setProductSelected] = useState('');
    
    function showCategoryOption(categories) { 
        return categories.map(categories => 
        <option value={categories} className='product_category_option'>
            {categories}
        </option>
        );
      };

    function deleteItem(){
        setComponentName('deleteItem');
    }

    function updateItem(productSelected){
        setComponentName('updateForm');
        setProductSelected(productSelected) ;
    }

    function showComponent(componentName){        
        if(componentName === 'default'){
            return (<ProductsList arrayProductos={arrayProductos} deleteItem={deleteItem} updateItem={updateItem}/>)
        }else if(componentName === 'createForm'){
            return (<ProductCreateForm categories={categories} showCategoryOption={showCategoryOption}/>)

        }else if(componentName === 'updateForm'){
            return (<ProductUpdateForm productSelected={productSelected} categories={categories} showCategoryOption={showCategoryOption}/>)
        }else if(componentName === 'deleteItem'){
            alert('Ojo');
            setComponentName('default');
        }
    }
 
    return(
        <div className="crud">

            <div className="crud_bg"></div>

            <div className="crud_title">
                <h1>Panel de Administración de Producto</h1>
                <h5>Desde aquí podrás administrar los productos de tu tienda.</h5>
            </div>

            <div className="crud_bar">
                <div onClick={e => setComponentName('default')} className='btn_crud_bar'>Ver Productos</div>
                <div onClick={e => setComponentName('createForm')} className='btn_crud_bar'>Nuevo Producto</div>
            </div>
            
            <div className="container">
                {showComponent(componentName)}
            </div>

        </div>
    )
}