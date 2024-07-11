import React from "react";
import { starIcon } from "../../../../icons";
import "./ReviewCard.scss";

const review = {
  id: 1,
  // тут будет id продукта, скорее всего...
  product: "Noir Dress",
  date: "2024-07-04",
  author: "Tyenna",
  rating: 5,
  size: "M",
  color: "Noir",
  title: "Bold and Secure!",
  comment:
    "Love the deep V-neck that always stays in place! It's daring without the worry, perfect for nights out",
};
let crutchForStars = Array(review.rating).fill(1);

const ReviewCard = () => {
  return (
    <div className="reviewCard">
      <div className="reviewCard__top">
        <div className="reviewCard__rating">
          {crutchForStars.map((item, index) => {
            return <div key={index}>{starIcon}</div>;
          })}
        </div>
        <p className="reviewCard__date">{review.date}</p>
      </div>
      <p className="reviewCard__title">{review.title}</p>
      <p className="reviewCard__details">{review.author}, {review.color}, {review.size}</p>
      <p className="reviewCard__comment">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
