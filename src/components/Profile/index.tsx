import React, { useState } from "react";
import { useSelector } from "react-redux";
import withAuth from "../../hoc/withAuth";
import { IStore } from "../../redux";
import Container from "../../subComponents/Container";
import { PortalWindow } from "../PortalWindow";
import StudentList from "../StudentList";
import UploadSection from "../UploadSection";
import WindowMakeTestContainer from "../WindowMakeTest/container";

import styles from './style.module.scss';

const MOCK_STUDENTS = [
  {
    id: '1',
    name: 'Александр Бирюлин',
    lastMark: 5,
  },
  {
    id: '2',
    name: 'Богдан Рубцов',
    lastMark: 4,
  },
  {
    id: '3',
    name: 'Роман Козлов',
    lastMark: 2,
  },
  {
    id: '4',
    name: 'Алексей Домничев',
    lastMark: 3,
  },
  {
    id: '5',
    name: 'Александр Бирюлин',
    lastMark: 5,
  },
  {
    id: '6',
    name: 'Богдан Рубцов',
    lastMark: 4,
  },
  {
    id: '7',
    name: 'Роман Козлов',
    lastMark: 2,
  },
  {
    id: '8',
    name: 'Алексей Домничев',
    lastMark: 3,
  },
  {
    id: '9',
    name: 'Александр Бирюлин',
    lastMark: 5,
  },
  {
    id: '10',
    name: 'Богдан Рубцов',
    lastMark: 4,
  },
  {
    id: '11',
    name: 'Роман Козлов',
    lastMark: 2,
  },
  {
    id: '12',
    name: 'Алексей Домничев',
    lastMark: 3,
  },
  {
    id: '13',
    name: 'Александр Бирюлин',
    lastMark: 5,
  },
  {
    id: '14',
    name: 'Богдан Рубцов',
    lastMark: 4,
  },
  {
    id: '15',
    name: 'Роман Козлов',
    lastMark: 2,
  },
  {
    id: '16',
    name: 'Алексей Домничев',
    lastMark: 3,
  },
]

const Profile: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {firstName, lastName, id, username} = useSelector((state:IStore) => state.user);
  
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
      <h4 className={styles['title-list']}>Список студентов:</h4>
      <h4 className={styles.lastMark}>Последняя оценка:</h4>
    </span>
    <StudentList students={MOCK_STUDENTS} className={styles['container-stud']} />
    <PortalWindow isOpen={isOpen} modal={<WindowMakeTestContainer onClose={handleOpen} />} />
  </Container>;
};

export default withAuth(Profile);
