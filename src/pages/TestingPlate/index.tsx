import React, { useState } from "react";
import withAuth from "../../hoc/withAuth";
import {  AnswerNoAccess, QuestionNoAccess } from "../../shared/types";

import AnswerItem from "./AnswerItem";
import FooterPlate from "./FooterPlate";

import styles from './styles.module.scss';

type TestingPlateProps = {
  questions: QuestionNoAccess[];
};

const TestingPlate: React.FC<TestingPlateProps> = ({ questions }) => {
  const [currentNumber, setCurrentNumber] = useState<number>(1);

  const handleCurrentNumber = () => {
    if (currentNumber === questions.length) {
      setCurrentNumber(1);

      return;
    }
    setCurrentNumber(currentNumber + 1);
  };

  const backCurrentNumber = () => {
    if (currentNumber === 1) {
      setCurrentNumber(questions.length);

      return;
    }
    setCurrentNumber(currentNumber - 1);
  }

  return <>
    <main className={styles.container}>
      <div className={styles.plate}>
        <h3 className={styles.question}>
          {questions[currentNumber - 1].name}
        </h3>
        <ul>
          {
            questions[currentNumber - 1].answers.map((answer: AnswerNoAccess) => (
              <AnswerItem key={answer.id} name={answer.name} id={answer.id} />
            ))
          }
        </ul>
      </div>
    </main>
    <FooterPlate
      count={questions.length}
      onClick={handleCurrentNumber}
      currentNumber={currentNumber}
      onBack={backCurrentNumber}
    />
  </>;
};

export default withAuth<TestingPlateProps>(TestingPlate);
