import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import { questionsAnswers } from "../../../data/questionsFAQ";
import { List } from "./ListQuestions.styled";

const ListQuestions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(
    questionsAnswers[0].id
  );

  const handleSelect = (id) => {
    setSelectedQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <List>
      {questionsAnswers.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          isSelected={item.id === selectedQuestion}
          onSelect={() => handleSelect(item.id)}
        />
      ))}
    </List>
  );
};

export default ListQuestions;
