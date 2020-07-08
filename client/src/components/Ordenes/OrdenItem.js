import React from 'react';
import {Link} from 'react-router-dom';

// CSS
import './Orden.css';
//COMPONENTES
import Orden from './Orden.js';

export default function OrdenItem({orden}) {
const idPopup = orden.id
    function showPopup(idPopup){
      document.getElementById(idPopup).style.display='block';
    };
    function closePopup(idPopup){
        document.getElementById(idPopup).style.display='none';
    };

    return (
    <div className='item_list-container'>
        <div className='item_list_name'>
            {orden.fecha}
        </div>
        <div className='item_list_description'>
            {orden.state}
        </div>
        <div className="item_list_btns">
            <div onClick={e=>showPopup(idPopup)} className='btn_ver'><i title='Ver Orden' className="far fa-file"></i></div>
        </div>
        
        <div className="popup" id={orden.id}>
                <div onClick={e => closePopup(idPopup)} className='close'><i className="far fa-times-circle"></i></div>
                <div className='item_list-orden'>
                <div className='title'>Detalle de la orden: {orden.id}</div>
                <div className='header'>
                    <div>FECHA</div>
                    <div>ESTADO</div>
                    <div>USUARIO</div>
                </div>
                <div className='detalle_orden'>
                    <div className='item_list_name'>
                        {orden.fecha}
                    </div>
                    <div className='item_list_description'>
                        {orden.state}
                    </div>
                    <div className='item_list_price'>
                        {orden.idUsuario}
                    </div>   
                </div>
            
            </div>   
        </div>        
    </div>   
    );
}