import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

// CSS
import "./CambiarContraseña.css";

//COMPONENTES
import NavBar from "../NavBar/NavBar.js";

export default function CambiarContraseña() {
    const userData = useSelector((state) => state.login.login.data.data.user);
    return (
        <form className="container_info_user">
          <NavBar />
          <div className="catalogo_bg"></div>
          <h3>Cambiar tu contraseña</h3>
          <div className="new_password">
                <label>Escribe tu contraseña actual: </label>
                <input type="password" />
                <label>Reescribe tu contraseña: </label>
                <input type="password" />
                <label>Nueva contraseña: </label>
                <input type="password"/>
          </div>
          <div className="btn_data_user">
            <div className="btn_enviar_user">CAMBIAR CONTRASEÑA</div>  
          </div>
          <div className="btn_data_user">
            <Link to="/usuario/config/" className="btn_volver_user">VOLVER</Link>  
          </div>
        </form>  
    )
}