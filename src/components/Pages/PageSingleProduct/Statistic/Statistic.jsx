import React from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import { starIcon } from "../../../icons";
import { createArrOfEstimatesRercentaiges } from "./functionsForStatistic";
import "./Statistic.scss";

const starTitles = ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"];


const Statistic = ({ productInfo, crutchForStars }) => {
  const estimates = createArrOfEstimatesRercentaiges(productInfo);

  return (
    <div className="statistic">
      <h6 className="subtitle_smallest statistic__subtitle">Rating & Reviews</h6>
      <div className="statistic__top">
        <div className="singleProductCard__rating">
          <div className="singleProductCard__stars">
            {crutchForStars.map((item, index) => {
              return <div key={index}>{starIcon}</div>;
            })}
          </div>
          <p className="singleProductCard__amountOfReviews">
            [{productInfo.reviews.length} reviews]
          </p>
        </div>
      </div>
      <div className="statistic__content">
        {estimates.map((item, index) => {
          return (
            <div className="statistic__row" key={index}>
              <div className="statistic__starsWrap">
                <p className="statistic__star">{starTitles[index]}</p>
              </div>
              <div className="statistic__progressWrap">
                <ProgressBar percentage={item} />
              </div>
              <div className="statistic__percentageWrap">
                <p className="statistic__percentage">{item} %</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistic;
