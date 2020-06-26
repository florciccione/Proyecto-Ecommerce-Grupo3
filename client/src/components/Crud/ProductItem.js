import React from 'react';
// CSS
import './ProductItem.css';

export default function ProductItem({product}) {
     
     return (
      
    <div className='list-container'>
        <div className='item_list_name'>
            {product.name}
        </div>
        <div className='item_list_description'>
            {product.description}
        </div>
        <div className='item_list_price'>
            {'$ '+product.price}
        </div>
        <button className='btn_ver'><i title='Ver producto' class="far fa-file"></i></button>
        <button className='btn_modificar'><i  title='Modificar producto' class="far fa-edit"></i></button>
        <button className='btn_eliminar'><i title='Eliminar producto' class="fas fa-trash-alt"></i></button>
        
    </div>   
    );
}