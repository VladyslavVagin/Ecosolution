// @ts-nocheck
import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import { questionsAnswers } from "../../../data/questionsFAQ";

const ListQuestions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(
    questionsAnswers[0].id
  );

  const handleSelect = (id) => {
    setSelectedQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {questionsAnswers.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          isSelected={item.id === selectedQuestion}
          onSelect={() => handleSelect(item.id)}
        />
      ))}
    </div>
  );
};

export default ListQuestions;
