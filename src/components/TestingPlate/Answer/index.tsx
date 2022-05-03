import React, { useState } from "react";
import { Ianswer } from "../../../types";

import styles from './styles.module.scss';

const Answer: React.FC<Ianswer> = ({ id, name }) => {
  const [isChecked, setChecked] = useState<boolean>(false);

  const onChangeChecked = () => setChecked(!isChecked);

  return <li className={styles.container} onClick={onChangeChecked}>
    <input type="checkbox" onChange={onChangeChecked} id={`ch_${id}`} checked={isChecked} />
    <label className={styles.checkbox} htmlFor={`ch_${id}`} />
    <p className={styles.answer}>{name}</p>
  </li>
};

export default Answer;
