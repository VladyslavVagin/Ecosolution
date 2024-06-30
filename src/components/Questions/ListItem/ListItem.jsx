import React from "react";
import sprite from "../../../images/icons.svg";
import { AnswerBox, ItemContainer, QuestionBox } from "./ListItem.styled";

const ListItem = ({ item, isSelected, onSelect }) => {
  const { question, answer } = item;

  return (
    <ItemContainer onClick={onSelect}>
      <QuestionBox>
        <span>
          <svg width={16} height={16}>
            <use
              xlinkHref={
                isSelected ? `${sprite}#icon-minus` : `${sprite}#icon-add`
              }
            ></use>
          </svg>
        </span>
        <p>{question}</p>
      </QuestionBox>
      {isSelected && <AnswerBox><p>{answer}</p></AnswerBox>}
    </ItemContainer>
  );
};

export default ListItem;
