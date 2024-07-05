import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ info }) => {
  return (
    <div className="productCard" key={info.id}>
      <svg
      className='productCard__like'
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
