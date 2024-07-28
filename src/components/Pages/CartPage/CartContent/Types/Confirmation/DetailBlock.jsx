import React from "react";

const DetailBlock = ({ info }) => {
  return (
    <div className="detailBlock">
      <h4 className="subtitle subtitle_smallest confirmation__detailsSub">
        {info.subtitle}
      </h4>
      <div className="confirmation__detailsWrap">
        {info.texts.map((item, index) => {
          return (
            <p className="confirmation__infoText" key={index}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default DetailBlock;
