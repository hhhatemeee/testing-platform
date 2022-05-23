import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SelectChangeEvent, IconButton } from "@mui/material";
import { AddCircle } from "@mui/icons-material";

import { addQuestionInLocal } from "../../../redux/reducers/localTest";
import QuestionList from "../QuestionList";
import { Question } from "../../../shared/types";
import CustomSelect from "../../../subComponents/Select";

import styles from './style.module.scss';
import Input from "../../../subComponents/Input";


export type TestProps = {
  id: number,
  name: string,
  questionsTest: Question[],
  questionsAll?: Question[],
}

const Test: React.FC<TestProps> = ({ name, id, questionsTest, questionsAll }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentValue, setCurrentValue] = useState< number | 'Добавить вопрос'>('Добавить вопрос');
  const dispatch = useDispatch();

  useEffect(() => {
    if (questionsAll) {
      setQuestions(questionsAll);
    }
  }, [questionsAll]);

  const selectChangeHandler = (e: SelectChangeEvent<number | 'question'>): void => {
    setCurrentValue(e.target.value);
  }

  const addQuestionHandler = () => {
    const question = questions.filter((q: Question) => q.id === currentValue)[0];
    
    dispatch(addQuestionInLocal({ question }));
    setCurrentValue('Добавить вопрос');
  }

  return <section className={styles.container}>
    <h4 className={styles.name}>{name}</h4>
    {questions
      && <section className={styles['add-question']}>
        <CustomSelect 
        onChange={selectChangeHandler}
        value={currentValue}
        autoWidth={false}
        sx={{ width: '530px', minWidth: '530px' }}
        title={"Добавить вопрос"}
        data={questions}
        />
        <IconButton sx={{ color: '#6f52ee' }} onClick={addQuestionHandler}>
          <AddCircle sx={{ fontSize: '40px' }} />
        </IconButton>
      </section>
    }
    {
      questionsTest?.length ? <QuestionList questions={questionsTest} /> : null
    }
    <span className={styles['add-presonal-question']}>Добавить свой вопрос</span>
  </section>;
};

export default Test;
