import React from "react";
import Pattern from "../Common/Pattern";

const title = "My Addresses";
const info = [
  // BLOCK
  [
    // WRAP
    {
      type: "full",
      // CONTENTS = INFOITEMS
      content: [
        {
          subtitle: "Address",
          text: "80 Greene St.",
        },
        {
          subtitle: "Country",
          text: "US",
        },
        {
          subtitle: "City",
          text: "New York",
        },
      ],
    },
    {
      type: "full",
      content: [
        {
          subtitle: "State/Province",
          text: "NY",
        },
        {
          subtitle: "Postal Code",
          text: "10012",
        },
      ],
    },
    { type: "button", buttonContent: "Edit" },
  ],
  // BLOCK
  [{ type: "buttonBlack", buttonContent: "Add New Address" }],
];

const Address = () => {
  return <Pattern title={title} info={info} />;
};

export default Address;
