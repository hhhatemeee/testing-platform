import React from "react";

import { Answer } from "../../../shared/types";
import AnswerItem from "../AnswerItem";

import styles from './style.module.scss';

type AnswerListProps = {
  answers: Answer[];
  onClick: (id:number) => void;
  onDelete: (id:number) => void;
}

const AnswerList: React.FC<AnswerListProps> = ({ answers,onClick,onDelete }) => {
  return <ul className={styles["answer-list"]}>
    {answers.map((answer) => <AnswerItem
      key={answer.id}
      id={answer.id}
      name={answer.name}
      isTrue={answer.isTrue}
      onClick={onClick}
      onDelete={onDelete}
    />)}
  </ul>;
};

export default AnswerList;
