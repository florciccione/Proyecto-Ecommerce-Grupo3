import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// CSS
import "./Carrito.css";
//COMPONENTES
import ProductItemCart from "./ProductItemCart.js";
import NavBar from "../NavBar/NavBar.js";

export default function Carrito() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart);
  const userId = useSelector((state) => state.login.login.data.data.user.id);
  const token = useSelector((state) => state.login.login.data.data.token);
  
  var subTotal = 0;
  let arrayProductosCart = items;
 
  function showProducts(arrayProductosCart) {
    
    if (arrayProductosCart.length > 0) {
      subTotalItems(arrayProductosCart);
      return arrayProductosCart.map((product) => (
        <ProductItemCart product={product} subTotal={subTotal} />
      ));
    } else {
      return <div className="empty_cart">TU CARRITO ESTA VACÍO.</div>
    }
  }

  function subTotalItems(arrayProductosCart, product) {
    if (arrayProductosCart !== undefined) {
      arrayProductosCart.forEach((element) => {
        subTotal += element.count * element.price;
      });
    } else {
      subTotal = product.price;
    }
  }

  function generateOrder() {
    var f = new Date();
    var fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();

    //CORREGIR --> EL PRIMER AXIOS ES A ORDEN Y DENTRO DEL FOREACH UN AXIOS A LINEA DE ORDEN POR CADA PRODUCTO

    items.forEach(item => {
        const body = { token:token, userId, fecha, cantidad:item.count, price: item.price * item.count, stockXColorId: item.stockXColorId  };
        axios({
            method: "POST",
            url: `http://localhost:3001/orden/add`,
            data: body,
            })
            .then(function (res) {
              console.log(res.data);
              alert("Se concreto la compra")
            })
            .catch((reason) =>
              console.log("No se pudo crear la orden " + reason)
            ); 
    });
    //ACA HAY QUE VACIAR EL CARRITO!!!!
    //ENVIAR MAIL CONFIRMANDO LA COMPRA
    //ENVIAR MAIL DE ORDEN DESPACHADA
  }

  return (
    <div className="container_add_user">
      <NavBar />
      <div className="catalogo_bg"></div>
      <h3>Carrito de compras</h3>
      <div className="container_cart">
        
        <div className="products">
          <div className="cart_head">
              <h5 className="head_1">PRODUCTO</h5>
              <h5 className="head_2">DESCRIPCION</h5>
              <h5 className="head_3">COLOR</h5>
              <h5 className="head_4">PRECIO</h5>
              <h5 className="head_5">CANTIDAD</h5>
          </div>
          <div className="productos">{showProducts(arrayProductosCart)}</div>
        </div>

        <div className="finish">
          <div className="total">TOTAL: {" $  " + subTotal}</div>
          <button className="comprar" onClick={e => generateOrder()}>
            FINALIZAR COMPRA
          </button>
        </div>

      </div>
    </div>
  );
}
