import React from "react";

import styles from './style.module.scss';

type InputProps = {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  height?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  id?: string;
  type?: string;
  label?: string;
  style?:any
}
const Input: React.FC<InputProps> = ({ placeholder, onChange, value, height, onKeyDown,id,type,label,style }) => {
  return <div className={styles.container} style={style}>
    {label && <label htmlFor={id}>{label}</label>}
    <input
    className={styles.input}
    type={type ?? "text"}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    style={height ? { height: height } : {}}
    onKeyDown={onKeyDown}
    id={id ?? ""}
  />
  </div>

};

export default Input;
