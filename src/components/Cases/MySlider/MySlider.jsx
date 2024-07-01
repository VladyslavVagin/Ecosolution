// @ts-nocheck
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import { sliderCards } from "../../../data/sliderCard";
import CardSlide from "../CardSlide/CardSlide";
import CurrentShowSlide from "./CurrentShowSlide/CurrentShowSlide";
import ArrowPrev from "./ArrowPrev/ArrowPrev";
import ArrowNext from "./ArrowNext/ArrowNext";
import { SliderContainer, StyledSlide } from "./MySlider.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  const [currentSlide, setCurrentSlide] = useState(isTablet ? 2 : 1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isTablet ? 2 : 1,
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
          <StyledSlide key={card.id}>
            <CardSlide card={card} />
          </StyledSlide>
        ))}
      </Slider>
      <CurrentShowSlide currentSlide={currentSlide} />
    </SliderContainer>
  );
};

export default MySlider;
