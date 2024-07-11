import React from "react";
import "./Reviews.scss";
import Button from "../../../Common/Button/Button";
import ReviewCard from "./ReviewCard/ReviewCard";

const reviews = [
  {
    id: 1,
    // тут будет id продукта, скорее всего...
    product: "Noir Dress",
    date: "2024-07-04",
    author: "Tyenna",
    // пусть костыль побудет тут...
    rating: [1, 1, 1, 1, 1],
    size: "M",
    color: "Noir",
    title: "Bold and Secure!",
    comment:
      "Love the deep V-neck that always stays in place! It's daring without the worry, perfect for nights out",
  },
  {
    id: 1,
    // тут будет id продукта, скорее всего...
    product: "Noir Dress",
    date: "2024-07-04",
    author: "Tyenna",
    // пусть костыль побудет тут...
    rating: [1, 1, 1, 1, 1],
    size: "M",
    color: "Noir",
    title: "Bold and Secure!",
    comment:
      "Love the deep V-neck that always stays in place! It's daring without the worry, perfect for nights out",
  },
];
const filterButtons = [
  { stars: [1, 2, 3, 4, 5] },
  { color: ["noir", "beige"] },
  { size: ["XS", "S", "M", "L", "XL"] },
];

const Reviews = () => {
  return (
    <div className="reviews">
      <h6 className="reviews__title">Filter Reviews by</h6>
      <div className="reviews__filterWrap">
        {filterButtons.map((item, index) => {
          console.log(Object.keys(item));
          return (
            <Button className="button_black reviews__button" key={index}>
              {Object.keys(item)}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="reviews__filterIcon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Button>
          );
        })}
      </div>
      <div className="reviews__content">
        {reviews.map((review, index)=> {
            return (
                <ReviewCard review={review} key={index}/>
            )
        })}
      </div>
    </div>
  );
};

export default Reviews;
