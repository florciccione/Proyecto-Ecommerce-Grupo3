import React from 'react';
import axios from 'axios';

// CSS
import './ProductCreateForm.css';

export default function CategoryCreateForm(){
    function handleSubmit(e){
        e.preventDefault();
        var name = document.querySelector('#name').value;
        var body = {name};
        // console.log(body);
        axios({
            method:'POST',
            url:'http://localhost:3001/category/add',
            data:body
            })
            .then(function(res){
              console.log(res.data);
              alert("Se guardó la categoría");
            })
            .catch(reason => alert("No se pudo guardar "+reason));
      };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form_input_name">
                    <label>Nombre:</label>
                    <input
                    id='name'
                    type="text" 
                    name="name" 
                    placeholder="Nombre de la categoría"
                    />
                    <p className="errorName danger"></p>
                </div>
                <div className="form_input_submit">
                    <input type="submit" name="submit" value="Agregar categoría"/>
                </div>
            </form>
        </div>
    )
}