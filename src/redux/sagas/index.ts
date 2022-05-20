import { all, call, spawn, StrictEffect } from "redux-saga/effects";

import loginSaga from "./auth";
import pageLoaderSaga, { uploadTestInServer } from "./tests";

export default function* rootSaga():Generator<StrictEffect>{
  const sagas = [loginSaga, pageLoaderSaga,uploadTestInServer];
  
  const retrySagas = sagas.map((saga) => {
    return spawn(function*(){
      while(1){
        try{
          yield call(saga);
          break;
        }catch(e){
          console.log(e);
        }
      }
    })
  });
  
  yield all(retrySagas);
}