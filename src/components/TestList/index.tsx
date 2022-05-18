import React from "react";
import cn from 'classnames';

import { ITestListProps, ITest } from "../../types";
import TestItem from "./TestItem";

import styles from './style.module.scss';

const TestList: React.FC<ITestListProps> = ({ tests, className }) => {
  return <section className={`${styles.container} ${className ? className : ''}`}>
    {tests.map((test: ITest) => <TestItem
      key={test.id}
      id={test.id}
      name={test.name}
      questions={test.questions}
    />)}
  </section>
};

export default TestList;
