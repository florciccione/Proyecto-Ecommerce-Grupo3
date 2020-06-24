import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
// Componentes
import Product from './components/Product/Product.js';
import Catalogo from './components/Catalogo/Catalogo.js';

function App() {
  var [arrayProductos, setArrayProductos] = useState([{name:'producto4',precio:200, id:3, arrayImages: [], arrayColors:[], description:"pulsera"}, {name:'producto5',precio:300,id:4, arrayImages: [], arrayColors:[], description:"pulsera2"}, {name:'producto6',precio:400,id:6, arrayImages: [], arrayColors:[], description:"pulsera3"}]);
 //devuelve el producto buscado o mensaje 
  function onSearch(keyword) {
    if(keyword){
      var arraySearched = arrayProductos.filter(product => product.name.includes(keyword));
      setArrayProductos(arraySearched);
    } else {
      alert("No se han encontrado productos");
    }
  };
//devuelve el producto seleccionado
function onFilter(id){
 let producto = arrayProductos.filter(producto => producto.id === parseInt(id));
 console.log(producto[0]);
 return producto[0];
};
//muestra todos los productos
function showProducts(arrayProductos){
  return arrayProductos.map(product => <Link to={'/' + product.id} className="catalogo_product"> 
  {product.name}
  </Link> );
}; 

  return (
    <div className="App">
      <Route
      exact
      path='/'
      component={() => <Catalogo arrayProductos={arrayProductos} showProducts={showProducts} onSearch={onSearch} />}
     />
     <Route
      exact
      path='/:id'
      component={({match}) => <Product productDetail={onFilter(match.params.id)} />}
     />
    </div>
  );
}

export default App;
