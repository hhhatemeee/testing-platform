import React from "react";

import { SharedEntity } from "../../../shared/types";

import styles from './style.module.scss';

type TestItemProps = {} & SharedEntity;

const TestItem: React.FC<TestItemProps> = ({ id, name }) => {
  return <li className={styles.container}>
    <div className={styles.row}>
      <p>{name}</p>
      <span className="icon-trash" />
    </div>
    <hr className={styles.line} />
  </li >;
};

export default TestItem;
