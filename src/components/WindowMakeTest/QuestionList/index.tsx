import React from "react";

import { IQuestion } from "../../../types";
import Question from "./question";

import styles from './style.module.scss';

type QuestionListProps = {
  questions: IQuestion[];
}

const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  
  return <ul className={styles.questions}>
    {
      questions.map((q: IQuestion) => <Question key={q.id} name={q.name} id={q.id}/>)
    }
  </ul>;
};

export default QuestionList;
