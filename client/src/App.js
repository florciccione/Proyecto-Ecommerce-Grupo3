import React, {useState} from 'react';
import { Route } from 'react-router-dom';

import axios from 'axios';
// import {productos} from './data.js';
// var productos = axios.get('/');
// Componentes
import Product from './components/Product/Product.js';
import Catalogo from './components/Catalogo/Catalogo.js';

import CrudProduct from './components/CrudProduct/CrudProduct.js';
import ProductCreateForm from './components/CrudProduct/forms/ProductCreateForm.js';


function App() {
  var [arrayProductos, setArrayProductos] = useState(productos);
  var categories = ['pulseras','collares cortos','collares largos','rosarios','chokers','aros']
//devuelve el producto buscado o mensaje 
function onSearch(keyword) {
  if(keyword){
    var arraySearched = arrayProductos.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()));
    setArrayProductos(arraySearched);
  } else {
    alert("No se han encontrado productos");
  }
};
//devuelve el producto seleccionado
function onFilter(id){
  let producto = arrayProductos.filter(producto => producto.id === parseInt(id));
  return producto[0];
}; 
  return (
    <div className="App">
    {console.log(productos)}
       {/* PRODUCT Routes */}
      <Route
      exact
      path='/'
      component={() => <Catalogo arrayProductos={arrayProductos} onSearch={onSearch} />}
     />
     <Route
      exact
      path='/producto/:id'
      component={({match}) => <Product productDetail={onFilter(match.params.id)} />}
     />

     {/* CRUD Routes */}
     <Route
      exact
      path='/panel-admin/producto/'
      component={() => <CrudProduct arrayProductos={arrayProductos} categories={categories}/>}
     />
    </div>
  );
}

export default App;
