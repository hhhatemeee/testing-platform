import React, { useState } from "react";
import { IQuestion } from "../../../types";
import Question from "./question";

import styles from './style.module.scss';

interface IQuestionListProps {
  questions: IQuestion[];
}

const QuestionList: React.FC<IQuestionListProps> = ({ questions }) => {
  
  return <ul className={styles.questions}>
    {
      questions.map((q: IQuestion) => <Question key={q.id} name={q.name} id={q.id}/>)
    }
  </ul>;
};

export default QuestionList;
