import { AnyAction } from "redux";
import { uuid } from "../../../helpers";
import { IQuestion, ITest } from "../../../types";
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


export default function tests(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ADD_TEST:
      return [
        ...state,
        {
          id: uuid(),
          questions: [],
          name: action.payload.name,
        }
      ]
    case ADD_QUESTION:
      return state.map((test: ITest) => {
        if (test.id === action.payload.testId) {
          return {
            ...test,
            questions: [...test.questions, {
              id: uuid(),
              name: action.payload.name,
              answers: [],
            }]
          }
        }
        return test;
      })
    case ADD_ANSWER:
      return state.map((test: ITest) => {
        if (test.id === action.payload.testId) {
          return {
            ...test,
            questions: test.questions.map((ques: IQuestion) => {
              if (ques.id === action.payload.questionId) {
                return {
                  ...ques,
                  answers: [...ques.answers, {
                    id: uuid(),
                    name: action.payload.name,
                    isTrue: false,
                  }]
                }
              }

              return ques;
            })
          }
        }

        return test;
      })

  }
  return state;
}