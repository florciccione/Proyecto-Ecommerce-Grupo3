import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Redux/actions/cartAction.js";

// CSS
import "./Product.css";
//COMPONENTES
import NavBar from "../NavBar/NavBar.js";
import StarRating from './StarRating';

export default function Product({ id }) {
  var [selectedColor, setSelectedColor] = useState("");

  const arrayProductos = useSelector((state) => state.products.products);
  const items = useSelector((state) => state.cart);

  const productDetail = arrayProductos.find(
    (product) => parseInt(product.id) == id
  );
  const dispatch = useDispatch();

  //RETORNA LA IMAGEN DE PORTADA DEL PRODUCTO
  function showImg(colors) {
    return colors.find((color) => color.stockXColor.main).stockXColor.image;
  }

  function colorActive(colorName) {
    setSelectedColor(colorName);
    var option = document.querySelector("#" + colorName);
    option.selected = "selected";
  }

  function showColor(colors) {
    return colors.map((color) => (
      <div
        className="product_color_img"
        style={{ backgroundColor: color.hexaColor }}
        onClick={(e) => colorActive(color.name)}
      ></div>
    ));
  }

  function showColorOption(colors) {
    if (colors) {
      return colors.map((color) => (
        <option
          id={color.name}
          value={color.name}
          className="product_colors_option"
        >
          {color.name}
        </option>
      ));
    }
  }
  function colorSelected(selectedColor, productDetail) {
    if (productDetail && selectedColor) {
      var product = {
        id: productDetail.id,
        name: productDetail.name,
        description: productDetail.description,
        price: productDetail.price,
        selectedColor: selectedColor,
      };
      dispatch(addToCart(product));
    } else {
      alert("Debe seleccionar un color");
    }
  }
  return (
    <div className="catalogo">
      <NavBar />
      <div className="catalogo_bg"></div>
      <div className="catalogo_title">
        <h1>Detalle del producto</h1>
      </div>

      <div className="product container">
        <div className="product_left">
          <div className="product_img">
            <img src={showImg(productDetail.colors)} alt="" />
          </div>
        </div>
        <div className="product_right">
          <div className="product_name">
            <h1>{productDetail.name}</h1>
          </div>
          <div className="product_description">
            <p>{productDetail.description}</p>
          </div>
          <div className="product_price">
            <span>{"$ " + productDetail.price}</span>
          </div>
          <div className="product_colors">
            <span className="product_colors_name">Color: {selectedColor}</span>
            <div className="product_colors_img">
              {showColor(productDetail.colors)}
            </div>
            <div className="product_colors_list">
              <select onChange={(e) => colorActive(e.target.value)}>
                {showColorOption(productDetail.colors)}
              </select>
            </div>
          </div>
          <div className="product_cart-btn">
            <div
              onClick={(e) =>
                colorSelected(selectedColor, productDetail, items)
              }
            >
              Agregar al carrito
            </div>
          </div>
          <StarRating id={id}/>
        </div>
      </div>
    </div>
  );
}
