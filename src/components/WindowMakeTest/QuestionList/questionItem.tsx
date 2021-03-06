import React from "react";

import styles from './style.module.scss';
type QuestionProps = {
  name: string;
  id: number;
}

const QuestionItem: React.FC<QuestionProps> = ({ name, id }) => {
  return <li className={styles['questions__item']}>
    {name}
  </li>;
};

export default QuestionItem;
