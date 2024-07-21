import React from "react";

const typeAddress = {
  title: "TITLE",
  blocks: [
    {
      wraps: [
        {
          wrap: [
            { info: { subtitle: "", text: "" } },
            { info: { subtitle: "", text: "" } },
            { info: { subtitle: "", text: "" } },
          ],
        },
        {
          wrap: [
            { info: { subtitle: "", text: "" } },
            { info: { subtitle: "", text: "" } },
          ],
        },
        {
          wrap: [{ button: "Edit" }],
        },
      ],
    },
    {
      wraps: [
        {
          wrap: [{ button: "Add New Address" }],
        },
      ],
    },
  ],
};

const Pattern = () => {
  return (
    <div className="accountContent">
      <h3 className="accountContent__title">{type.title}</h3>
    </div>
  );
};

export default Pattern;
