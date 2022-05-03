import React from "react";
import cn from 'classnames';

import { Istudent } from "../../../types";

import styles from './style.module.scss';

const ItemStudent: React.FC<Istudent> = ({ id, name, lastMark }) => {
  return <li className={styles.container}>
    <span className={styles.row}>
      <p>{name}</p>
      <p className={cn(styles.mark, {
        [styles.red]: lastMark === 2,
        [styles.green]: lastMark > 2,
      })}>
        {lastMark}</p>
    </span>
    <hr className={styles.line} />
  </li >;
};

export default ItemStudent;
