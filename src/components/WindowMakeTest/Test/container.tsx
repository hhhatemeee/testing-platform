import React from "react";
import { useSelector } from "react-redux";

import Test, { TestProps } from ".";
import { Question } from "../../../shared/types";
import { State } from "../../../redux";

const TestContainer: React.FC<TestProps> = ({ id, name, questionsTest }) => {
  const questions = useSelector((state: State) => state.questions);
  const localTestIds: number[] = questionsTest.map((q:Question) => q.id);
  const filteredQuestions = questions.filter((q:Question) => !localTestIds.includes(q.id)) 
  
  return <Test
    questionsAll={filteredQuestions}
    questionsTest={questionsTest}
    id={id}
    name={name}
  />;
};

export default TestContainer;
