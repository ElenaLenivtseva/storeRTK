import React from "react";

const ProductFeature = ({ featureArray, classPostfix }) => {
  const fullClassName=`singleProductCard__${classPostfix}`

  return (
    <div className="singleProductCard__feature">
      <div className={fullClassName}>
        {featureArray.map((type, index) => {
          return (
            <p className="singleProductCard__type" key={index}>
              {type}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFeature;
