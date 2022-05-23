import React from "react";
import cn from 'classnames';

import { Test } from "../../shared/types";

import QuestionList from "../WindowMakeTest/QuestionList";
import WindowWrapper from "../../subComponents/WindowWrapper";

import styles from './style.module.scss';

type WindowTestProps = {
  test: Test;
  onClose: (boolean: boolean) => void;
}

const WindowTest:React.FC<WindowTestProps> = ({test, onClose}) => {
  return <WindowWrapper title={test.name} onClose={onClose}>
    {test.questions.map((q) => (
      <ul className={styles["question-container"]}>
        <li>
          <p className={styles.question}>{q.name}</p>
            <ul className={styles["answer-container"]}>
            {q.answers.length && q.answers.map((a,i) => (
              <li className={cn(styles.answer, {[styles.isTrue]: a.isTrue})}>
                <span className={styles.index}>{i+1}</span> {a.name}</li>
            ))}
            </ul>
        </li>
      </ul>
    ))}
  </WindowWrapper>;
};

export default WindowTest;
