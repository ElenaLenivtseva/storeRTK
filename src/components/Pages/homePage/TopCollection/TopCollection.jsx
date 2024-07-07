import React from "react";
import Button from "../../../Common/Button/Button";
import "./TopCollection.scss";

const TopCollection = () => {
  return (
    <section className="topCollection">
      <div className="topCollection__imgWrap">
        <img
          className="topCollection__bg"
          src="https://images.unsplash.com/photo-1568251188392-ae32f898cb3b?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="a new collection's product"
        />
      </div>
      <div className="topCollection__info">
        <h3 className="title topCollection__title">Fall Spring 24</h3>
        <Button>Discover New Collection</Button>
      </div>
    </section>
  );
};

export default TopCollection;
