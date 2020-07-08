import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { getCategories } from "../Redux/actions/categoryAction";

// CSS
import './CrudProduct.css';

// Components
import ProductCreateForm from './forms/ProductCreateForm.js';
import ProductUpdateForm from './forms/ProductUpdateForm.js';
import ProductsList from './ProductsList.js';
import CategoryCreateForm from './forms/CategoryCreateForm';
import CategoryList from './CategoryList.js';
import CategoryUpdateForm from './forms/CategoryUpdateForm.js';

export default function Crud({showCategoryOption}){
//muestra por defecto la lista de productos + opciones para agregar categoria o productos
    const [componentName, setComponentName] = useState('default');
    const [productSelected, setProductSelected] = useState('');
    const [categorySelected, setCategorySelected] = useState('');

    const dispatch = useDispatch();
    const arrayCategories = useSelector((state) => state.categories.categories);
    useEffect(() => dispatch(getCategories()), []);
    console.log(arrayCategories);
    // CRUD PRODUCTO
    function deleteItem(productSelected){
        setProductSelected(productSelected);
        axios({
            method:'DELETE',
            url:'http://localhost:3001/product/'+productSelected.id,
            })
            .then(function(res){
              console.log(res.data);
              alert("El producto fue eliminado");
            })
            .catch(reason => alert("No se pudo borrar "+reason));
    }

    function updateItem(productSelected){
        setComponentName('updateForm');
        setProductSelected(productSelected);
    }

    // CRUD CATEGORIA
    function deleteCategory(categorySelected){
        setCategorySelected(categorySelected);
        axios({
            method:'DELETE',
            url:'http://localhost:3001/category/delete/'+categorySelected.id,
            })
            .then(function(res){
              console.log(res.data);
              alert("Se borró el producto");
            })
            .catch(reason => alert("No se pudo borrar "+reason));
    }

    function updateCategory(categorySelected){
        setComponentName('updateCategory');
        setCategorySelected(categorySelected);
    }
    //EVALUA EL COMPONENTE QUE SE MOSTRARA EN EL PANEL DE ADMINISTRACION
    function showComponent(componentName){    
        if(componentName === 'default'){
            return (<ProductsList deleteItem={deleteItem} updateItem={updateItem}/>)
        }else if(componentName === 'createForm'){
            return (<ProductCreateForm arrayCategories={arrayCategories} showCategoryOption={showCategoryOption}/>)
        }else if(componentName === 'updateForm'){
            return (<ProductUpdateForm productSelected={productSelected} arrayCategories={arrayCategories} showCategoryOption={showCategoryOption}/>)
        }else if(componentName === 'deleteItem'){
            setComponentName('default');
        }else if(componentName === 'verCategories'){
            return (<CategoryList arrayCategories={arrayCategories} deleteCategory={deleteCategory} updateCategory={updateCategory}/>);
        }else if(componentName === 'createCategory'){
            return (<CategoryCreateForm />)
        }else if(componentName === 'updateCategory'){
            return (<CategoryUpdateForm categorySelected={categorySelected} />)
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
                <div onClick={e => setComponentName('verCategories')} className='btn_crud_bar'>Ver Categorías</div>
                <div onClick={e => setComponentName('createCategory')} className='btn_crud_bar'>Crear Categoría</div>
            </div>
            
            <div className="container">
                {showComponent(componentName)}
            </div>

        </div>
    )
}