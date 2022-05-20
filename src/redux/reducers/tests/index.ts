import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchTestPayload, FetchTestsReducerState, UploadTestPayload } from "../../../shared/types";

const initialState: FetchTestsReducerState = {
  isUploading: false,
  tests: [
    {
      id: 55,
      name: 'kek',
      questions: [
        {
          id: 1,
          name: 'question',
          answers: [
            {
              id: 1,
              name: 'answer',
              isTrue: false,
            },
            {
              id: 1,
              name: 'answer 2',
              isTrue: true,
            }
          ]
        }
      ]
    }
  ],
};

const fetchTestsReducer = createSlice({
  name: 'fetchTests',
  initialState,
  reducers: {
    setFetchTests(state, action:PayloadAction<FetchTestPayload>){
      state.tests = action.payload.data;
    },
    uploadTestInBase(state, action: PayloadAction<UploadTestPayload>){
      state.isUploading = action.payload.isUploading;
    }
  }
})

export type testsState = ReturnType<typeof fetchTestsReducer.reducer>;
export default fetchTestsReducer.reducer;
export const {setFetchTests,uploadTestInBase} = fetchTestsReducer.actions;
