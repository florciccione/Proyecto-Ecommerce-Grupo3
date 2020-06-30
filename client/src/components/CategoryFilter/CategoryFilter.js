import React from 'react';
// CSS
import './CategoryFilter.css';


export default function CategoryFilter({onFilter,categories,showCategoryOption}){

  return(
    <div className="form_input_category">
      <select
        id="category"
        name="category"
        className="select_category"
        onChange={(e) => e.target.value}
        >
        {/*showCategoryOption(categories)*/}
      </select>
      <input type="submit" value="Filtrar" className="filter_btn"/>
  </div>
 );
}
