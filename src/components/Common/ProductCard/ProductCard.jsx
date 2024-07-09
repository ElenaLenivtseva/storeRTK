import React from "react";
import "./ProductCard.scss";
import { heartIcon } from "../../icons";

const ProductCard = ({ info }) => {
  return (
    <div className="productCard" key={info.id}>
      {heartIcon}
      <div className="productCard__imgWrap">
        <img className="productCard__img" src={info.img} alt={info.title} />
      </div>
      <div className="productCard__info">
        <p className="productCard__title">{info.title}</p>
        <div className="productCard__colorsWrap">
          {info.colors.length > 0 ? (
            <>
              <div
                className="productCard__colorIcon"
                style={{ backgroundColor: info.colors[0] }}
              ></div>
              <p>+{info.colors.length - 1}</p>
            </>
          ) : (
            ""
          )}
        </div>
        <p className="productCard__price">${info.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
