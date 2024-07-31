import React, { useState } from "react";
import Button from "../../../Common/Button/Button";
import Option from "./Option/Option";
import ProductFeature from "./ProductFeature/ProductFeature";
import { starIcon } from "../../../icons";
import "./SingleProductCard.scss";

const SingleProductCard = ({ productInfo, crutchForStars }) => {
  const [amount, setAmount] = useState(1);
  const max = 10;
  const min = 1;
 
  return (
    <section className="singleProductCard">
      <div className="wrap singleProductCard__wrap">
        <div className="singleProductCard__slider">
          {productInfo.img.map((item, index) => {
            return (
              <img
                className="singleProductCard__img"
                src={item}
                alt={index}
                key={index}
              />
            );
          })}
        </div>
        <div className="singleProductCard__info">
          <div className="singleProductCard__top">
            <div className="singleProductCard__header">
              <h3 className="subtitle-smallest singleProductCard__subtitle">
                {productInfo.title}
              </h3>
              <svg
                className="singleProductCard__like"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
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
            <p className="singleProductCard__price">${productInfo.price}</p>
          </div>

          <div className="singleProductCard__bottom">
            <Option colors={productInfo.colors} />
            <Option sizes={productInfo.sizes} />

            <div className="singleProductCard__features">
              <ProductFeature
                featureArray={productInfo.materials}
                title="materials"
              />
              <ProductFeature
                featureArray={productInfo.bodyTypes}
                title="bodyTypes"
              />
              <ProductFeature
                featureArray={productInfo.appearanceTypes}
                title="appearanceTypes"
              />
              <ProductFeature
                featureArray={productInfo.colorTypes}
                title="colorTypes"
              />
            </div>
          </div>

          <div className="singleProductCard__amount">
            <button
              className="singleProductCard__amountButton singleProductCard__minus"
              onClick={() => {
                if (amount > min) {
                  setAmount(amount - 1);
                }
              }}
            >
              -
            </button>
            <div className="singleProductCard__amountInput">{amount}</div>
            <button
              className="singleProductCard__amountButton singleProductCard__plus"
              onClick={() => {
                if (amount < max) {
                  setAmount(amount + 1);
                }
              }}
            >
              +
            </button>
          </div>

          <p className="singleProductCard__note">{productInfo.note}</p>
          <Button className="button_totalBlack">Add to Cart</Button>
        </div>
      </div>
    </section>
  );
};

export default SingleProductCard;
