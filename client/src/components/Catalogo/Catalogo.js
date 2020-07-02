import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions/productsAction";

// CSS
import "./Catalogo.css";

// Components
import CategoryFilter from '../CategoryFilter/CategoryFilter.js';
import SearchBar from '../SearchBar/SearchBar.js';
import NavBar from '../NavBar/NavBar.js';

function Catalogo({arrayProductos, fetchProducts, showProducts, onFilter, categories, showCategoryOption, onSearch}){

    useEffect(() => {
        fetchProducts();
      }, []);
     
    return(
        
        <div className="catalogo">
            <NavBar arrayProductos={arrayProductos} showProducts={showProducts}/>
            <div className="catalogo_bg"></div>

            <div className="catalogo_title">
                <h1>Shop Online</h1>
                <h5>En nuestra tienda vas a encontrar accesorios de diseño exclusivo, confeccionados a mano con una visión que conjuga moda, belleza y pasión.</h5>
            </div>

            <div className="catalogo_bar">
                <div className="volver_catalogo_bar">Volver al listado completo</div>
                <CategoryFilter onFilter={onFilter} showProducts={showProducts} categories={categories} showCategoryOption={showCategoryOption}/>
                <SearchBar showProducts={showProducts} onSearch={onSearch}/>
            </div>
            
            <div className="container">
                <div className="catalogo_products">
                    {showProducts(arrayProductos)}
                </div>
            </div>

    </div>
  );
}
const mapStateToProps = (state) => {
    return {
        arrayProductos: state.products.products,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchProducts: () => dispatch(fetchProducts()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Catalogo);
