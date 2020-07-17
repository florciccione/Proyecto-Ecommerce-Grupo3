import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

// CSS
import "./DatosUsuario.css";

//COMPONENTES
import NavBar from "../NavBar/NavBar.js";

export default function DatosUsuario() {
    const userData = useSelector((state) => state.login.login.data.data.user);
    return (
        <form className="container_info_user">
          <NavBar />
          <div className="catalogo_bg"></div>
          <h3>Mis datos personales</h3>
          <div className="data_user">
                <label>Nombre: </label>
                <input placeholder={userData.name}/>
                <label>Domicilio: </label>
                <input placeholder={userData.adress}/>
                <label>email: </label>
                <input value={userData.email}/>
          </div>
          <div className="btn_data_user">
            <div className="btn_enviar_user">ENVIAR</div>  
          </div>
          <div className="btn_data_user">
            <Link to="/usuario/config/" className="btn_volver_user">VOLVER</Link>  
          </div>
        </form>  
    )
}