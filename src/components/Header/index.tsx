import React from "react";
import { Link } from "react-router-dom";

import Logo from '../../assets/img/ksu-logo.svg';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  return <header >
    <div className={styles.container}>
      <Link to='/'><h4 className={styles.logo}>K S U</h4></Link>
      <Link to='/login'><i className={`icon-profile ${styles.profile}`} /></Link>
    </div>
    <hr className={styles.line} />
  </header>;
};

export default Header;
