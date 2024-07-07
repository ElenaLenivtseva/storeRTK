import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
        <div className="about__imgWrap">
          <img
            className="about__img"
            src="https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="A woman"
          />
        </div>
        <div className="about__info">
          <h3 className="subtitle about__subtitle">AGAINST Concept</h3>
          <p className="about__descp">
            We are against fashion. Because it doesn't help you highlight your
            beauty. It only makes you dependent on public opinion and forces you
            to shell out a large sum of money for something that is completely
            unsuitable for you. We invite you to choose a wardrobe based on your
            uniqueness. We make style!
          </p>
        </div>
    </section>
  );
};

export default About;
