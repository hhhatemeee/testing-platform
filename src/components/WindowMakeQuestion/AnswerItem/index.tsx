import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";

import { Answer } from "../../../shared/types";

import styles from './style.module.scss';

type AnswerItemProps = {
  onClick: (id: number) => void;
  onDelete: (id: number) => void;
} & Answer;

const AnswerItem: React.FC<AnswerItemProps> = ({ name, isTrue, id, onClick, onDelete }) => {
  const handleClick = (): void => onClick(id);
  const handleDelete = (): void => onDelete(id);

  return <li className={styles.answer}>
    <label htmlFor={`answer_${id}`}>{name}</label>
    <div className={styles.container}>
      <input type="checkbox" name="" id={`answer_${id}`} onChange={handleClick} checked={isTrue} />
      <IconButton sx={{ color: '#6f52ee' }} onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  </li>;
};

export default AnswerItem;
