import React from "react";
import { Link } from "react-router-dom";

import withAuth from "../../hoc/withAuth";

import styles from './styles.module.scss';

const StartPageTest: React.FC = () => {
  return <section className={styles.container}>
    <h2 className={styles.title}>Нажмите, чтобы начать тест:</h2>
    <Link to='/test' className={styles.button}>Начать</Link>
  </section>;
};

export default withAuth(StartPageTest);
