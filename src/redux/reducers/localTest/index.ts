import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddQuestionPayload, AddTestPayload, Test } from "../../../shared/types";

const initialState:Test = {
  id: 1,
  name: 'Новый тест',
  questions: [

  ]
};

const localTestSlice = createSlice({
  name: 'localTest',
  initialState,
  reducers:{
    addNameTestInLocal(state, action: PayloadAction<AddTestPayload>){
      const {name} = action.payload;
      
      state.name = name;
    },
    addQuestionInLocal(state, action: PayloadAction<AddQuestionPayload>){
      const {question} = action.payload;
      
      state.questions.push(question);
    },
  }
});

export type localTestState = ReturnType<typeof localTestSlice.reducer>;
export default localTestSlice.reducer;
export const {addNameTestInLocal, addQuestionInLocal} = localTestSlice.actions;
