import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddAnswerPayload, AddNameQuestionPayload, AddQuestionPayload, Question } from "../../../shared/types";


const initialState: Question[] = [
  {
    id: 0,
    topic: '',
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
    topic: '',
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
    topic: '',
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
  reducers: {
    addQuestion(state, action: PayloadAction<AddQuestionPayload>){
      const {question} = action.payload;
      
      state.push(question);
    },
    addNameQuestion(state, action: PayloadAction<AddNameQuestionPayload>) {
      const { name } = action.payload;

      state.push({
        id: Date.now(),
        topic: '',
        name,
        answers: []
      })
    },
    addAnswer(state, action: PayloadAction<AddAnswerPayload>) {
      const { name, isTrue, questionId } = action.payload;

      state.forEach((question: Question, index) => {
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
export const { addNameQuestion, addAnswer,addQuestion } = questionSlice.actions;
