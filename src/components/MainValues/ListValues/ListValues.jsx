// @ts-nocheck
import React from "react";
import { cards } from "../../../data/cardsValues";
import CardValue from "../CardValue/CardValue";
import { List } from "./ListValues.styled";

const ListValues = () => {
  return (
    <List>
      {cards.map((card) => (
        <CardValue card={card} key={card.id} />
      ))}
    </List>
  );
};

export default ListValues;
