import React from "react";

// CSS
import "./Catalogo.css";

// Components
import CategoryFilter from "../CategoryFilter/CategoryFilter.js";
import SearchBar from "../SearchBar/SearchBar.js";
import NavBar from "../NavBar/NavBar.js";
import { useSelector } from "react-redux";
export default function Catalogo({
  arrayProductos,
  showProducts,
  onFilter,
  categories,
  showCategoryOption,
  onSearch,
}) {
  const products = useSelector((state) => products.data);
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
        <CategoryFilter
          onFilter={onFilter}
          showProducts={showProducts}
          categories={categories}
          showCategoryOption={showCategoryOption}
        />
        <SearchBar showProducts={showProducts} onSearch={onSearch} />
      </div>

      <div className="container">
        <div className="catalogo_products">{showProducts(products)}</div>
      </div>
    </div>
  );
}
