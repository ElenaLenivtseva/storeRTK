import React from "react";
import Button from "../../../../Common/Button/Button";
import InfoItem from "./InfoItem";

// шпаргалка
// const type = 'void/button/buttonBlack/full'
// const info = { type: "button", buttoncontent: "Edit" };
// const info2 = { type: "void", buttoncontent: "" };
// const info3 = {
//   type: "full",
//   content: [
//     {
//       subtitle: "State/Province",
//       text: "NY",
//       additionalClass: "",
//     },
//     {
//       subtitle: "Postal Code",
//       text: "10012",
//       additionalClass: "",
//     },
//   ],
// };

const WrapItem = ({ info }) => {
  console.log(info.content);
  return (
    <>
      {info.type === "void" ? <div className="accountContent__wrap"></div> : ""}
      {info.type === "button" ? (
        <div className="accountContent__wrap">
          <Button className="accountContent__button">
            {info.buttonContent}
          </Button>
        </div>
      ) : (
        ""
      )}
      {info.type === "buttonBlack" ? (
        <div className="accountContent__wrap">
          <Button className="button_totalBlack">{info.buttonContent}</Button>
        </div>
      ) : (
        ""
      )}
      {info.type === "full" ? (
        <div className="accountContent__wrap">
          {info.content.map((item, index) => {
            return (
              <InfoItem
                key={index}
                subtitle={item.subtitle}
                text={item.text}
                additionalClass={item.additionalClass}
              />
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default WrapItem;
