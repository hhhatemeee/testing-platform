import React from "react";
import cn from 'classnames';

import { ItemTestProps } from "../../../types";

import styles from './style.module.scss';

const TestItem: React.FC<ItemTestProps> = ({ id, name, questions }) => {
  return <li className={styles.container}>
    <div className={styles.row}>
      <p>{name}</p>
      <span className="icon-trash" />
    </div>
    <hr className={styles.line} />
  </li >;
};

export default TestItem;
