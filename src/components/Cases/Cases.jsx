import React from "react";
import TitleCases from "./TitleCases/TitleCases";
import MySlider from "./MySlider/MySlider";
import { Section } from "./Cases.styled";

const Cases = () => {
  return (
    <Section>
      <div>
        <TitleCases />
        <MySlider />
      </div>
    </Section>
  );
};

export default Cases;
