import React from 'react';
import imagenPrueba from '../../img/products/pulseras/p-quebec-humo.jpg';
import colorPrueba from '../../img/products/colors/hd_mineral_foundation_stick_cloud1c-swatch.jpg';
// CSS
import './Product.css';


export default function Product({id, name, description, price, arrayColors, arrayImages}){

    function showImg(arrayImages){
        arrayImages.map(image => {
            if(image.main){
                return '../../img/products'+image.url;
            }
        });
        return '../../img/products'+arrayImages[0].url;
    }

    function showColor(arrayColors){
        arrayColors.map(color => {
            <div className="product_color_img"  
            style={{
                backgroundColor: color.hexaColor
              }}
            ></div>
        });
    }

    function showColorOption(arrayColors){
        arrayColors.map(color => {
            <option>
                {color.name}
            </option>
        });
    }

    return (
        <div className="product container">
            <div className="product_left">
                <div className="product_img">
                    <img src={showImg(arrayImages)} alt=""/>
                </div>                
            </div>
            <div className="product_right">
                <div className="product_name">
                    <h1>{name}</h1>
                </div>
                <div className="product_description">
                    <p>{description}</p>
                </div>
                <div className="product_price">
                    <span>{price}</span>
                </div>
                <div className="product_colors">
                    <span className="product_colors_name">Color: {}</span>
                    <div className="product_colors_img">
                        {showColor(arrayColors)}
                    </div>
                    <div className="product_colors_list">
                        <select>
                            {showColorOption(arrayColors)}
                        </select>
                    </div>                    
                </div>
            </div>
        </div>
    )
}