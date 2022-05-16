import { all, call, spawn } from "redux-saga/effects";
import loginSaga from "./auth";

export default function* rootSaga(){
  const sagas = [loginSaga];
  
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