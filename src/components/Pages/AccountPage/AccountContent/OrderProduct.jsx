import React from 'react'
import Button from "../../../Common/Button/Button";

const OrderProduct = ({info}) => {
  return (
    <div className="accountContent__block">
        <div className="accountContent__wrap accountContent__wrapImg">
          <img
            className="accountContent__img"
            src={info.img}
            alt={info.title}
          />
        </div>
        <div className="accountContent__wrap">
          <div className="accountContent__info accountContent__infoStretch">
            <p className="accountContent__subtitle accountContent__subtitleWithoutMargin">
              Order Date:
            </p>
            <p className="accountContent__text">{info.date}</p>
          </div>
          <div className="accountContent__info accountContent__infoStretch">
            <p className="accountContent__subtitle accountContent__subtitleWithoutMargin">
              Status
            </p>
            <p className={`accountContent__status accountContent__status${info.status}`}>
              {info.status}
            </p>
          </div>
          <div className="accountContent__info accountContent__infoStretch">
            <p className="accountContent__subtitle accountContent__subtitleWithoutMargin">
              Amount
            </p>
            <p className="accountContent__text">{info.amount} {info.amount>1?'item':'items'}</p>
          </div>
          <div className="accountContent__info accountContent__infoStretch">
            <p className="accountContent__subtitle accountContent__subtitleWithoutMargin">
              Cost
            </p>
            <p className="accountContent__text">${info.price*info.amount}</p>
          </div>
        </div>
        <div className="accountContent__wrap">
          <Button className="accountContent__button">View Product</Button>
        </div>
      </div>
  )
}

export default OrderProduct
