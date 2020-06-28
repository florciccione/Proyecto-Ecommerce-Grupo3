import React from 'react';
import './ProductCreateForm.css';

export default function FormCreate({categories, showCategoryOption}){
  var errors = [];
  
  const regNombre = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  const regPrecio = /^[0123456789]+$/u;

  function handleSubmit(e){
    e.preventDefault();

  };

  function removeErrors(str){
    errors = errors.filter(error => !error.includes(str));
  };

  function handleInputChange(e){
    var errorName = document.querySelector('.errorName');
    var errorDescription = document.querySelector('.errorDescription');
    var errorPrice = document.querySelector('.errorPrice');
    let input = e.target;
    
    // Errores para el campo Name:
    if(input.name === 'name'){

      // Si supera la longitud de 100 caracteres. ERROR!
      if(input.value.length > 5) { // 5 para probar
        errorName.innerHTML = 'Demasiado largo. Máx: 100 caracteres';
        errors.push('nombreLargo');       

        // Si está vacío
      } else if(input.value.length === 0){
        errorName.innerHTML = 'Campo obligatorio';
        errors.push('nombreVacio');

        // Si no cumple con la funcion Regex. ERROR!
      } else if(!regNombre.test(input.value)){
        errorName.innerHTML = 'No debe contener caracteres especiales';
        errors.push('nombreInvalido');

        // Sino, todo bien
      } else{
        errorName.innerHTML = '';
        removeErrors('nombre');
      }     
    }

    // Errores para el campo Description:
    if(input.name === 'description'){

      // Si supera la longitud de 300 caracteres. ERROR!
      if(input.value.length > 5) { // 5 para probar
        errorDescription.innerHTML = 'Demasiado largo. Máx: 300 caracteres';
        errors.push('descripcionLargo');       

        // Si está vacío
      } else if(input.value.length === 0){
        errorDescription.innerHTML = 'Campo obligatorio';
        errors.push('descripcionVacio');

      // Sino, todo bien
      } else{
        errorDescription.innerHTML = '';
        removeErrors('descripcion');
      }     
    }

    // Errores para el campo Price:
    if(input.name === 'price'){

      // Si supera la longitud de 100000 caracteres. ERROR!
      if(input.value.length > 5) { // 5 para probar
        errorPrice.innerHTML = 'Demasiado largo. Máx: 100000 dígitos';
        errors.push('precioLargo');       

        // Si está vacío
      } else if(input.value.length === 0){
        errorPrice.innerHTML = 'Campo obligatorio';
        errors.push('precioVacio');

        // Si no cumple con la funcion Regex. ERROR!
      } else if(!regPrecio.test(input.value)){
        errorPrice.innerHTML = 'No puede contener letras o caracteres especiales';
        errors.push('precioInvalido');

        // Sino, todo bien
      } else{
        errorPrice.innerHTML = '';
        removeErrors('precio');
      }     
    }
  };
  
  return (
    <div>
      <div className="container_form">
        <div className="titulo_form">
          <h1>Agregar nuevo producto</h1>
        </div>
        <form className="crud_create_product_form" onSubmit={handleSubmit}>
        <div className="form_left">
            <div className="form_input_name">
                <label>Nombre:</label>
                <input
                  type="text" 
                  name="name" 
                  placeholder="Nombre del producto"
                  onChange={handleInputChange}
                />
                <p className="errorName danger"></p>
            </div>

            <div className="form_input_desc">
                <label>Descripción:</label>
                <textarea 
                  name ="description" 
                  placeholder = "Descripción del producto"          
                  className = 'product_description'
                  onChange = {handleInputChange} 
                  />
                  <p className="errorDescription danger"></p>
            </div>

            <div className="form_input_keywords">
                <label>Keywords:</label>
                <input 
                  type="text" 
                  name="keywords" 
                  placeholder="Etiquetas del producto"
                  onChange={handleInputChange} 
                />
            </div>

            <div className="form_input_submit">
                <input type="submit" name="submit" value="Guardar producto"/>
            </div>  

        </div>
        
        <div className="form_right">
            <div className="form_input_price">
                <label>Precio:  $</label>
                <input 
                  type="number" 
                  name="price" 
                  placeholder="Precio del producto"
                  onChange={handleInputChange} 
                />
                <p className="errorPrice danger"></p>
            </div>

            <div className="form_input_category">
                <label>Categoría:</label>
{/*INVENTE UN PRIMER ELEMENTO VACIO PARA QUE APAREZCA EN BLANCO EL SELECT, SE PUEDE VALIDAD AL ENVIAR??*/}
                <select name="category" className='select_category' onChange= {e => (e.target.value)}> 
                  {showCategoryOption(categories)}
                </select>
            </div>

            <div className="form_input_image">
                <label>Imagen:</label>
                <input 
                  type="file" 
                  name="image" 
                  onChange={handleInputChange} 
                  accept="image/png, image/jpeg"
                />
                <p className="errorImage danger"></p>
            </div>

        </div>
        
      </form>
      </div>
    </div>
            
        )
  }
