import React from "react";

import styles from './styles.module.scss';

interface IButton {
  onClick: () => void;
  text: string;
  width: string;
}

const Button: React.FC<IButton> = ({ onClick, text, width }) => {
  return <button className={`${styles.button}`} onClick={onClick} style={{ width: width }}>
    {text}
  </button>;
};

export default Button;
