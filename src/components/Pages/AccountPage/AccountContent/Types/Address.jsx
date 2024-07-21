import React from "react";
import WrapItem from "../Common/WrapItem";

const Address = () => {
  return (
    <div className="accountContent">
      <h3 className="accountContent__title">My Shipping Addresses</h3>
      <div className="accountContent__block">
        <WrapItem
          info={{
            type: "full",
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
          }}
        />
        <WrapItem
          info={{
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
          }}
        />

        <WrapItem info={{ type: "button", buttonContent: "Edit" }} />
      </div>
      <div className="accountContent__block">
        <WrapItem
          info={{ type: "buttonBlack", buttonContent: "Add New Address" }}
        />
      </div>
    </div>
  );
};

export default Address;
