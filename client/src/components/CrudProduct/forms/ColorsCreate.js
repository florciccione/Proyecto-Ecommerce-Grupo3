import React from "react";

//CSS
//import "./ProductCreateForm.css";
import "./ColorsCreate.css"

export default function ColorsCreate() {
    return (
    <form className="crud_create_product_form" >
      <div classname="inputs">
      <div className="form_input">
          <label>Nombre:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Nombre del color"
          />
          <p className="errorName danger"></p>
        </div>

        <div className="form_input_color">
          <label>Color:</label>
          <input
            id="color"
            name="description"
            type="color"
          />
          <p className="errorDescription danger"></p>
        </div>

        <div className="form_input">
          <label>Cantidad:</label>
          <input
            id="amount"
            name="amount"
            type="number"
          />
          <p className="errorDescription danger"></p>
        </div>

        <div className="form_input">
            <label>Imagen:</label>
            <input 
              type="file" 
              name="image" 
              accept="image/png, image/jpeg"
            />
            <p className="errorImage danger"></p>
        </div>
      </div>

      <div className="colors_submit">
        <input type="submit" name="submit" value="Agregar otro color" />
      </div>
    </form>
          
        
    );
}
