import React, { useState } from "react";

import styles from './style.module.scss';

interface IAnswer {
  id: string;
  name: string;
}
const Answer: React.FC<IAnswer> = ({ name, id }) => {
  const [isBoolean, setBoolean] = useState<boolean>(false);

  const handleChangeRadio = () => setBoolean(!isBoolean);

  return <li className={styles.container}>
    {name}
    <input className={styles.checkbox} type='checkbox' id={id} checked={isBoolean} onChange={handleChangeRadio} />
  </li>;
};

export default Answer;
