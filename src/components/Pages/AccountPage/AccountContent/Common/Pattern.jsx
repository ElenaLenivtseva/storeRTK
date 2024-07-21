import React from "react";
import BlockItem from "./BlockItem";


const Pattern = ({ title, info }) => {
  return (
    <div className="accountContent">
      <h3 className="accountContent__title">{title}</h3>
      {info.map((item,index)=>{
       return <BlockItem block={item} key={index}/>   
      })}
    </div>
  );
};

export default Pattern;
