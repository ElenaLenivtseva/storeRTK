import React from "react";
import WrapItem from "./WrapItem";


const BlockItem = ({block}) => {
  return <div className="accountContent__block">
    {block.map((item,index)=>{
        return(
            <WrapItem info={item} key={index}/>
        )
    })}
  </div>;
};

export default BlockItem;
