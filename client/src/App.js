import React, {useState, useEffect} from 'react';
import { Route, Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import axios from 'axios';

// Componentes
import Product from './components/Product/Product.js';
import Catalogo from './components/Catalogo/Catalogo.js';
import CrudProduct from './components/CrudProduct/CrudProduct.js';
import ProductCard from './components/Catalogo/ProductCard.js';
import FormCreateUsuario from './components/CrudUsuario/FormCreateUsuario.js';
import Carrito from './components/Carrito/Carrito.js';

function App() {
  var [arrayProductos, setArrayProductos] = useState([]);
  var [categories, setCategories] = useState([]);
  
/*  useEffect(() => {
    axios({
      method:'GET',
      url:'http://localhost:3001/product/'
      }).then(function(res){
        setArrayProductos(res.data);
      });
    axios({
      method:'GET',
      url:'http://localhost:3001/category/'
      }).then(function(res){
        setCategories(res.data);
      });
  }, []);
*/

//muestra todos los productos
function showProducts(arrayProductos){
  console.log(arrayProductos)
  return arrayProductos.map(product => 
  <Link to={'/producto/' + product.id} className="catalogo_product"> 
      <ProductCard product={product}/>
  </Link> );
}; 
//devuelve el producto buscado o mensaje 
function onSearch(keyword) {
  if(keyword){
    var arraySearched = arrayProductos.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()) || product.keywords.toLowerCase().includes(keyword.toLowerCase()));
    setArrayProductos(arraySearched);
  } else {
    alert("No se han encontrado productos");
  }
};
//MUESTRA EN EL SELECT EL LISTADO DE LAS CATEGORIAS EXISTENTES
function showCategoryOption(categories) { 
  return categories.map(category => 
  <option value={category.id} className='product_category_option'>
      {category.name}
  </option>
  );
};
//devuelve los productos de la categoria seleccionada
function onFilter(category) {
  if(category){ 
    var arrayFiltered = arrayProductos.filter(product => product.idCategory === parseInt(category)) 
    if(arrayFiltered) {
      setArrayProductos(arrayFiltered);
    } else {
      alert("No se encontraron productos para esa categoría");
    }
  } else {
    alert("No se encontraron productos para esa categoría");
  }  
}
//devuelve el producto seleccionado
function onSelect(id){
  let producto = arrayProductos.filter(producto => producto.id === parseInt(id));
  return producto[0];
}; 

  return (
    <div className="App">
       {/* PRODUCT Routes */}
     <Route
      exact
      path='/'
      component={() => <Catalogo arrayProductos={arrayProductos} showProducts={showProducts} onSearch={onSearch} onFilter={onFilter} categories={categories} showCategoryOption={showCategoryOption}/>}
     />
     <Route
      exact
      path='/producto/:id'
      component={({match}) => <Product productDetail={onSelect(match.params.id)} />}
     />

     {/* CRUD Routes */}
     <Route
      exact
      path='/panel-admin/producto/'
      component={() => <CrudProduct arrayProductos={arrayProductos} categories={categories} showCategoryOption={showCategoryOption}/>}
     />
     {/* CRUD USUARIO */}
      <Route
      exact
      path='/usuario/registrarse/'
      component={() => <FormCreateUsuario/>}
     />
      <Route
      exact
      path='/usuario/cart/'
      component={() => <Carrito/>}
     />
     
    </div>
  );
}

export default App;
