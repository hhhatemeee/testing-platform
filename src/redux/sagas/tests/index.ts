import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { LOCATION_CHANGE, RouterActions } from "redux-first-history";
import { call, put, select, take, takeEvery } from "redux-saga/effects";
import { IStore } from "../..";
import TestsService from "../../../services/TestsService";
import { ITest, ITestState } from "../../../types";
import { setFetchTests, uploadTestInBase } from "../../reducers/tests";
import { IUploadTestPayload } from "../../types";

function* loadTestData(){
  const response:AxiosResponse = yield call({context: TestsService, fn: TestsService.fetchTests});
  
  console.log(response);
  
  yield put(setFetchTests(response.data))
}

function* uploadTest({payload}: PayloadAction<IUploadTestPayload>){
  const state:ITestState = yield select((state: IStore) => state.tests);
  const {id} = payload;
  console.log(id);
  // if(state.lastTestIdUpload === id){
  //   return;
  // }
  
  const test:ITest = state.tests.filter((test:ITest) => test.id === id)[0];
  console.log(test);
  
  yield call(
    {context: TestsService, fn: TestsService.uploadTest},
    test
  );
  
  yield call(loadTestData);
}

export  function* uploadTestInServer(){
  console.log(12);
  yield takeEvery(uploadTestInBase.type, uploadTest);
}

export default function* pageLoaderSaga(){
  while(1){
    const action: RouterActions = yield take(LOCATION_CHANGE);
    
    if(action.payload.location.pathname.includes('profile')){
      yield call(loadTestData);
    }
  }
}