import React, {useState} from 'react';
// CSS
import './Product.css';


export default function Product({productDetail}){
// var [selectedColor, setSelectedColor] = useState(productDetail.arrayColors[0].name);
    //retorna la imagen de portada del producto 
    function showImg(colors){
        return colors.find(color => color.stockXColor.main).stockXColor.image;
    }

    // function colorActive(colorName){
    //     setSelectedColor(colorName);
    //     var option = document.querySelector('#'+colorName);
    //     option.selected = 'selected';
    // };

    // function showColor(arrayColors){
    //     return arrayColors.map(color => 
    //         <div className="product_color_img"  
    //              style = {{ backgroundColor: color.hexaColor }}
    //              onClick = {e => colorActive(color.name)}>
    //         </div>
    //     );
    // };

    // function showColorOption(arrayColors){
    //    return arrayColors.map(color => 
    //         <option id={color.name} value={color.name} className='product_colors_option'>
    //             {color.name}
    //         </option>
    //     );
    // }

    return (
        <div className="product container">
            <div className="product_left">
                <div className="product_img">
                   {/* <img src={showImg(productDetail.arrayImages)} alt=""/>  */}
                   <img src={showImg(productDetail.colors)} alt=""/>
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
                    <span>{'$ '+ productDetail.price}</span>
                </div>
                <div className="product_colors">
                    {/* <span className="product_colors_name">Color: {selectedColor}</span> */}
                    <div className="product_colors_img">
                        {/* {showColor(productDetail.arrayColors)} */}
                    </div>
                    <div className="product_colors_list">
                        {/* <select onChange = {e => colorActive(e.target.value)}>
                           {showColorOption(productDetail.arrayColors)}
                        </select> */}
                    </div>                    
                </div>
            </div>
        </div>
    )
}