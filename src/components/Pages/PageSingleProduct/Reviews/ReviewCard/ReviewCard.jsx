import React from "react";
import { starIcon } from "../../../../icons";
import "./ReviewCard.scss";


const ReviewCard = ({review}) => {
  return (
    <div className="reviewCard">
      <div className="reviewCard__top">
        <div className="reviewCard__rating">
          {review.rating.map((item, index) => {
            return <div key={index}>{starIcon}</div>;
          })}
        </div>
        <p className="reviewCard__date">{review.date}</p>
      </div>
      <p className="reviewCard__title">{review.title}</p>
      <p className="reviewCard__details">
        {review.author}, {review.color}, {review.size}
      </p>
      <p className="reviewCard__comment">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
