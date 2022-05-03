import React from "react";
import cn from 'classnames';

import { Istudent, IStudentList } from "../../types";
import ItemStudent from "./ItemStudent";

import styles from './style.module.scss';



const StudentList: React.FC<IStudentList> = ({ students, className }) => {
  return <section className={`${styles.container} ${className ? className : ''}`}>
    {students.map((std: Istudent) => <ItemStudent key={std.id} id={std.id} name={std.name} lastMark={std.lastMark} />)}
  </section>
};

export default StudentList;
