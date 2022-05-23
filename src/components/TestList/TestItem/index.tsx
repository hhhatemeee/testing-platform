import React from "react";

import { SharedEntity} from "../../../shared/types";

import styles from './style.module.scss';

type TestItemProps = {
  onClick: (value: boolean, id?: number) => void; 
} & SharedEntity;

const TestItem: React.FC<TestItemProps> = ({ id,name, onClick }) => {
  
  const handleClick = () => {
    onClick(true, id);
  }
  
  return <li className={styles.container} >
    <div className={styles.row}>
      <p onClick={handleClick}>{name}</p>
      <span className="icon-trash" />
    </div>
    <hr className={styles.line} />
  </li >;
};

export default TestItem;
