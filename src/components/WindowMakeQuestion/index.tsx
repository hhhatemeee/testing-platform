import React, { useState } from "react";
import { AddCircle } from "@mui/icons-material";
import { IconButton, SelectChangeEvent } from "@mui/material";
import { useDispatch } from "react-redux";

import Button from "../../subComponents/Button";
import Input from "../../subComponents/Input";
import WindowHeader from "../../subComponents/WindowHeader";
import AnswerList from "./AnswerList";
import { addQuestion } from "../../redux/reducers/questions";
import { Answer } from "../../shared/types";
import CustomSelect from "../../subComponents/Select";

import styles from './style.module.scss';

type WindowMakeQuestionProps = {
  onClose: (boolean: boolean) => void;
}

const MOCK_TOPICS = [
  {
    id: 1,
    name: 'topic 1'
  },
  {
    id: 2,
    name: 'topic 2'
  },
  {
    id: 3,
    name: 'topic 3'
  },
]

const WindowMakeQuestion: React.FC<WindowMakeQuestionProps> = ({ onClose }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [currentTopic, setCurrentTopic] = useState<string>('');
  const [currentName, setCurrentName] = useState<string>('');
  const [isShowTopics, setIsShowTopics] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<number | 'Выберите тему'>('Выберите тему');
  const dispatch = useDispatch();

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentName(e.currentTarget.value);
  }

  const topicChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentTopic(e.currentTarget.value);
  }

  const answerChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentAnswer(e.currentTarget.value);
  }

  const addAnswerHandler = (): void => {
    if (currentAnswer) {
      setAnswers([
        ...answers,
        {
          id: Date.now(),
          name: currentAnswer,
          isTrue: false,
        }
      ]);

    }
    setCurrentAnswer('');
  }

  const toggleAnswerHandler = (id: number): void => {
    if (id) {
      setAnswers(answers.map((ans) => {
        if (ans.id === id) {
          return {
            ...ans,
            isTrue: !ans.isTrue,
          }
        }

        return ans;
      }))
    }
  }

  const selectChangeHandler = (e: SelectChangeEvent<number | 'Выберите тему'>): void => {
    setSelectValue(e.target.value);
    setCurrentTopic(MOCK_TOPICS.filter((t) => t.id === e.target.value)[0].name);
  }

  const deleteAnswerHandler = (id: number): void => {
    setAnswers(answers.filter(q => q.id !== id));
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentName && answers.length) {
      dispatch(addQuestion({
        question: {
          id: Date.now(),
          name: currentName,
          topic: currentTopic,
          answers
        }
      }));

      setAnswers([]);
      setCurrentAnswer('');
      setCurrentTopic('');
      setCurrentName('');
      setSelectValue('Выберите тему');
      
      return;
    }
    console.warn('Пустые поля');
  }

  return <div className={styles.container}>
    <form onSubmit={onSubmit}>
      <div className={styles.window}>
        <div className={styles.content}>
          <WindowHeader
            title="Создание вопросов"
            onClose={onClose}
          />
          <main className={styles["container-main"]}>
            <div className={styles.topic}>
              <span className={styles["topic__row"]}>
                <label htmlFor="topic" className={styles["topic__text"]}>Тема</label>
                <label
                  htmlFor="question"
                  className={styles['topic__select']}
                  onClick={() => setIsShowTopics(!isShowTopics)}
                >{isShowTopics ? "Использовать свою" : "Выбрать из существуюших"}</label>
              </span>
              {
                isShowTopics
                  ? <CustomSelect
                    onChange={selectChangeHandler}
                    value={selectValue}
                    data={MOCK_TOPICS}
                    title={"Выберите тему"}
                    sx={{ width: '562px', minWidth: '562px', height: '50px', marginTop: '5px' }}
                  />
                  : <Input
                    placeholder={"Введите название темы"}
                    onChange={topicChangeHandler}
                    value={currentTopic}
                    id="topic"
                  />
              }
            </div>
            <div className={styles.question}>
              <label htmlFor="question" className={styles['question__test']}>Название</label>
              <Input
                placeholder={"Введите название Вопроса"}
                onChange={nameChangeHandler}
                value={currentName}
                id="question"
              />
            </div>
            <div className={styles.answers}>
              <label htmlFor="answers" >Варианты ответа</label>
              <div className={styles["answers__row"]}>
                <Input
                  placeholder="Введите вариант ответа"
                  onChange={answerChangeHandler}
                  value={currentAnswer}
                />
                <IconButton sx={{ color: '#6f52ee' }} onClick={addAnswerHandler}>
                  <AddCircle sx={{ fontSize: '40px' }} />
                </IconButton>
              </div>
            </div>
            <AnswerList
              answers={answers}
              onClick={toggleAnswerHandler}
              onDelete={deleteAnswerHandler}
            />
          </main>
        </div>
        <footer className={styles.footer}>
          <Button text="Создать" />
        </footer>
      </div>
    </form>
  </div>;
};

export default WindowMakeQuestion;
