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
  var subTotal = 0;
  let arrayProductosCart = items;
  // console.log(items);

  // useEffect(() => {
  //   subTotalItems(arrayProductosCart);
  // }, []);

  //   var arrayProductosCart = [
  //     {
  //       id: 1,
  //       name: "Pulsera Noruega",
  //       description:
  //         "Pulsera en gamuza con cristal de roca facetado, agatas y detalles de metal.",
  //       price: 1050,
  //       keywords: "pulseras,gamuza,agatas,metal,piedras,cristales",
  //       idCategory: 5,
  //       image: "urlFotoCollar",
  //       categoria: { name: "Pulseras" },
  //       colors: [
  //         { id: 1, name: "Negro", hexaColor: "#000000" },
  //         { id: 2, name: "Rojo", hexaColor: "#ff3636" },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       name: "Pulsera Cubos",
  //       description:
  //         "Pulsera en gamuza con cristales cúbicos y detalles de metal.",
  //       price: 1150,
  //       keywords: "pulseras,gamuza,,metal,dije,cristales",
  //       idCategory: 5,
  //       image: "urlFotoCollar",
  //       categoria: { name: "Pulseras" },
  //       colors: [
  //         { id: 1, name: "Negro", hexaColor: "#000000" },
  //         { id: 2, name: "Rojo", hexaColor: "#ff3636" },
  //       ],
  //     },
  //   ];

  //   axios({
  //     method: "GET",
  //     url: "http://localhost:3001/orden/2",
  //   }).then(function (res) {
  //     console.log(res.data);
  //   });

  function showProducts(arrayProductosCart) {
    // console.log(arrayProductosCart)
    if (arrayProductosCart !== undefined) {
      subTotalItems(arrayProductosCart);
      return arrayProductosCart.map((product) => (
        <ProductItemCart product={product} subTotal={subTotal} />
      ));
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
            <h5 className="head_3">PRECIO</h5>
            <h5 className="head_4">CANTIDAD</h5>
            {/* <h5 className="head_5">SUBTOTAL</h5> */}
            <h5 className="head_5">ACCIONES</h5>
          </div>
          <div className="productos">{showProducts(arrayProductosCart)}</div>
        </div>

        <div className="finish">
          <div className="total">TOTAL: $ {subTotal}</div>
          <button className="comprar">FINALIZAR COMPRA</button>
        </div>
      </div>
    </div>
  );
}
