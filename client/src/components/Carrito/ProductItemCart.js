import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// CSS
import './ProductItemCart.css';

export default function ProductItemCart({product}) {
    var [subtotal, setSubtotal] = useState(product.price);

    function subtotalItem(cant){
        setSubtotal(cant * product.price);
    }
    return (
      
    <div className='item_list_container'>
        <Link to={'/producto/' + product.id} className='item_cart_name'>
             {product.name}
        </Link>
        <div className='item_cart_description'>
           {product.description}
        </div>
        <div className='item_cart_price' name="precio">
            {'$ '+ product.price}
        </div>
        <input type="number" min="1" name="cantidad" onChange={e => subtotalItem(e.target.value)} className='item_cant'>
        </input>
        <div type="text" className='item_subtotal'>
            { '$ '+ subtotal }
        </div>
        <div className="item_cart_btns">
            <div className='btn_eliminar'><i title='Eliminar producto' className="fas fa-trash-alt"></i></div>
        </div>        
    </div>   
    );
}