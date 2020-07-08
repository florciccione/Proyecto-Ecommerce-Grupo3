import React, {useEffect} from "react";
//import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getOrdenes } from "../redux/actions/ordenesAction.js";

// CSS
import "./Ordenes.css";

// Components
import OrdenItem from './OrdenItem.js';

export default function Ordenes(){
    const dispatch = useDispatch();
    const arrayOrdenes = useSelector((state) => state.ordenes.ordenes);
    console.log(arrayOrdenes);
    useEffect(() => dispatch(getOrdenes()), []);

    //MUESTRA UNA LISTA DE TODAS LAS ORDENES
    function showOrdenes(arrayOrdenes){
        if(arrayOrdenes){
        return arrayOrdenes.map( orden => <OrdenItem orden={orden}/> );
        };
    }; 

    return(
        <div className="crud_orders_list">
          <div className="crud_orders_header">
              <h2>Listado de Ordenes</h2>
          </div>
          <div className="products_list">
              {showOrdenes(arrayOrdenes)}
          </div>
      </div>
      );
}