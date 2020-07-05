import React, {useState} from 'react';
// CSS
import './CategoryFilter.css';


export default function CategoryFilter({onFilter,arrayCategories,showCategoryOption}){
  //estado local de la categoria seleccionada para realizar el filtro
  var [category, setCategory] = useState ('');
  
  return(
    <div className="form_category">
      <select
        className="select_category"
        onChange={(e) => setCategory(e.target.value)}
        >
        {showCategoryOption(arrayCategories)}
      </select>
      <button className="filter_btn" onClick={e => onFilter(category)}>Filtrar</button>
  </div>
 );
}
