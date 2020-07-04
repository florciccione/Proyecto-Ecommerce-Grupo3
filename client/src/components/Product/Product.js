import React, {useState} from 'react';
// CSS
import './Product.css';
//COMPONENTES
import NavBar from '../NavBar/NavBar.js';

export default function Product({productDetail,arrayProductos,showProducts}){
var [selectedColor, setSelectedColor] = useState('');
    
    //RETORNA LA IMAGEN DE PORTADA DEL PRODUCTO
    function showImg(colors){
      return colors.find(color => color.stockXColor.main).stockXColor.image;
    }

    function colorActive(colorName){
         setSelectedColor(colorName);
         var option = document.querySelector('#'+colorName);
         option.selected = 'selected';   
     };

    function showColor(colors){
         return colors.map(color => 
             <div className="product_color_img"  
                  style = {{ backgroundColor: color.hexaColor }}
                  onClick = {e => colorActive(color.name)}>
             </div>
         );
     };

    function showColorOption(colors){
        return colors.map(color => 
             <option id={color.name} value={color.name} className='product_colors_option'>
                 {color.name}
             </option>
         );
     };
    function addToCart(productDetail,selectedColor){
        //ENVIARA LOS DATOS DEL PRODUCTO EN CUESTION JUNTO CON EL COLOR SELECCIONADO A LA BD (+ LOS DATOS DEL USUARIO)
        alert('El producto se agrego al carrito de compras');
    };

    return (
        <div className="catalogo">
            <NavBar arrayProductos={arrayProductos} showProducts={showProducts}/>
            <div className="catalogo_bg"></div>

            <div className="catalogo_title">
                <h1>Detalle del producto</h1>
            </div>

                <div className="product container">
                    <div className="product_left">
                        <div className="product_img">
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
                            <span className="product_colors_name">Color: {selectedColor}</span> 
                            <div className="product_colors_img">
                                {showColor(productDetail.colors)}
                            </div>
                            <div className="product_colors_list">
                                <select onChange = {e => colorActive(e.target.value)}>
                                {showColorOption(productDetail.colors)}
                                </select> 
                            </div>                    
                        </div>
                        <div className="product_cart-btn">
                            <div onClick={e => addToCart(productDetail,selectedColor)}>Agregar al carrito</div>
                        </div>
                    </div>
                </div>
        </div>
    )
}