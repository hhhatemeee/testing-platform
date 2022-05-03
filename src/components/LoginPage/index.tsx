import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../subComponents/Button";

import styles from './style.module.scss';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return <main>
    <div className={styles.background}>
      <div className={styles.shape}></div>
      <div className={styles.shape}></div>
    </div>
    <form className={styles.window}>
      <h2 className={styles.title}>Авторизация</h2>
      <label htmlFor="login">Логин</label>
      <input type="text" id='login' />
      <label htmlFor="password">Пароль</label>
      <input type="password" id='password' />
      <Button text="Вход" onClick={() => { navigate('/profile') }} width={'100%'} />
    </form>
  </main>
};

export default LoginPage;
