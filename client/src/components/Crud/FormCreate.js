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
  <form onSubmit={handleSubmit} className='container_form'>
    <h4 className='titulo_form'>Agregar producto nuevo</h4>
    <div className='form_name'>
      <label>Nombre:</label>
        <input 
          type="text" 
          name="name" 
          placeholder="Nombre del producto"
          onChange={handleInputChange} 
      />
      <p id="errorName" className='danger'> </p>
    </div>
    
    <div className='form_description'>
      <label>Descripción:</label>
      <textarea 
        name ="description" 
        placeholder = "Descripción del producto"
        className = 'product_description'
        onChange = {handleInputChange} 
        />
    </div>

    <div className='form_price'>
      <label>Precio: $</label>
      <input 
        type="number" 
        name="price" 
        placeholder="Precio del producto"
        onChange={handleInputChange} 
      />
    </div>

    <div className='form_category'>
      <label>Categoría:</label>
      <select name="category" className='select_category' onChange= {e => (e.target.value)}> 
          {/*showCategoryOption()*/}
      </select>
    </div>

    <div className='form_keywords'>
      <label>Keywords:</label>
      <input 
        type="text" 
        name="keywords" 
        placeholder="Etiquetas del producto"
        onChange={handleInputChange} 
      />
      {/*{errors.keywords && (<p className="danger">{errors.keywords}</p>)}*/}
    </div>

    <div className='form_btn'>
      <input type="submit" name="submit" value='Crear producto'/>
    </div>
    
  </form>  
          
      )
}
