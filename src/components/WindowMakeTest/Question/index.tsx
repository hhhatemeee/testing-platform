import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnswer } from "../../../redux/reducers/tests";
import AddValue, { AddingElement } from "../../../subComponents/AddValue";
import { Ianswer } from "../../../types";
import Answer from "../Answer";

import styles from './style.module.scss';

interface IQuestion {
  name: string;
  id: string;
  position: number;
  answers: Ianswer[];
  testId: string;
}

const Question: React.FC<IQuestion> = ({ name, position, answers, id, testId }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isAddingMode, setAddingMode] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleIsShow = () => {
    setIsShow(!isShow);
    if (isAddingMode) {
      setAddingMode(false);
    }
  }

  const handleAddingMode = () => setAddingMode(!isAddingMode);

  const handleAddAnswer = (value: AddingElement) => {
    dispatch(addAnswer({ testId, questionId: id, name: value.name }))
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setAddingMode(false);
    }
  }

  return <li className={styles.container}>
    <div className={styles.header}>
      <p className={styles.name}>{position + 1}. {name}</p>
      <p className={styles['add-btn']} onClick={handleIsShow}>{isShow ? 'Скрыть ответы' : 'Открыть ответы'}</p>
    </div>
    {
      isShow && <>
        <ul className={styles['answer-list']}>
          {answers.map((ans: Ianswer) => <Answer key={ans.id} name={ans.name} id={ans.id} />)}
        </ul>
        {
          isAddingMode
            ? <AddValue handleAdd={handleAddAnswer} heightInput='30px' isAdding={true} placeholder="Добавить вариант ответа" onKeyDown={onKeyDown} />
            : <p className={styles['add-answer']} onClick={handleAddingMode}>Добавить ответ</p>
        }

      </>
    }
  </li>;
};

export default Question;
