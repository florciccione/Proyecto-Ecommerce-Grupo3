import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";

import "./Product.css";

import "./StarRating.css";

const StarRating = ({ id }) => {
  // Estrellitas
  const [ratingStar, setRatingStar] = useState(null);
  const [hover, setHover] = useState(null);

  // Review
  const [reviewProduct, setReviewProduct] = useState({
    title: "",
    review: "",
  });

  const handleInputChange = (e) => {
    setReviewProduct({
      ...reviewProduct,
      [e.target.name]: e.target.value,
    });
  };

  const sendComment = (e) => {
    e.preventDefault();
    let title = reviewProduct.title;
    let review = reviewProduct.comment;
    let ranking = ratingStar;
    const idProduct = parseInt(id);
    const idUsuario = 1;
    const body = {
      title,
      review,
      ranking,
      idUsuario,
      idProduct,
    };
    axios
      .post("http://localhost:3001/review/add", body)
      .then((res) => {
        console.log(res);
      })
      .catch((reason) => alert("No se pudo agregar una review " + reason));
    console.log(body);
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRatingStar(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || ratingStar) ? "#ffc107" : "#e4e5e9"}
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <form onSubmit={sendComment}>
        <div>
          <input
            className="abajo"
            placeholder="Escribe un titulo"
            type="text"
            name="title"
            onChange={handleInputChange}
          />
          {/* <p>{review.comment}</p>
          <p className="abajo">La clasificación es {rating}</p> */}
        </div>
        <div>
          <textarea
            className="abajo"
            placeholder="Escribe tu reseña de este producto.."
            type="text"
            name="comment"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button className="product_cart-btn" type="submit">
          Enviar Reseña
        </button>
      </form>
    </div>
  );
};

export default StarRating;
