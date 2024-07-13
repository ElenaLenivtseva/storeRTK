import React from "react";
import Button from "../../../Common/Button/Button";
import ReviewCard from "./ReviewCard/ReviewCard";
import "./Reviews.scss";

// Тут был массив reviews. Reviews будут получены как часть singleProduct через useSelect, но пока решила получить их через пропсы


const filterButtons = [
  { stars: [1, 2, 3, 4, 5] },
  { color: ["noir", "beige"] },
  { size: ["XS", "S", "M", "L", "XL"] },
];

const Reviews = ({reviews}) => {
  return (
    <div className="reviews">
      <h6 className="subtitle_smallest reviews__title">Filter Reviews by</h6>
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
        {reviews.map((review, index) => {
          return <ReviewCard review={review} key={index} />;
        })}
      </div>
      <Button className='button button_black reviews__loadButton'>Load More</Button>
    </div>
  );
};

export default Reviews;
