import React from "react";
import Button from "../../../../Common/Button/Button";
import LinkComp from "../../../../Common/LinkComp/LinkComp";

const Option = ({ colors, sizes }) => {
  return (
    <>
      {colors ? (
        <div className="singleProductCard__option">
          <div className="singleProductCard__optionTop">
            <p className="singleProductCard__optionTitle">Color</p>
            <p className="singleProductCard__optionSelected">[Noir]</p>
          </div>
          <div className="singleProductCard__optionWrap singleProductCard__colorsWrap">
            {colors.map((color, index) => {
              return (
                <div className="singleProductCard__color" key={index} style={{ backgroundColor: color.colorCode}}></div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="singleProductCard__option">
          <div className="singleProductCard__optionTop">
            <p className="singleProductCard__optionTitle">Size</p>
            <p className="singleProductCard__optionSelected">[M]</p>
          </div>
          <div className="singleProductCard__optionWrap singleProductCard__sizeWrap">
            {sizes.map((size, index) => {
              return (
                <Button className="button_withoutOutline" key={index}>
                  {size}
                </Button>
              );
            })}
          </div>
          <LinkComp bold>What's my size?</LinkComp>
        </div>
      )}
    </>
  );
};

export default Option;
