import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuestion, ITest, ITestState } from "../../../types";
import { IFetchTest } from "../../../types/response";
import { IAddAnswerPayload, IAddQuestionPayload, IAddTestPayload, IUploadTestPayload } from "../../types";

const initialState: ITestState = {
  lastTestIdUpload: null,
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

const testsReducer = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    addTest(state, action: PayloadAction<IAddTestPayload>){
      const {name} = action.payload;
      
      state.tests.push({
        id:Date.now(),
        questions: [],
        name
      });
    },
    
    addQuestion(state, action:PayloadAction<IAddQuestionPayload>){
      const {name, testId} = action.payload;
      
      state.tests.forEach((test:ITest, index) => {
        if(test.id === testId){
          state.tests[index].questions.push({
            id: Date.now(),
            name,
            answers:[],
          })
        }
      })
    },
    addAnswer(state, action:PayloadAction<IAddAnswerPayload>){
      const {name, testId, questionId} = action.payload;
      
      state.tests.forEach((test:ITest, iTest) => {
        if(test.id === testId){
          state.tests[iTest].questions.forEach((ques:IQuestion,iQues) => {
            if(ques.id === questionId){
              state.tests[iTest].questions[iQues].answers.push({
                id: Date.now(),
                name,
                isTrue: false,
              })
            }
          })
        }
      })
    },
    setFetchTests(state, action:PayloadAction<IFetchTest[]>){
      state.tests = action.payload;
    },
    uploadTestInBase(state, action: PayloadAction<IUploadTestPayload>){
      console.log(123);
      state.lastTestIdUpload = action.payload.id;
    }
  }
})

export type testsState = ReturnType<typeof testsReducer.reducer>;
export default testsReducer.reducer;
export const {addTest, addQuestion, addAnswer,setFetchTests,uploadTestInBase} = testsReducer.actions;