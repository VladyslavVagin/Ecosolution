import React from 'react'
import TitleElectricity from './TitleElectricity/TitleElectricity';
import QualityEnergy from './QualityEnergy/QualityEnergy';
import { VerticalLine } from "./Electricity.styled";

const Electricity = () => {
  return (
    <section>
        <TitleElectricity />
        <VerticalLine></VerticalLine>
        <QualityEnergy />
    </section>
  )
}

export default Electricity