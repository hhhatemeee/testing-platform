import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ianswer, IQuestion, ITest } from "../../../types";
import { IAddAnswerPayload, IAddTestPayload } from "../../types";


type IAddQuestionPayload = {
  question:IQuestion
}
const initialState:ITest = {
  id: Date.now(),
  name: 'Новый тест',
  questions: [
    {
      id: Date.now(),
      name: 'Первый вопрос',
      answers:[
        {
          id:Date.now(),
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
    addNameTest(state, action: PayloadAction<IAddTestPayload>){
      const {name} = action.payload;
      
      state.name = name;
    },
    addQuestion(state, action: PayloadAction<IAddQuestionPayload>){
      const {question} = action.payload;
      
      state.questions.push(question);
    },
  }
});

export type localTestState = ReturnType<typeof localTestSlice.reducer>;
export default localTestSlice.reducer;
export const {addNameTest, addQuestion} = localTestSlice.actions;