import React from "react";
import WindowHeader from "../WindowHeader";

import styles from './style.module.scss';

type WindowWrapperProps = {
  children?: JSX.Element | JSX.Element[];
  onClose: (boolean: boolean) => void;
  title: string;
}

const WindowWrapper: React.FC<WindowWrapperProps> = ({ children,onClose,title }) => {
  return <div className={styles.container}>
    <main className={styles.window}>
    <WindowHeader 
      title={title}
      onClose={onClose}
      />
      {children}
    </main>
  </div>;
};

export default WindowWrapper;
