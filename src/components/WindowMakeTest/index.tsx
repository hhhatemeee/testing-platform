import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTestActionCreator } from "../../redux/reducers/tests/actions";
import AddValue, { AddingElement } from "../../subComponents/AddValue";
import { ITest } from "../../types";

import styles from './style.module.scss';
import Test from "./Test";

interface IWindowMakeTest {
  onClose: (boolean: boolean) => void;
  tests: ITest[];
}

export interface IQuestion {
  id: string;
  name: string;
}

const WindowMakeTest: React.FC<IWindowMakeTest> = ({ onClose, tests }) => {
  const [testList, setTestList] = useState<ITest[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tests) {
      setTestList(tests);
    }
  }, [tests]);

  console.log(tests);

  const addTest = (value: AddingElement) => {
    dispatch(addTestActionCreator({ ...value }));
  }

  return <div className={styles.container}>
    <main className={styles.window}>
      <section className={styles.header}>
        <h2 className={styles.title}>Создание теста</h2>
        <h3 className={styles.close} onClick={() => onClose(false)}>+</h3>
      </section>
      <AddValue placeholder={"Введите название теста"} handleAdd={addTest} heightInput={""} />
      {
        testList.map((test: ITest) => <Test key={test.id} name={test.name} id={test.id} questions={test.questions} />)
      }
    </main>
  </div>;
};

export default WindowMakeTest;
