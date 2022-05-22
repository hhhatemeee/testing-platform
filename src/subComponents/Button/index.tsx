import React from "react";
import cn from 'classnames';

import styles from './styles.module.scss';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?:string;
  width?: string;
  isAnimate?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, width, isAnimate,className }) => {
  return <button
    className={cn(styles.button, {[styles.animate]: isAnimate, className})}
    onClick={onClick}
    style={{ width: width }}>
    {text}
  </button>;
};

export default Button;
