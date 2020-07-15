import React, { useState } from "react";
import ReviewItem from './ReviewItem.js';
import StarRating from './StarRating';

// CSS
import "./ReviewList.css";

export default function ReviewList({reviews}) {

function showReviewItems(reviews){
    return reviews.map(rev => <ReviewItem rev={rev}/>)
}
   return (
    <div className="review_list">
      {/*<StarRating id={id}/>*/}
       {showReviewItems(reviews)}
   </div>
)
};
