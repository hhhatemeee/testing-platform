import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuestion, ITest } from "../../../types";

type IAddQuestionPayload ={
  name: string;
}

type IAddAnswerPayload = {
  name: string;
  questionId: number;
  isTrue: boolean;
}

const initialState: IQuestion[] = [
  {
    id: 0,
    name: 'Что такое делать так делать так делать так',
    answers: [
      {
        id: 0,
        name: '',
        isTrue: false,
      }
    ]
  },
  {
    id: 1,
    name: 'Ghbdtn Ghbdtn Ghbdtn Ghbdtn Ghbdtn Ghbdtn Ghbdtn Ghbdtn',
    answers: [
      {
        id: 1,
        name: '',
        isTrue: false,
      }
    ]
  },
  {
    id: 2,
    name: 'iconOpen	.MuiSelect-iconOpen	Styles applied to the icon component if the popup is open.',
    answers: [
      {
        id: 2,
        name: '',
        isTrue: false,
      }
    ]
  }
];

const questionSlice = createSlice({
  name: 'qiestion',
  initialState,
  reducers:{
    addNameQuestion(state, action: PayloadAction<IAddQuestionPayload>){
      const {name} = action.payload;
      
      state.push({
        id: Date.now(),
        name,
        answers: []
      })
    },
    addAnswer(state, action: PayloadAction<IAddAnswerPayload>) {
      const { name, isTrue, questionId } = action.payload;

      state.forEach((question: IQuestion, index) => {
        if (question.id === questionId) {
          state[index].answers.push({
            id: Date.now(),
            name,
            isTrue,
          })
        }
      })
    }
  }
});

export type questionsState = ReturnType<typeof questionSlice.reducer>;
export default questionSlice.reducer;
export const {addNameQuestion, addAnswer} = questionSlice.actions;