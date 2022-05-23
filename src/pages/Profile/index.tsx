import React, { useEffect, useState } from "react";

import withAuth from "../../hoc/withAuth";
import Container from "../../subComponents/Container";
import { PortalWindow } from "../../components/PortalWindow";
import TestList from "../../components/TestList";
import CreateSection from "../../components/CreateSection";
import { Test, UserReducerState, WindowSwitchName } from "../../shared/types";
import WindowSwitch from "../../components/WIndowSwitch";

import styles from './style.module.scss';

type ProfileProps = {
  tests: Test[]
} & UserReducerState;

const Profile: React.FC<ProfileProps> = ({
  tests,
  id,
  firstName,
  lastName,
  username
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [downTests, setDownTests] = useState<Test[]>([]);
  const [currentWindow, setCurrentWindow] = useState<WindowSwitchName>('test');
  
  useEffect(() => {
    if(tests && tests.length){
      setDownTests(tests);
    }
  },[tests]);
  
  const handleOpen = (boolean: boolean, windowName?: WindowSwitchName) => {
    if(windowName){
      setCurrentWindow(windowName);
    }
    
    setIsOpen(boolean);
  }

  return <Container>
    <section>
      <h2 className={styles.username}>{firstName} {lastName}</h2>
    </section>
    <section className={styles.upload}>
      <CreateSection onClick={() => handleOpen(true, 'test')} title="Создать тест" textBtn="Создать"/>
      <CreateSection onClick={() => handleOpen(true, 'question')} title="Создать вопрос" textBtn="Создать"/>
    </section>
    <span className={styles.row}>
      <h4 className={styles['title-list']}>Список тестов:</h4>
    </span>
    <TestList tests={downTests} className={styles['container-test']} />
    <PortalWindow isOpen={isOpen} modal={<WindowSwitch onClose={handleOpen} windowName={currentWindow}/>} />
  </Container>;
};

export default withAuth(Profile);
