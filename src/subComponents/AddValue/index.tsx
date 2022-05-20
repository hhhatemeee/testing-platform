import React, { useState } from "react";

import { AddingElementProps } from "../../shared/types";
import Button from "../Button";
import Input from "../Input";

import styles from './style.module.scss';

type AddValueProps = {
  placeholder: string;
  handleAdd: (object: AddingElementProps) => void;
  heightInput: string;
  isAdding?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  children?: JSX.Element;
}


const AddValue: React.FC<AddValueProps> = ({
  placeholder,
  handleAdd,
  heightInput,
  isAdding,
  onKeyDown,
  children
}) => {
  const [value, setValue] = useState<string>('');

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const onAdd = () => {
    handleAdd({ name: value });
  }

  return <section className={styles.container}>
    <div className={styles['add-row']}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={handleValue}
        height={heightInput ? heightInput : undefined}
        onKeyDown={onKeyDown}
      />
      {
        isAdding
          ? <h4 className={styles['add-btn']} onClick={onAdd}>+</h4>
          : <Button text="Ок" onClick={onAdd} />
      }
      {children}
    </div>
  </section >;
};

export default AddValue;
