import React, { useState } from "react";
import withAuth from "../../hoc/withAuth";

import { Ianswer, ITestingPlate } from "../../types";
import Answer from "./Answer";
import FooterPlate from "./FooterPlate";

import styles from './styles.module.scss';

const TestingPlate: React.FC<ITestingPlate> = ({ questions }) => {
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
            questions[currentNumber - 1].answers.map((answer: Ianswer) => <Answer key={answer.id} name={answer.name} id={answer.id} />)
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

export default withAuth<ITestingPlate>(TestingPlate);
