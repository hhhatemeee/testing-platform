import React from "react";
import { useSelector } from "react-redux";
import Test, { ITestProps } from ".";
import { IQuestion } from "..";
import { IStore } from "../../../redux";

const TestContainer: React.FC<ITestProps> = ({ id, name, questionsTest }) => {
  const questions = useSelector((state: IStore) => state.questions);
  const localTestIds: number[] = questionsTest.map((q:IQuestion) => q.id);
  const filteredQuestions = questions.filter((q:IQuestion) => !localTestIds.includes(q.id)) 
  
  return <Test
    questionsAll={filteredQuestions}
    questionsTest={questionsTest}
    id={id}
    name={name}
  />;
};

export default TestContainer;
