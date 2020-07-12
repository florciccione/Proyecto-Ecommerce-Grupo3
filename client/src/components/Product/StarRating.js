import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";

import "./Product.css";

import "./StarRating.css";

const StarRating = ({id}) => {
  // Estrellitas
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  // Review
  const [review, setReview] = useState({
    comment: "",
  });

  const handleInputChange = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const sendComment = e => {
    e.preventDefault();
    const reviewProduct = review.comment;
    const starProduct = rating;
    const idProduct = id;
    const body = {idProduct,reviewProduct, starProduct}
    axios({
      method: "POST",
      url: "http://localhost:3001/user/add",
      data: body,
    })
      .then(function (res) {
        console.log(res.data);
        alert("La cuenta se creo con éxito");
      })
      .then(function () {
        window.location.replace("../../");
      })
      .catch((reason) =>
        alert("No se pudo crear la cuenta de usuario " + reason)
      );
    console.log(body)
  }

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
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
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
            placeholder="Escribe tu reseña de este producto.."
            type="text"
            name="comment"
            onChange={handleInputChange}
          />
          {/* <p>{review.comment}</p>
          <p className="abajo">La clasificación es {rating}</p> */}
          <button className="product_cart-btn" type="submit">
            Enviar Reseña
          </button>
        </div>
        <div></div>
      </form>
    </div>
  );
};

export default StarRating;
