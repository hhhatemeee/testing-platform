import React, { useEffect, useState } from "react";
import withAuth from "../../hoc/withAuth";
import Container from "../../subComponents/Container";
import { ITest } from "../../types";
import { PortalWindow } from "../PortalWindow";
import TestList from "../TestList";
import UploadSection from "../UploadSection";
import WindowMakeTestContainer from "../WindowMakeTest/container";

import styles from './style.module.scss';

interface IProfileProps {
  tests: ITest[],
  id: number | null,
  firstName: string | null,
  lastName: string | null,
  username: string | null,
}

const Profile: React.FC<IProfileProps> = ({
  tests,
  id,
  firstName,
  lastName,
  username
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [downTests, setDownTests] = useState<ITest[]>([]);
  
  useEffect(() => {
    if(tests && tests.length){
      setDownTests(tests);
    }
  },[tests])
  
  const handleOpen = (boolean: boolean) => {
    setIsOpen(boolean);
  }

  return <Container>
    <section>
      <h2 className={styles.username}>{firstName} {lastName}</h2>
    </section>
    <section className={styles.upload}>
      <UploadSection onClick={() => handleOpen(true)} />
      <div className={styles.test}>
        <div className={styles.circle}></div>
      </div>
    </section>
    <span className={styles.row}>
      <h4 className={styles['title-list']}>Список тестов:</h4>
    </span>
    <TestList tests={downTests} className={styles['container-test']} />
    <PortalWindow isOpen={isOpen} modal={<WindowMakeTestContainer onClose={handleOpen} />} />
  </Container>;
};

export default withAuth(Profile);
