import { call, apply, take, takeEvery, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import AuthService from "../../../services/AuthService";
import { ILoginPayload } from "../../../services/types";
import { AuthResponse } from "../../../types/response";
import { setAuth } from "../../reducers/auth";
import { AxiosResponse } from "axios";



export function* login({payload}: PayloadAction<ILoginPayload>){
  const { username, password } = payload;
  
  const response: AxiosResponse<AuthResponse> = yield call(
    {context: AuthService, fn: AuthService.login},
    {username, password}
  );
  
  yield put(setAuth({isAuth:true}));
  
  localStorage.setItem('token', response.data.token);
  
  console.log(response);
}

export default function* loginSaga(){
  yield takeEvery(setAuth.type, login);
}