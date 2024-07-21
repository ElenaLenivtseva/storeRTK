import React from "react";
import Pattern from "../Common/Pattern";

const title = "My Wallet";
const info = [
  [
    {
      type: "full",
      content: [
        {
          subtitle: "Card Number",
          text: "5396 **** **** ****",
          additionalClass: "withSvg",
        },
        {
          subtitle: "Expiration Date",
          text: "10012",
        },
      ],
    },
    {
      type: "full",
      content: [
        {
          subtitle: "Cardholder Name",
          text: "Chloe Nicker",
        },
        {
          subtitle: "CV",
          text: "***",
        },
      ],
    },
    { type: "button", buttonContent: "Edit" },
  ],
  [{ type: "buttonBlack", buttonContent: "Add New Card" }],
];

const Wallet = () => {
  return <Pattern title={title} info={info} />;
};

export default Wallet;
