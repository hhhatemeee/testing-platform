import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { LOCATION_CHANGE, RouterActions } from "redux-first-history";
import { call, put,  StrictEffect, take,  takeEvery } from "redux-saga/effects";

import TestsService from "../../../services/TestsService";
import { Test, UploadTestPayload } from "../../../shared/types";
import { setFetchTests, uploadTestInBase } from "../../reducers/tests";

function* loadTestData(): Generator<StrictEffect,void, AxiosResponse<Test[]>> {
  const response: AxiosResponse<Test[]> = yield call({
    context: TestsService,
    fn: TestsService.fetchTests
  });

  yield put(setFetchTests({ data: response.data }));
}

function* uploadTestSaga({ payload }: PayloadAction<UploadTestPayload>):Generator<StrictEffect> {
  const { test } = payload;

  if (test) {
    yield call(
      { context: TestsService, fn: TestsService.uploadTest },
      test
    );
  }

  yield call(loadTestData);
  // yield put(uploadTestInBase({ isUploading: false }));
}

export function* uploadTestInServer() {
  yield takeEvery(uploadTestInBase.type, uploadTestSaga);
}

export default function* pageLoaderSaga(): Generator<StrictEffect, void, RouterActions> {
  while (1) {
    const action: RouterActions = yield take(LOCATION_CHANGE);

    if (action.payload.location.pathname.includes('profile')) {
      yield call(loadTestData);
    }
  }
}