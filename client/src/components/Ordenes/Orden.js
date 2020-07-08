import React from 'react';

export default function Orden({orden}) {
    console.log(orden);
    return (
      
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
    );
}