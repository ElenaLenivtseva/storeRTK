import React from "react";
import Button from "../../../Common/Button/Button";
import { openArrowIcon } from "../../../icons";

const Orders = () => {
  return (
    <div className="accountContent">
      <div className="accountContent__top">
        <h3 className="accountContent__title">My Orders</h3>
        <div className="accountContent__filter">
          <p className="accountContent__filterText">All</p>
          {openArrowIcon}
        </div>
      </div>

      <div className="accountContent__block">
        <div className="accountContent__wrap accountContent__wrapImg">
          <img
            className="accountContent__img"
            src="https://cdn.shopify.com/s/files/1/0417/4987/2806/files/PF24_SANDALS_CREAM_FLOWER_RED_01_37e4370d-d3f7-4dbb-91c8-1897fe2ef83e.jpg?v=1713975584&width=768&crop=center"
            alt="Title of Product"
          />
        </div>
        <div className="accountContent__wrap">
          <div className="accountContent__info accountContent__infoStretch">
            <p className="accountContent__subtitle accountContent__subtitleWithoutMargin">
              Order Date:
            </p>
            <p className="accountContent__text">Aug 11, 2023</p>
          </div>
          <div className="accountContent__info accountContent__infoStretch">
            <p className="accountContent__subtitle accountContent__subtitleWithoutMargin">
              Status
            </p>
            <p className="accountContent__status accountContent__statusRecieved">
              Recieved
            </p>
          </div>
          <div className="accountContent__info accountContent__infoStretch">
            <p className="accountContent__subtitle accountContent__subtitleWithoutMargin">
              Amount
            </p>
            <p className="accountContent__text">1 item</p>
          </div>
          <div className="accountContent__info accountContent__infoStretch">
            <p className="accountContent__subtitle accountContent__subtitleWithoutMargin">
              Cost
            </p>
            <p className="accountContent__text">$420</p>
          </div>
        </div>
        <div className="accountContent__wrap">
          <Button className="accountContent__button">View Product</Button>
        </div>
      </div>
      <div className="accountContent__block">
        <div className="accountContent__wrap accountContent__wrapImg">
          <img
            className="accountContent__img"
            src="https://cdn.shopify.com/s/files/1/0417/4987/2806/files/SS24_SWIMSUIT_01_BLACK_01.jpg?v=1706569090&width=768&crop=center"
            alt="Title of Product"
          />
        </div>
        <div className="accountContent__wrap">
          <div className="accountContent__info accountContent__infoStretch">
            <p className="accountContent__subtitle accountContent__subtitleWithoutMargin">
              Order Date:
            </p>
            <p className="accountContent__text">July 11, 2024</p>
          </div>
          <div className="accountContent__info accountContent__infoStretch">
            <p className="accountContent__subtitle accountContent__subtitleWithoutMargin">
              Status
            </p>
            <p className="accountContent__status accountContent__statusProgress">
              In progress
            </p>
          </div>
          <div className="accountContent__info accountContent__infoStretch">
            <p className="accountContent__subtitle accountContent__subtitleWithoutMargin">
              Amount
            </p>
            <p className="accountContent__text">2 items</p>
          </div>
          <div className="accountContent__info accountContent__infoStretch">
            <p className="accountContent__subtitle accountContent__subtitleWithoutMargin">
              Cost
            </p>
            <p className="accountContent__text">$820</p>
          </div>
        </div>
        <div className="accountContent__wrap">
          <Button className="accountContent__button">View Product</Button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
