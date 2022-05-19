import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Select, MenuItem, SelectChangeEvent, IconButton } from "@mui/material";
import { AddCircle } from "@mui/icons-material";

import { uploadTestInBase } from "../../../redux/reducers/tests";
import { AddingElement } from "../../../subComponents/AddValue";
import { IQuestion } from "../../../types";

import styles from './style.module.scss';
import { addQuestion } from "../../../redux/reducers/localTest";
import QuestionList from "../QuestionList";
import Button from "../../../subComponents/Button";


export interface ITestProps {
  id: number,
  name: string,
  questionsTest: IQuestion[],
  questionsAll?: IQuestion[],
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Test: React.FC<ITestProps> = ({ name, id, questionsTest, questionsAll }) => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [currentValue, setCurrentValue] = useState<number | 'question'>('question');
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
    const question = questions.filter((q: IQuestion) => q.id === currentValue)[0];
    
    dispatch(addQuestion({ question }));
    setCurrentValue('question');
  }

  return <section className={styles.container}>
    <h4 className={styles.name}>{name}</h4>
    {questions
      && <section className={styles['add-question']}>
        <Select
          onChange={selectChangeHandler}
          labelId="label-select"
          value={currentValue}
          autoWidth={false}
          size="medium"
          sx={{ width: '530px', minWidth: '530px' }}
          MenuProps={MenuProps}
        >
          <MenuItem value="question" disabled>
            Добавить вопрос
          </MenuItem>
          {questions.map((q: IQuestion) => (
            <MenuItem
              key={q.id}
              value={q.id}
            >
              {q.name}
            </MenuItem>
          )
          )}
        </Select>
        <IconButton sx={{ color: '#6f52ee' }} onClick={addQuestionHandler}>
          <AddCircle sx={{ fontSize: '40px' }} />
        </IconButton>
      </section>
    }
    {
      questionsTest?.length && <QuestionList questions={questionsTest} />
    }
  </section>;
};

export default Test;
