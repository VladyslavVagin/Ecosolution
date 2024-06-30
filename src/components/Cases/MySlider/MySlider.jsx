// @ts-nocheck
import React, { useState } from "react";
import Slider from "react-slick";
import { sliderCards } from '../../../data/sliderCard';
import CardSlide from "../CardSlide/CardSlide";
import CurrentShowSlide from "./CurrentShowSlide/CurrentShowSlide";
import ArrowPrev from "./ArrowPrev/ArrowPrev";
import ArrowNext from "./ArrowNext/ArrowNext";
import { SliderContainer } from "./MySlider.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipeToSlide: true,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    afterChange: (current) => setCurrentSlide(current + 1),
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {sliderCards.map((card) => (
          <CardSlide key={card.id} card={card} />
        ))}
      </Slider>
      <CurrentShowSlide currentSlide={currentSlide} />
    </SliderContainer>
  );
};

export default MySlider;
