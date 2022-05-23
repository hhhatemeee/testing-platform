import React, { useState } from "react";
import cn from 'classnames';

import TestItem from "./TestItem";

import styles from './style.module.scss';
import { Test } from "../../shared/types";
import { PortalWindow } from "../PortalWindow";
import WindowTest from "../WindowTest";

type TestListProps = {
  className?: string;
  tests: Test[];
}

const TestList: React.FC<TestListProps> = ({ tests, className }) => {
  const [currentTest, setCurrentTest] = useState<Test | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const isOpenHandler = (value: boolean, id?: number) => {
    if(id){
      setCurrentTest(tests.filter((t) => t.id === id)[0]);
    }
    if(!value){
      setCurrentTest(null);
    }
    
    setIsOpen(value);
  }
  
  return <section className={cn(styles.container, { className })}>
    {tests.map((test: Test) => <TestItem
      key={test.id}
      id={test.id}
      name={test.name}
      onClick={isOpenHandler}
    />)}
    <PortalWindow
      isOpen={isOpen}
      modal={currentTest
        ? <WindowTest onClose={() => setIsOpen(false)} test={currentTest} />
        : <></>}
    />
  </section>
};

export default TestList;
