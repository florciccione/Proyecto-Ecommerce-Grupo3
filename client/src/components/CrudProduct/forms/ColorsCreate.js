import React from "react";

//CSS
import "./ProductCreateForm.css";

export default function ColorsCreate() {
    return (
        <div>
          <div className="container_form">
            <form className="crud_create_product_form" >
              
                <div className="form_input_name">
                  <label>Nombre:</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Nombre del color"
                  />
                  <p className="errorName danger"></p>
                </div>
    
                <div className="form_input_name">
                  <label>Color:</label>
                  <input
                    id="color"
                    name="description"
                    type="color"
                  />
                  <p className="errorDescription danger"></p>
                </div>

                <div className="form_input_name">
                  <label>Cantidad:</label>
                  <input
                    id="amount"
                    name="amount"
                    type="number"
                  />
                  <p className="errorDescription danger"></p>
                </div>
    
                <div className="form_input_image">
                    <label>Imagen:</label>
                    <input 
                      type="file" 
                      name="image" 
                      accept="image/png, image/jpeg"
                    />
                    <p className="errorImage danger"></p>
                </div>

                <div className="colors_submit">
                  <input type="submit" name="submit" value="Agregar otro color" />
               </div>
            </form>
          </div>
        </div>
    );
}
