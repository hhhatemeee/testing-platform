import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { State } from "../../redux";
import { setAuth } from "../../redux/reducers/auth";
import Button from "../../subComponents/Button";

import styles from './style.module.scss';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const isAuth:boolean = useSelector((store:State) => store.auth.isAuth);
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
    
  const handleChangeUsername = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setUsername(e.target.value);
  }
  
  const handleChangePassword = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setPassword(e.target.value);
  }
  
  const handleClick = (e:React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    dispatch(setAuth({isAuth: false, username, password}));
  }
  
  useEffect(() => {
    if(isAuth){
      navigate('/profile');
    }
  },[isAuth]);

  return <main>
    <div className={styles.background}>
      <div className={styles.shape}></div>
      <div className={styles.shape}></div>
    </div>
    <form className={styles.window} onSubmit={handleClick}>
      <h2 className={styles.title}>Авторизация</h2>
      <label htmlFor="login">Логин</label>
      <input 
        type="text" 
        id='login'
        value={username}
        onChange={handleChangeUsername}
       />
      <label htmlFor="password">Пароль</label>
      <input
        type="password"
        id='password'
        value={password}
        onChange={handleChangePassword}
       />
      <Button text="Вход" width={'100%'} />
    </form>
  </main>
};

export default LoginPage;
