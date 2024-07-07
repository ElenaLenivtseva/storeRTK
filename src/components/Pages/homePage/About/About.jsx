import React from "react";
import Button from '../../../Common/Button/Button'
import "./About.scss";

const About = () => {
  return (
    <section className="about">
        <div className="about__imgWrap">
          <img
            className="about__img"
            src="https://img.lovepik.com/element/40247/1308.png_1200.png"
            alt="A woman"
          />
        </div>
        <div className="about__info">
          <h3 className="subtitle about__subtitle">AGAINST Concept</h3>
          <p className="about__descr">
            We are against fashion. Because it doesn't help you highlight your
            beauty. It only makes you dependent on public opinion and forces you
            to shell out a large sum of money for something that is completely
            unsuitable for you. We invite you to choose a wardrobe based on your
            uniqueness. We make style!
          </p>
          <Button className='button_black button_sm'>Explore Our World</Button>
        </div>
    </section>
  );
};

export default About;
