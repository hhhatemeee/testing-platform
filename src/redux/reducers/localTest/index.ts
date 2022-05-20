import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddQuestionPayload, AddTestPayload, Test } from "../../../shared/types";

const initialState:Test = {
  id: 1,
  name: 'Новый тест',
  questions: [
    {
      id:1,
      name: 'Первый вопрос',
      answers:[
        {
          id:1,
          name: '',
          isTrue: false,
        }
      ]
    }
  ]
};

const localTestSlice = createSlice({
  name: 'localTest',
  initialState,
  reducers:{
    addNameTest(state, action: PayloadAction<AddTestPayload>){
      const {name} = action.payload;
      
      state.name = name;
    },
    addQuestion(state, action: PayloadAction<AddQuestionPayload>){
      const {question} = action.payload;
      
      state.questions.push(question);
    },
  }
});

export type localTestState = ReturnType<typeof localTestSlice.reducer>;
export default localTestSlice.reducer;
export const {addNameTest, addQuestion} = localTestSlice.actions;
