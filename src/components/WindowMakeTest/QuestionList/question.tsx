import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnswer } from "../../../redux/reducers/tests";
import AddValue, { AddingElement } from "../../../subComponents/AddValue";
import { Ianswer } from "../../../types";
import Answer from "../Answer";

import styles from './style.module.scss';

interface IQuestionProps {
  name: string;
  id: number;
}

const Question: React.FC<IQuestionProps> = ({ name, id }) => {
  return <li className={styles['questions__item']}>
    {name}
  </li>;
};

export default Question;
