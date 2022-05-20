import React from "react";

import Button from "../../subComponents/Button";

import styles from './style.module.scss';

type UploadSectionProps = {
  onClick: () => void;
}

const UploadSection: React.FC<UploadSectionProps> = ({ onClick }) => {
  return <section className={styles.container}>
    <h4>Создать тест</h4>
    <Button onClick={onClick} text="Создать" />
  </section>;
};

export default UploadSection;
