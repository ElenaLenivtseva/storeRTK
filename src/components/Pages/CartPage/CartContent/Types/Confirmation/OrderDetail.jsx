import React from "react";
import DetailBlock from "./DetailBlock";


const OrderDetail = ({ info }) => {
  const blocks = info.blocks;
  return (
    <div className="orderDetail">
      <h3 className="subtitle subtitle_sm confirmation__title">{info.title}</h3>
      {blocks.map((item, index) => {
        return <DetailBlock info={item} key={index} />;
      })}
    </div>
  );
};

export default OrderDetail;
