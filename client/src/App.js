import React, {useState} from 'react';
import { Route } from 'react-router-dom';

//import { arrayProductos } from './data.js';
// Componentes
import Product from './components/Product/Product.js';
import Catalogo from './components/Catalogo/Catalogo.js';

import CrudProduct from './components/CrudProduct/CrudProduct.js';
import ProductCreateForm from './components/CrudProduct/forms/ProductCreateForm.js';


function App() {
  var [arrayProductos, setArrayProductos] = useState([{name:'Pulsera Noruega',price:1050, id:1, arrayImages: ['img/pulseras/p-noruega-negro.jpg'], 
  arrayColors:[{name: 'Negro', hexaColor: '#000000'}, {name: 'Rojo', hexaColor: '#ff3636'}], 
  description:"Pulsera en gamuza con cristal de roca facetado, agatas y detalles de metal.", keywords: ['pulseras', 'gamuza', 'agatas', 'metal', 'piedras', 'cristales']}, 
  {name:'Pulsera Cubos',price:1150, id:2, arrayImages: ['img/pulseras/cubos-gamuza.jpg'], 
  arrayColors:[{name: 'Aqua', hexaColor: '#9bcfcb'}, {name: 'Rojo', hexaColor: '#ff3636'}], 
  description:"Pulsera en gamuza con cristales cúbicos y detalles de metal.", keywords: ['pulseras', 'gamuza', 'metal', 'cristales', 'cubos', 'cúbicos', 'cuadrados']},
  {name:'Pulsera Quebec',price:850, id:3, arrayImages: ['img/pulseras/p-quebec-humo.jpg'], 
  arrayColors:[{name: 'Humo', hexaColor: '#b4b0b0'}, {name: 'Rojo', hexaColor: '#ff3636'}], 
  description:"Pulsera elastizada triple de cristal de roca facetado, con detalles de metal.", keywords: ['pulseras', 'elastizada', 'triple', 'metal', 'cristales', 'brazalete', 'fiesta', 'noche']},
  {name:'Pulsera Medieval',price:990, id:4, arrayImages: ['img/pulseras/p-medieval-ambar.jpg'], 
  arrayColors:[{name: 'Ambar', hexaColor: '#f5b277'}, {name: 'Rojo', hexaColor: '#ff3636'}], 
  description:"Pulsera diseñada con cristales de roca facetados y detalles de metal.", keywords: ['pulseras', 'metal', 'cristales']}]);
  var categories = [' ','pulseras','collares cortos','collares largos','rosarios','chokers','aros']
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
     {/*ESTO NO ESTA DE MAS AHORA?????????????????????????? */}
     <Route
      exact
      path='/panel-admin/producto/agregar-producto/'
      component={() => <ProductCreateForm />}
     />     
     <Route
      exact
      path='/panel-admin/producto/modificar-producto/'
      component={() => <ProductCreateForm />}
     />
     <Route
      exact
      path='/panel-admin/producto/eliminar-producto/'
      component={() => <ProductCreateForm />}
     />
    </div>
  );
}

export default App;
