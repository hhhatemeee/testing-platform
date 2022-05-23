import React from "react";

import Button from "../../subComponents/Button";

import styles from './style.module.scss';

type CreateSectionProps = {
  onClick: () => void;
  title:string;
  textBtn: string;
}

const CreateSection: React.FC<CreateSectionProps> = ({ onClick,textBtn,title }) => {
  return <section className={styles.container}>
    <h4>{title}</h4>
    <Button onClick={onClick} text={textBtn} />
  </section>;
};

export default CreateSection;
