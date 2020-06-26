import React, {useState} from 'react';
import { Route } from 'react-router-dom';

//import { arrayProductos } from './data.js';
// Componentes
import Product from './components/Product/Product.js';
import Catalogo from './components/Catalogo/Catalogo.js';
import Crud from './components/Crud/Crud.js';
import FormCreate from './components/Crud/FormCreate.js';

function App() {
  var [arrayProductos, setArrayProductos] = useState([{name:'Pulsera Noruega',price:1050, id:1, arrayImages: ['img/pulseras/p-noruega-negro.jpg'], 
  arrayColors:[{name: 'Negro', hexaColor: '#000000'}, {name: 'Rojo', hexaColor: '#ff3636'}], 
  description:"Pulsera en gamuza con cristal de roca facetado, agatas y detalles de metal."}, 
  {name:'Pulsera Cubos',price:1150, id:2, arrayImages: ['img/pulseras/cubos-gamuza.jpg'], 
  arrayColors:[{name: 'Aqua', hexaColor: '#9bcfcb'}, {name: 'Rojo', hexaColor: '#ff3636'}], 
  description:"Pulsera en gamuza con cristales cúbicos y detalles de metal."},
  {name:'Pulsera Quebec',price:850, id:3, arrayImages: ['img/pulseras/p-quebec-humo.jpg'], 
  arrayColors:[{name: 'Humo', hexaColor: '#b4b0b0'}, {name: 'Rojo', hexaColor: '#ff3636'}], 
  description:"Pulsera elastizada triple de cristal de roca facetado, con detalles de metal."},
  {name:'Pulsera Medieval',price:990, id:4, arrayImages: ['img/pulseras/p-medieval-ambar.jpg'], 
  arrayColors:[{name: 'Ambar', hexaColor: '#f5b277'}, {name: 'Rojo', hexaColor: '#ff3636'}], 
  description:"Pulsera diseñada con cristales de roca facetados y detalles de metal."}]);

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
     <Route
      exact
      path='/panel-admin'
      component={() => <Crud arrayProductos={arrayProductos}/>}
     />
     <Route
      exact
      path='/panel-admin/agregar-producto/'
      component={() => <FormCreate />}
     />
    
    </div>
  );
}

export default App;
