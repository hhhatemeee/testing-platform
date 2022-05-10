import React from "react";

import styles from './styles.module.scss';

interface IButton {
  onClick: () => void;
  text: string;
  width?: string;
  isAnimate?: boolean;
}

const Button: React.FC<IButton> = ({ onClick, text, width, isAnimate }) => {
  return <button
    className={`${styles.button} ${isAnimate ? styles.animate : ''}`}
    onClick={onClick}
    style={{ width: width }}>
    {text}
  </button>;
};

export default Button;
