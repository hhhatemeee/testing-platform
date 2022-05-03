import React from "react";

import styles from './style.module.scss';


const UploadSection: React.FC = () => {
  return <section className={styles.container}>
    <h4>Загрузить тест</h4>
    <input type="file" name="" id="" />
  </section>;
};

export default UploadSection;
