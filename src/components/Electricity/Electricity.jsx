import React from "react";
import TitleElectricity from "./TitleElectricity/TitleElectricity";
import QualityEnergy from "./QualityEnergy/QualityEnergy";
import { SectionElectricity, VerticalLine } from "./Electricity.styled";

const Electricity = () => {
  const variants = {
    hidden: { opacity: 0, y: 150 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.5,
      },
    },
  };

  return (
    <SectionElectricity
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <TitleElectricity />
      <VerticalLine></VerticalLine>
      <QualityEnergy />
    </SectionElectricity>
  );
};

export default Electricity;
