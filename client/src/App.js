import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
// Componentes
import Product from './components/Product/Product.js';
import Catalogo from './components/Catalogo/Catalogo.js';

function App() {
  var [arrayProductos, setArrayProductos] = useState([{name:'Pulsera Quebec',price:500, id:1, arrayImages: ['./img/products/pulseras/p-quebec-humo.jpg'], 
  arrayColors:[{name: 'Humo', hexaColor: '#b4b0b0'}, {name: 'Rojo', hexaColor: '#ff3636'}], 
  description:"Pulsera triple elastizada, de cristal de roca facetado"}, 
  {name:'Pulsera Turquía',price:300, id:2, arrayImages: ['./img/products/pulseras/p-quebec-humo.jpg'], 
  arrayColors:[{name: 'Humo', hexaColor: '#b4b0b0'}, {name: 'Rojo', hexaColor: '#ff3636'}], 
  description:"Pulsera triple elastizada, de cristal de roca facetado"},
  {name:'Pulsera Sidney',price:250, id:3, arrayImages: ['./img/products/pulseras/p-quebec-humo.jpg'], 
  arrayColors:[{name: 'Humo', hexaColor: '#b4b0b0'}, {name: 'Rojo', hexaColor: '#ff3636'}], 
  description:"Pulsera de cristal de roca facetado, con detalles y dije de metal"}]);
  console.log(arrayProductos[0].arrayImages[0]) 

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
 return producto[0];
};
//muestra todos los productos
function showProducts(arrayProductos){
  
  return arrayProductos.map(product => <Link to={'/' + product.id} className="catalogo_product"> 
  <div className='catalogo_product_img'>
  <img src={product.arrayImages[0]} alt=""/>
  </div>
  <div className='catalogo_product_name'>
  {product.name}
  </div>
  <div className='catalogo_product_price'>
  {'$ '+product.price}
  </div>
  <div className='catalogo_product_description'>
  {product.description}
  </div>
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
