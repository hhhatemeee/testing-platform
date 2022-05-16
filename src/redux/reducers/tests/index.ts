import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { uuid } from "../../../helpers";
import { IQuestion, ITest } from "../../../types";
import { IAddAnswerPayload, IAddQuestionPayload, IAddTestPayload } from "../../types";
import { ADD_ANSWER, ADD_QUESTION, ADD_TEST } from "../../types/actionsTypes";

const initialState: ITest[] = [
  {
    id: '1',
    name: 'test',
    questions: [
      {
        id: '1',
        name: 'question',
        answers: [
          {
            id: '1',
            name: 'answer',
            isTrue: false,
          },
          {
            id: '2',
            name: 'answer 2',
            isTrue: true,
          }
        ]
      }
    ]
  }
];

const testsReducer = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    addTest(state, action: PayloadAction<IAddTestPayload>){
      const {name} = action.payload;
      
      state.push({
        id:uuid(),
        questions: [],
        name
      });
    },
    
    addQuestion(state, action:PayloadAction<IAddQuestionPayload>){
      const {name, testId} = action.payload;
      
      state.forEach((test:ITest, index) => {
        if(test.id === testId){
          state[index].questions.push({
            id: uuid(),
            name,
            answers:[],
          })
        }
      })
    },
    addAnswer(state, action:PayloadAction<IAddAnswerPayload>){
      const {name, testId, questionId} = action.payload;
      
      state.forEach((test:ITest, iTest) => {
        if(test.id === testId){
          state[iTest].questions.forEach((ques:IQuestion,iQues) => {
            if(ques.id === questionId){
              state[iTest].questions[iQues].answers.push({
                id: uuid(),
                name,
                isTrue: false,
              })
            }
          })
        }
      })
    }
  }
})

export type testsState = ReturnType<typeof testsReducer.reducer>;
export default testsReducer.reducer;
export const {addTest, addQuestion, addAnswer} = testsReducer.actions;