import React from "react";

import styles from './style.module.scss';

type ContainerProps = {
  children: JSX.Element[] | JSX.Element;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <main className={`${styles.container} ${className ? className : ''}`}>
    {children}
  </main>;
};

export default Container;
