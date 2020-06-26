import React, {useState} from 'react';
import './FormCreate.css';

export default function FormCreate(){

function handleSubmit(e){
  e.preventDefault();

};

function handleInputChange(e){
var errorName = document.querySelector('#errorName');
if (e.target.value.length > 10) {
   errorName.innerHTML = 'nombre muy largo!!!!';
} else {
  errorName.innerHTML = '';
}
}

return (
  <form onSubmit={handleSubmit} className='container'>
    <h4 className='titulo_form'>Agregar producto nuevo</h4>
    <div>
      <label>Nombre:</label>
        <input 
          type="text" 
          name="name" 
          placeholder="Nombre del producto"
          onChange={handleInputChange} 
      />
      <p id="errorName" className='danger'> </p>
    </div>
    
          <div>
            <label>Descripción:</label>
            <textarea 
              name ="description" 
              placeholder = "Descripción del producto"
              className = 'product_description'
              onChange = {handleInputChange} 
              />
          </div>

          <div>
            <label>Precio: $</label>
            <input 
              type="number" 
              name="price" 
              placeholder="Precio del producto"
              onChange={handleInputChange} 
            />
          </div>

          <div>
            <label>Categoría:</label>
            <select name="category" className='select_category' onChange= {e => (e.target.value)}> 
               {/*showCategoryOption()*/}
            </select>
          </div>

          <div>
            <label>Keywords:</label>
            <input 
              type="text" 
              name="keywords" 
              placeholder="Etiquetas del producto"
              onChange={handleInputChange} 
            />
            {/*{errors.keywords && (<p className="danger">{errors.keywords}</p>)}*/}
          </div>

          <div>
            <input type="submit" name="submit"/>
          </div>
    
  </form>  
          
      )
}
