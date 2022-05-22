import React from "react";

import styles from './style.module.scss';

type WindowHeaderProps = {
  title: string;
  onClose: (boolean: boolean) => void;
}

const WindowHeader: React.FC<WindowHeaderProps> = ({ title, onClose }) => {
  return <header className={styles.header}>
    <h2 className={styles.title}>Создание вопросов</h2>
    <span className={styles.close} onClick={() => onClose(false)}>+</span>
  </header>;
};

export default WindowHeader;
