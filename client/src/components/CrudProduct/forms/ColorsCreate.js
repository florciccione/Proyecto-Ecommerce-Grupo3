import React from "react";

//CSS
//import "./ProductCreateForm.css";
import "./ColorsCreate.css"

export default function ColorsCreate() {
    return (
    <div className="crud_create_product_form" >
      <div className="inputs">
        <div className="input_name">
          <label>Nombre:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Nombre del color"
          />
        </div>

        <div className="input_color">
          <label>Color:</label>
          <input
            id="color"
            name="description"
            type="color"
          />
        </div>

        <div className="input_cant">
          <label>Cantidad:</label>
          <input
            id="amount"
            name="amount"
            type="number"
          />
        </div>

        <div className="input_img">
            <label>Imagen:</label>
            <input 
              type="file" 
              name="image" 
              accept="image/png, image/jpeg"
            />
        </div>
        <input type="checkbox" className="main"></input>
      </div>
    </div>
          
        
    );
}
