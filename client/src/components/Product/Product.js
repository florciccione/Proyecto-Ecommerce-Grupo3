import React from 'react';
import imagenPrueba from '../../img/products/pulseras/p-quebec-humo.jpg';
import colorPrueba from '../../img/products/colors/hd_mineral_foundation_stick_cloud1c-swatch.jpg';
// CSS
import './Product.css';


export default function Product({arrayColors}){

    return (
        <div className="product container">
            <div className="product_left">
                <div className="product_img">
                    <img src={imagenPrueba} alt=""/>
                </div>                
            </div>
            <div className="product_right">
                <div className="product_name">
                    <h1>Pulsera Quebec</h1>
                </div>
                <div className="product_description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. In culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="product_price">
                    <span>$500.00</span>
                </div>
                <div className="product_colors">
                    {/* <span>Color: {color.name}</span>
                    {arrayColors.forEach(color => {
                        <span className="product_colors_name">Color: {color}</span>
                    })}
                    <select>
                    {arrayColors.forEach(color => {                    
                            <option>{color.color} color: {color.name}</option>
                    })}
                    </select> */}

                    <span className="product_colors_name">Color: Dorado</span>
                    <div className="product_colors_img">
                        <img src={colorPrueba} alt=""/>
                    </div>
                    <div className="product_colors_list">
                        <select>
                            <option>
                                Dorado
                            </option>
                        </select>
                    </div>                    
                </div>
            </div>
        </div>
    )
}