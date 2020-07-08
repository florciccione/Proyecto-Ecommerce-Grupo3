import React from 'react';

export default function Orden({orden}) {
    console.log(orden);
    function showDetail(orden){
        if (orden) {
            return orden.products.map(product => 
                <div className='detalle_orden'>
                    <div className='item_list_name'>
                        {product.name}
                    </div>
                    <div className='item_list_cant'>
                         {product.lineaDeOrden.cantidad}
                    </div>
                    <div className='item_list_price'>
                         {'$ '+product.price}
                    </div>  
                    <div className='item_list_subtotal'>
                         {'$ '+product.price * product.lineaDeOrden.cantidad}
                    </div>  
                </div>
            ); 
        };
        
    };
    return (
      
    <div className='item_list-orden'>
        <div className='title'>Detalle de la orden: {orden.id} - Usuario: {orden.usuario.name}</div>
        <div className='sub_title'>Fecha: {orden.fecha} - Estado: {orden.state}</div>
        <div className='header'>
            <div>PODUCTO</div>
            <div>CANTIDAD</div>
            <div>PRECIO</div>
            <div>SUBTOTAL</div>
        </div>
        <div>
            {showDetail(orden)}
        </div>
       
    </div>   
    );
}