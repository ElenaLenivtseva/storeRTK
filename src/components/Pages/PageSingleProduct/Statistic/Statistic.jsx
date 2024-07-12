import React from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import "./Statistic.scss";

const starTitles = ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"];

const Statistic = ({estimates}) => {
  return (
    <div className="statistic">
      <h6 className="statistic__title"></h6>
      <div className="statistic__top"></div>
      <div className="statistic__content">
        <div className="statistic__starsWrap">
          {starTitles.map((title, index) => {
            return (
              <p className="statistic__text" key={index}>
                {title}
              </p>
            );
          })}
        </div>
        <div className="statistic__progressWrap">
          <ProgressBar percentage={estimates[0]}/>
          <ProgressBar percentage={estimates[1]}/>
          <ProgressBar percentage={estimates[2]}/>
          <ProgressBar percentage={estimates[3]}/>
          <ProgressBar percentage={estimates[4]}/>
        </div>
        <div className="statistic__percentageWrap">
         <p className="statistic__percentage">{estimates[0]}%</p>
         <p className="statistic__percentage">{estimates[1]}%</p>
         <p className="statistic__percentage">{estimates[2]}%</p>
         <p className="statistic__percentage">{estimates[3]}%</p>
         <p className="statistic__percentage">{estimates[4]}%</p>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
