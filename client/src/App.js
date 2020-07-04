import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
//import { useSelector } from "react-redux";
import {
  getProducts,
  setProductsSuccess,
} from "./components/Redux/actions/productsAction.js";

// Componentes
import Product from "./components/Product/Product.js";
import Catalogo from "./components/Catalogo/Catalogo.js";
import CrudProduct from "./components/CrudProduct/CrudProduct.js";
import FormCreateUsuario from "./components/CrudUsuario/FormCreateUsuario.js";
import Carrito from "./components/Carrito/Carrito.js";
import { fetchCategories } from "./components/Redux/actions/categoryAction.js";

function App() {
  //MUESTRA EN EL SELECT EL LISTADO DE LAS CATEGORIAS EXISTENTES
  function showCategoryOption(arrayCategories) {
    return arrayCategories.map((category) => (
      <option value={category.id} className="product_category_option">
        {category.name}
      </option>
    ));
  }
  //devuelve los productos de la categoria seleccionada
  /*   function onFilter(category) {
    if (category) {
      var arrayFiltered = arrayProductos.filter(
        (product) => product.idCategory === parseInt(category)
      );
      if (arrayFiltered) {
        showProducts(arrayFiltered);
      } else {
        alert("No se encontraron productos para esa categoría");
      }
    } else {
      alert("No se encontraron productos para esa categoría");
    }
  } */
  //devuelve el producto seleccionado
  /* function onSelect(id) {
    let producto = arrayProductos.filter(
      (producto) => producto.id === parseInt(id)
    );
    return producto[0];
  } */

  return (
    <div className="App">
      {/* PRODUCT Routes */}
      <Route exact path="/" component={() => <Catalogo />} />
      <Route
        exact
        path="/producto/:id"
        component={({ match }) => <Product />}
      />

      {/* CRUD Routes */}
      <Route
        exact
        path="/panel-admin/producto/"
        component={() => <CrudProduct />}
      />
      {/* CRUD USUARIO */}
      <Route
        exact
        path="/panel-admin/producto/"
        component={() => (
          <CrudProduct
            /* categories={categories} */
            showCategoryOption={showCategoryOption}
          />
        )}
      />
      {/* CRUD USUARIO */}
      <Route
        exact
        path="/usuario/registrarse/"
        component={() => <FormCreateUsuario />}
      />
      <Route exact path="/usuario/cart/" component={() => <Carrito />} />
    </div>
  );
}

export default App;
