import React from "react";
import Button from "../../../Common/Button/Button";
import "./TopCollection.scss";

const TopCollection = () => {
  return (
    <section className="topCollection">
      <div className="topCollection__imgWrap">
        <img
          className="topCollection__bg"
          src="https://magda-butrym.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fkxhvkk17lhp1%2F6snblkSvAokvM1I3kuXg5Q%2F719807facbad965f0fb8cb20c2cd6663%2Fbridal__1_.jpg?ixlib=js-2.3.2&w=1400&h=false&fit=crop&auto=format&q=80&s=2cc574e30a6be1b492d3f5e1d4e9b01e"
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
