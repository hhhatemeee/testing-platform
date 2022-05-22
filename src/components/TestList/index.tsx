import React from "react";
import cn from 'classnames';

import TestItem from "./TestItem";

import styles from './style.module.scss';
import { Test } from "../../shared/types";

type TestListProps = {
  className?: string;
  tests: Test[];
}

const TestList: React.FC<TestListProps> = ({ tests, className }) => {
  return <section className={cn(styles.container, {className})}>
    {tests.map((test: Test) => <TestItem
      key={test.id}
      id={test.id}
      name={test.name}
    />)}
  </section>
};

export default TestList;
