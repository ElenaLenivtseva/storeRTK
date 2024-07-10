import React from "react";
import Button from "../../../Common/Button/Button";
import LinkCamp from "../../../Common/LinkComp/LinkComp";
import Option from "./Option/Option";
import ProductFeature from "./ProductFeature/ProductFeature";
import "./SingleProductCard.scss";
import { heartIcon } from "../../../icons";

const productInfo = {
  id: 1,
  title: "Noir V Neck Wrap Blouse",
  img: [
    "https://img.ltwebstatic.com/images3_pi/2023/07/15/1689355312b07e31dacd0d30b161770bff88f0c3a6_thumbnail_720x_thumbnail_720x.jpg",
  ],
  rating: 5,
  amountOfReviews: 118,
  price: 420,
  materials: ["cotton"],
  sizes: ["S", "M", "L", "XL"],
  colors: [
    { colorText: "noir", colorCode: "#000", active: true },
    { colorText: "beige", colorCode: "#FFE4B5", active: false },
  ],
  bodyTypes: ["Apple", "Pear"],
  appearanceTypes: ["GR", "RG"],
  colorTypes: ["Cold Winter"],
  note: "Model|Ella is 1.78m tall and wears a size S",
};

const SingleProductCard = () => {
  return (
    <section className="singleProductCard">
      <div className="wrap">
        <div className="singleProductCard__slider">
          <img
            className="singleProductCard__slide"
            src={productInfo.img[0]}
            alt="dress"
          />
        </div>

        <div className="singleProductCard__info">
          <div className="singleProductCard__top">
            <div className="singleProductCard__header">
              <h3 className="singleProductCard__subtitle">
                {productInfo.title}
              </h3>
              {heartIcon}
            </div>
            <div className="singleProductCard__rating">
              <p className="singleProductCard__amountOfReviews">
                [{productInfo.amountOfReviews} reviews]
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
                classPostfix="materials"
              />
              <ProductFeature
                featureArray={productInfo.bodyTypes}
                classPostfix="bodyTypes"
              />
              <ProductFeature
                featureArray={productInfo.appearanceTypes}
                classPostfix="appearanceTypes"
              />
            </div>
            <ProductFeature
              featureArray={productInfo.colorTypes}
              classPostfix="colorTypes"
            />
          </div>

          <div className="singleProductCard__amount">
            +<input type="number" />-
          </div>

          <p className="singleProductCard__note">{productInfo.note}</p>
        </div>

        <Button className="button_black">Add to Cart</Button>
      </div>
    </section>
  );
};

export default SingleProductCard;
