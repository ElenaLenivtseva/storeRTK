import React from "react";
import Statistic from "../Statistic/Statistic";
import Reviews from "../Reviews/Reviews";
import "./WrapStatisticAndReviews.scss";

const WrapStatisticAndReviews = ({ productInfo, crutchForStars }) => {
  return (
    <section className="statisticAndReviews">
      <div className="wrap_sm statisticAndReviews__wrap">
        <Statistic productInfo={productInfo} crutchForStars={crutchForStars} />
        <Reviews reviews={productInfo.reviews}/>
      </div>
    </section>
  );
};

export default WrapStatisticAndReviews;
