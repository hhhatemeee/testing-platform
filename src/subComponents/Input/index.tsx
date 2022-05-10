import React from "react";

import styles from './style.module.scss';

interface IInput {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  height?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
const Input: React.FC<IInput> = ({ placeholder, onChange, value, height, onKeyDown }) => {
  return <input
    className={styles.input}
    type="text"
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    style={height ? { height: height } : {}}
    onKeyDown={onKeyDown}
  />
};

export default Input;
