import React from "react";

import { Question } from "../../../shared/types";
import QuestionItem from "./questionItem";

import styles from './style.module.scss';

type QuestionListProps = {
  questions: Question[];
}

const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  
  return <ul className={styles.questions}>
    {
      questions.map((q: Question) => <QuestionItem key={q.id} name={q.name} id={q.id}/>)
    }
  </ul>;
};

export default QuestionList;
