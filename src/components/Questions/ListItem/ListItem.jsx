import React from "react";
import sprite from "../../../images/icons.svg";
import { AnswerBox, ItemContainer, QuestionBox } from "./ListItem.styled";

const ListItem = ({ item, isSelected, onSelect }) => {
  const { question, answer, id } = item;

  return (
    <ItemContainer onClick={onSelect}>
      <QuestionBox id={id.toString()}>
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
