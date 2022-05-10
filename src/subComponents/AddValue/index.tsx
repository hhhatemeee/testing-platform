import React, { useState } from "react";

import { uuid } from "../../helpers";
import Button from "../Button";
import Input from "../Input";

import styles from './style.module.scss';

interface IAddValue {
  placeholder: string;
  handleAdd: (object: AddingElement) => void;
  heightInput: string;
  isAdding?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface AddingElement {
  name: string;
}

const AddValue: React.FC<IAddValue> = ({ placeholder, handleAdd, heightInput, isAdding, onKeyDown }) => {
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
          : <Button text="Add" onClick={onAdd} />
      }
    </div>
  </section >;
};

export default AddValue;
