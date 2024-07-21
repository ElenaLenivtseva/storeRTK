import React from "react";
import Pattern from "../Common/Pattern";

const title = "My Personal Information";
const info = [
  [
    {
      type: "full",
      content: [
        {
          subtitle: "First Name",
          text: "Chloe",
        },
        {
          subtitle: "Birthday",
          text: "09/06/1995",
        },
        {
          subtitle: "Phone Number",
          text: "+1 212-531-3248",
        },
      ],
    },
    {
      type: "full",
      content: [
        {
          subtitle: "Last Name",
          text: "Nicker",
        },
        {
          subtitle: "Gender",
          text: "Woman",
        },
      ],
    },
    { type: "button", buttonContent: "Edit" },
  ],
  [
    {
      type: "full",
      content: [
        {
          subtitle: "Email",
          text: "chloenicker@gmail.ru",
        },
      ],
    },
    { type: "void", buttonContent: "" },
    { type: "button", buttonContent: "Edit" },
  ],
  [
    {
      type: "full",
      content: [
        {
          subtitle: "Password",
          text: "******",
        },
      ],
    },
    { type: "void", buttonContent: "" },
    { type: "button", buttonContent: "Edit" },
  ],
];

const PersonalInfo = () => {
  return <Pattern title={title} info={info} />;
};

export default PersonalInfo;
