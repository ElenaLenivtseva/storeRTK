import React from "react";
import Button from "../../../Common/Button/Button";
import "./AccountContent.scss";
import { openArrowIcon, visaCardIcon } from "../../../icons";

let type = "orders";

const AccountContent = () => {
  return (
    <>
      {type === "personalInfo" ? (
        <div className="accountContent">
          <h3 className="accountContent__title">My Personal Information</h3>
          <div className="accountContent__block">
            <div className="accountContent__wrap">
              <div className="accountContent__info">
                <p className="accountContent__subtitle">First Name</p>
                <p className="accountContent__text">Chloe</p>
              </div>
              <div className="accountContent__info">
                <p className="accountContent__subtitle">Birthday</p>
                <p className="accountContent__text">09/06/1995</p>
              </div>
              <div className="accountContent__info">
                <p className="accountContent__subtitle">Phone Number</p>
                <p className="accountContent__text">+1 212-531-3248</p>
              </div>
            </div>
            <div className="accountContent__wrap">
              <div className="accountContent__info">
                <p className="accountContent__subtitle">Last Name</p>
                <p className="accountContent__text">+1 212-531-3248</p>
              </div>
              <div className="accountContent__info">
                <p className="accountContent__subtitle">Gender</p>
                <p className="accountContent__text">Woman</p>
              </div>
            </div>
            <div className="accountContent__wrap">
              <Button className="accountContent__button">Edit</Button>
            </div>
          </div>
          <div className="accountContent__block">
            <div className="accountContent__wrap">
              <p className="accountContent__subtitle">Email</p>
              <p className="accountContent__text">chloenicker@gmail.ru</p>
            </div>
            <div className="accountContent__wrap"></div>
            <div className="accountContent__wrap">
              <Button className="accountContent__button">Edit</Button>
            </div>
          </div>
          <div className="accountContent__block">
            <div className="accountContent__wrap">
              <p className="accountContent__subtitle">Password</p>
              <p className="accountContent__text">******</p>
            </div>
            <div className="accountContent__wrap"></div>
            <div className="accountContent__wrap">
              <Button className="accountContent__button">Edit</Button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {type === "address" ? (
        <div className="accountContent">
          <h3 className="accountContent__title">My Shipping Addresses</h3>
          <div className="accountContent__block">
            <div className="accountContent__wrap">
              <div className="accountContent__info">
                <p className="accountContent__subtitle">Address</p>
                <p className="accountContent__text">80 Greene St.</p>
              </div>
              <div className="accountContent__info">
                <p className="accountContent__subtitle">Country</p>
                <p className="accountContent__text">US</p>
              </div>
              <div className="accountContent__info">
                <p className="accountContent__subtitle">City</p>
                <p className="accountContent__text">New York</p>
              </div>
            </div>
            <div className="accountContent__wrap">
              <div className="accountContent__info">
                <p className="accountContent__subtitle">State/Province</p>
                <p className="accountContent__text">NY</p>
              </div>
              <div className="accountContent__info">
                <p className="accountContent__subtitle">Postal Code</p>
                <p className="accountContent__text">10012</p>
              </div>
            </div>
            <div className="accountContent__wrap">
              <Button className="accountContent__button">Edit</Button>
            </div>
          </div>
          <div className="accountContent__block">
            <div className="accountContent__wrap">
              <Button className="button_totalBlack">Add New Address</Button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {type === "wallet" ? (
        <div className="accountContent">
          <h3 className="accountContent__title">My Wallet</h3>
          <div className="accountContent__block">
            <div className="accountContent__wrap">
              <div className="accountContent__info">
                <p className="accountContent__subtitle">Card Number</p>
                <div className="accountContent__withSvg">
                  {visaCardIcon}
                  <p className="accountContent__text">5396 **** **** ****</p>
                </div>
              </div>
              <div className="accountContent__info">
                <p className="accountContent__subtitle">Expiration Date</p>
                <p className="accountContent__text">**/**</p>
              </div>
            </div>
            <div className="accountContent__wrap">
              <div className="accountContent__info">
                <p className="accountContent__subtitle">Cardholder Name</p>
                <p className="accountContent__text">Chloe Nicker</p>
              </div>
              <div className="accountContent__info">
                <p className="accountContent__subtitle">CV</p>
                <p className="accountContent__text">***</p>
              </div>
            </div>
            <div className="accountContent__wrap">
              <Button className="accountContent__button">Edit</Button>
            </div>
          </div>
          <div className="accountContent__block">
            <div className="accountContent__wrap">
              <Button className="button_totalBlack">Add New Card</Button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {type === "orders" ? (
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
                alt="The product's photo"
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
                alt="The product's photo"
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
      ) : (
        <></>
      )}
    </>
  );
};

export default AccountContent;
