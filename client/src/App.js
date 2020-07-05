import React from "react";
import { Route } from 'react-router-dom';

// Componentes
import Product from './components/Product/Product.js';
import Catalogo from './components/Catalogo/Catalogo.js';
import CrudProduct from './components/CrudProduct/CrudProduct.js';
import FormCreateUsuario from './components/CrudUsuario/FormCreateUsuario.js';
import Carrito from './components/Carrito/Carrito.js';

export default function App() {
/*
  //devuelve el producto seleccionado
  function onSelect(id){
    let producto = arrayProductos.filter(producto => producto.id === parseInt(id));
    return producto[0];
    }; 
*/
  return (
    <div className="App">
       {/* PRODUCT Routes */}
     <Route
      exact
      path='/'
      component={() => <Catalogo />}
     />
     <Route
      exact
      path='/producto/:id'
      component={() => <Product  />}
     />

     {/* CRUD Routes */}
     <Route
      exact
      path='/panel-admin/producto/'
      component={() => <CrudProduct />}
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

