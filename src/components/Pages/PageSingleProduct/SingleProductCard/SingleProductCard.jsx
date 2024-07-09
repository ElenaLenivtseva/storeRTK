import React from "react";
import Button from "../../../Common/Button/Button";
import LinkCamp from '../../../Common/LinkComp/LinkComp'
import "./SingleProductCard.scss";

const SingleProductCard = () => {
  return (
    <section className="singleProductCard">
      <div className="wrap">
        <div className="singleProductCard__slider"></div>
        <div className="singleProductCard__info">
          <div className="singleProductCard__top">
            <div className="singleProductCard__header">
              <h3 className="singleProductCard__subtitle">Noir V Neck Wrap Blouse</h3>
              <img className="singleProductCard__icon" src="" alt="" />
            </div>
            <div className="singleProductCard__rating">
              <p className="singleProductCard__amountOfReviews">
                [118 reviews]
              </p>
            </div>
            <p className="singleProductCard__price">$420</p>
          </div>
          <div className="singleProductCard__bottom">
            <div className="singleProductCard__option">
              <div className="singleProductCard__optionTop">
                <p className="singleProductCard__optionTitle">Color</p>
                <p className="singleProductCard__optionSelected">[Noir]</p>
              </div>
              <div className="singleProductCard__optionWrap singleProductCard__colorsWrap">
                <div className="singleProductCard__color"></div>
              </div>
            </div>
            <div className="singleProductCard__option">
              <div className="singleProductCard__optionTop">
                <p className="singleProductCard__optionTitle">Size</p>
                <p className="singleProductCard__optionSelected">[M]</p>
              </div>
              <div className="singleProductCard__optionWrap singleProductCard__sizeWrap">
                <Button className="button_withoutOutline">S</Button>
              </div>
              <LinkCamp>What's my size?</LinkCamp>
            </div>
            <div className="singleProductCard__features">
                <p className="singleProductCard__material">Cotton</p>
                <p className="singleProductCard__bodyType">Apple Body Type</p>
                <p className="singleProductCard__appearanceType">Dramatic</p>
                <p className="singleProductCard__colorType">Cold Winter</p>
            </div>
            <div className="singleProductCard__amount">
                +<input type="number"/>-
            </div>
            <p className="singleProductCard__note">Model|Ella is 1.78m tall and wears a size S</p>
          </div>
          <Button className="button_black">S</Button>
        </div>
      </div>
    </section>
  );
};

export default SingleProductCard;
