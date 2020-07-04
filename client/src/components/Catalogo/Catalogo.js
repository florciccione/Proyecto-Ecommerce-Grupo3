import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  setProductsSuccess,
} from "../Redux/actions/productsAction.js";

// CSS
import "./Catalogo.css";

// Components
//import CategoryFilter from '../CategoryFilter/CategoryFilter.js';
//import SearchBar from '../SearchBar/SearchBar.js';
import NavBar from "../NavBar/NavBar.js";
import ProductCard from "./ProductCard.js";

export default function Catalogo() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const arrayProductos = products.products;
  useEffect(() => dispatch(getProducts()), []);
  console.log(products);
  //muestra todos los productos

  function showProducts(productos) {
    return productos.map((product) => (
      <Link to={"/producto/" + product.id} className="catalogo_product">
        <ProductCard product={product} />
      </Link>
    ));
  }

  return (
    <div className="catalogo">
      <NavBar arrayProductos={arrayProductos} showProducts={showProducts} />
      <div className="catalogo_bg"></div>
      <div className="catalogo_title">
        <h1>Shop Online</h1>
        <h5>
          En nuestra tienda vas a encontrar accesorios de diseño exclusivo,
          confeccionados a mano con una visión que conjuga moda, belleza y
          pasión.
        </h5>
      </div>
      <div className="catalogo_bar">
        <div className="volver_catalogo_bar">Volver al listado completo</div>
        {/* <CategoryFilter onFilter={onFilter} showProducts={showProducts} arrayCategories={arrayCategories} showCategoryOption={showCategoryOption}/>*/}
        {/* <SearchBar showProducts={showProducts} onSearch={onSearch}/>*/}
      </div>
      <div className="container">
        <div className="catalogo_products">{showProducts(arrayProductos)}</div>
      </div>
    </div>
  );
}
/* const mapStateToProps = (state) => {
  return {
    productos: state.products.products,
  };
}; */

/* const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
    setProductsSuccess: (products) => dispatch(setProductsSuccess(products)),
  };
}; */
/* 
export default connect(mapStateToProps, mapDispatchToProps)(Catalogo);
 */
