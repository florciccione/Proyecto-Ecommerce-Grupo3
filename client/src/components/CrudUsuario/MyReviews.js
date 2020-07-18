import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


// CSS
import "./MyReviews.css";

// Components
import NavBar from '../NavBar/NavBar.js';
import ReviewItem from './ReviewItem.js';

export default function MyReviews(){
    
    const userId = useSelector((state) => state.login.login.data.data.user.id);
   
    //FALTA LA RUTA PARA TRAER LAS REVIEWS DE UN USUARIO EN PARTICULAR, PARA PODER HACER EL AXIOS
    var myRev = []; //aca irian las reviews que me traiga el axios
    
    //MUESTRA UNA LISTA DE TODAS LAS REVIEWS
    function showReviews(myRev){
        if(myRev){
        return myRev.map( review => <ReviewItem review={review}/> );
        };
    }; 

    return(
        <div className="container_info_user">
            <NavBar />
            <div className="catalogo_bg"></div>
            <div className="my_reviews_list">
                <div className="my_reviews_header">
                    <h2>Mis reseñas</h2>
                </div>
                <div className="review_list">
                    {showReviews(myRev)}
                </div>
            </div>
            <div className="btn_data_user">
                <Link to="/usuario/config/" className="btn_volver_user">VOLVER</Link>  
            </div>
        </div>    
      );
}