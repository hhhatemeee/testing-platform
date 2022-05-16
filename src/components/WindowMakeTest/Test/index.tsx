import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "../../../redux/reducers/tests";
import AddValue, { AddingElement } from "../../../subComponents/AddValue";
import { IQuestion, ITest } from "../../../types";
import Question from "../Question";

import styles from './style.module.scss';

const Test: React.FC<ITest> = ({ name, id, questions }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isAddingMode, setAddingMode] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleIsShow = () => setIsShow(!isShow);

  const handleAddingMode = () => setAddingMode(!isAddingMode);

  const handleAddQuestion = (value: AddingElement) => {
    dispatch(addQuestion({ testId: id, name: value.name }))
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setAddingMode(false);
    }
  }

  return <section className={styles.container}>
    <div className={styles.header}>
      <h4 className={styles.name}>{name}</h4>
      <h3 className={styles['add-btn']} onClick={handleIsShow}>{isShow ? 'Скрыть вопросы' : 'Открыть вопросы'}</h3>
    </div>
    {
      isShow && <>
        <ul className={styles['question-list']}>
          {questions.map((ques: IQuestion, index) => <Question
            position={index}
            key={ques.id}
            name={ques.name}
            id={ques.id}
            answers={ques.answers}
            testId={id}
          />)}
        </ul>
        {
          isAddingMode
            ? <AddValue
              heightInput="30px"
              handleAdd={handleAddQuestion}
              placeholder='Введите название вопроса'
              isAdding={true}
              onKeyDown={onKeyDown}
            />
            : <p className={styles['add-question']} onClick={handleAddingMode}>Добавить вопрос</p>
        }
      </>
    }
  </section>;
};

export default Test;
