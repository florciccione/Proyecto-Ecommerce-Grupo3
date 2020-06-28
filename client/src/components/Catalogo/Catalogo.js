import React from "react";
// CSS
import "./Catalogo.css";
// Components
//import Product from "../Product/Product.js";

export default function Catalogo() {
  var arrayProductos = [
    "producto1",
    "producto2",
    "producto3",
    "producto4",
    "producto4",
    "producto4",
    "producto4",
    "producto4",
    "producto4",
  ];
  function showProducts(arrayProductos) {
    return arrayProductos.map((product) => (
      <div className="catalogo_product">{product}</div>
    ));
  }

  return (
    <div className="catalogo">
      <div className="catalogo_bg"></div>
      <div className="container">
        <div className="catalogo_title">
          <h1>Tienda Online</h1>
        </div>
        {/* <CatalogoBar /> */}
        <div className="catalogo_products">{showProducts(arrayProductos)}</div>
      </div>
    </div>
  );
}
