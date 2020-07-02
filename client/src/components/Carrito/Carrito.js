import React, {useState} from 'react';
import axios from 'axios';

// CSS
import './Carrito.css';
//COMPONENTES
import ProductItemCart from './ProductItemCart.js'
import NavBar from '../NavBar/NavBar.js';
 

export default function Carrito(){
//PARA HACER EL GET DEBO TENER UN ID USUARIO

    var arrayProductosCart = [{
        id: 1,
        name: "Pulsera Noruega",
        description: "Pulsera en gamuza con cristal de roca facetado, agatas y detalles de metal.",
        price: 1050,
        keywords: "pulseras,gamuza,agatas,metal,piedras,cristales",
        idCategory: 5,
        image: "urlFotoCollar",
        categoria: {name: "Pulseras"},
        colors: [{id: 1, 
                 name: "Negro", 
                 hexaColor: "#000000"},
                {id: 2, 
                 name: "Rojo", 
                 hexaColor: "#ff3636"}
                ]
    }, {
        id: 2,
        name: "Pulsera Cubos",
        description: "Pulsera en gamuza con cristales cúbicos y detalles de metal.",
        price: 1150,
        keywords: "pulseras,gamuza,,metal,dije,cristales",
        idCategory: 5,
        image: "urlFotoCollar",
        categoria: {name: "Pulseras"},
        colors: [{id: 1, 
                 name: "Negro", 
                 hexaColor: "#000000"},
                {id: 2, 
                 name: "Rojo", 
                 hexaColor: "#ff3636"}
                ]
    }]
      
 /*   function deleteItem(productSelected){
    setProductSelected(productSelected);
    axios({
        method:'DELETE',
        url:'http://localhost:3001/carrito/ + productSelected.id,
        })
        .then(function(res){
            console.log(res.data);
            alert("Se quito el producto del carrito");
        })
        .catch(reason => alert("No se pudo borrar "+reason));
    }
*/  
    axios({
        method:'GET',
        url:'http://localhost:3001/orden/2'
        }).then(function(res){
        console.log(res.data);
        });

    var [totalCart, setTotalCart] = useState(0);

    function showProducts(arrayProductosCart){
        return arrayProductosCart.map( product => <ProductItemCart product={product} totalCart={totalCart} setTotalCart={setTotalCart} /> );
    };


    return (
        <div className="container_add_user">
            <NavBar/>
            <div className="catalogo_bg"></div>
            <h3>Carrito de compras</h3>
            <div className="container_cart"> 
                <div className="products">
                    <div className="cart_head">
                        <h5 className="head_1">PRODUCTO</h5>
                        <h5 className="head_2">DESCRIPCION</h5>
                        <h5 className="head_3">PRECIO</h5>
                        <h5 className="head_4">CANTIDAD</h5>
                        <h5 className="head_5">SUBTOTAL</h5>
                    </div>
                    <div className="productos">
                        {showProducts(arrayProductosCart)}
                    </div>
                </div>

                <div className="finish">
                    <div className="subtotal">SUBTOTAL: $ {totalCart} </div>
                    <div className="envio">ENVIO:</div>
                    <div className="total">TOTAL: $ {totalCart}</div>
                    <button className="comprar">FINALIZAR COMPRA</button>
                </div>
            </div>
            
            
            
        </div>        
    )
}

