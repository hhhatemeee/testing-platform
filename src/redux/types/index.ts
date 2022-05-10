import { ADD_QUESTION, ADD_TEST } from "./actionsTypes";

export interface IAddTestPayload {
  name: string;
};

export interface IAddTestSuccess {
  type: typeof ADD_TEST;
  payload: IAddTestPayload;
}

export interface IAddQuestionPayload {
  name: string;
  testId: string;
};

export interface IAddQuestionSuccess {
  type: typeof ADD_QUESTION;
  payload: IAddQuestionPayload;
}

export interface IAddAnswerPayload {
  name: string;
  testId: string;
  questionId: string;
};

export interface IAddAnswerSuccess {
  type: typeof ADD_QUESTION;
  payload: IAddAnswerPayload;
}
