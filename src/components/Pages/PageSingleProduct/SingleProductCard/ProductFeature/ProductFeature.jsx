import React from "react";

const ProductFeature = ({ featureArray, title }) => {
  const fullClassName=`singleProductCard__${title}`

  return (
    <>
      <div className={`singleProductCard__feature ${fullClassName}`}>
        {featureArray.map((type, index) => {
          return (
            <p className="singleProductCard__type" key={index}>
              {type}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default ProductFeature;
