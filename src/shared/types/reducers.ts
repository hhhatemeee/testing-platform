import { Question, Test } from "./common";

export type AddTestPayload = {
  name: string;
};

export type AddQuestionPayload = {
  question: Question;
};

export type AddAnswerPayload = {
  name: string;
  questionId: number;
  isTrue: boolean;
};

export type SetAuthPayload = {
  isAuth: boolean;
  username?: string;
  password?: string;
};

export type UserReducerState = {
  id: null | number;
  username: null | string;
  lastName: null | string;
  firstName: null | string;
};

export type FetchTestPayload = {
  data: Test[];
};

export type UploadTestPayload = {
  isUploading: boolean;
  test?: Test;
};

export type AddNameQuestionPayload = {
  name: string;
};

export type FetchTestsReducerState = {
  isUploading: boolean;
  tests: Test[];
};
