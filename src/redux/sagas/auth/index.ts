import { call,  takeEvery, put, CallEffect, PutEffect, spawn, select } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

import AuthService from "../../../services/AuthService";
import {  ILoginPayload } from "../../../services/types";
import { AuthResponse, IFetchUser } from "../../../types/response";
import { setAuth } from "../../reducers/auth";
import UserService from "../../../services/UserService";
import { setUser } from "../../reducers/user";

export function* fetchUser(){
  const response: AxiosResponse<IFetchUser> = yield call({context: UserService, fn: UserService.fetchUser});
  
  yield put(setUser(response.data));
}

export function* login({payload}: PayloadAction<ILoginPayload>){
  const { username, password } = payload;
  
  const response: AxiosResponse<AuthResponse> = yield call(
    {context: AuthService, fn: AuthService.login},
    {username, password}
  );
  
  yield put(setAuth({isAuth:true}));
  
  localStorage.setItem('token', response.data.token);
  
  yield spawn(fetchUser);
}

export default function* loginSaga(){
  yield takeEvery(setAuth.type, login);
}