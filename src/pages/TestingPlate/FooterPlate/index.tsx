import React from "react";
import Button from "../../../subComponents/Button";

import styles from './styles.module.scss';

type IFooterPlate = {
  count: number;
  onClick: () => void;
  currentNumber: number;
  onBack: () => void;
}

const FooterPlate: React.FC<IFooterPlate> = ({ count, onClick, currentNumber, onBack }) => {
  return <section className={styles.container}>
    <div className={styles.timer}>
      01:33
    </div>
    <div className={styles.counter}>
      <div className={styles['current-number']}> {currentNumber} </div>
      <p className={styles.count}>/ {count}</p>
    </div>
    <button className={`icon-back ${styles.back}`} onClick={onBack} />
    <Button text='Ответить' onClick={onClick} />
  </section>;
};

export default FooterPlate;
