import { ILoginPayload } from "../../services/types";

export interface IAddTestPayload {
  name: string;
};

export interface IAddQuestionPayload {
  name: string;
  testId: string;
};


export interface IAddAnswerPayload {
  name: string;
  testId: string;
  questionId: string;
};

export interface ISetAuthPayload{
  isAuth: boolean,
  username?:string,
  password?: string,
};

export interface IUserState {
  id: number | null,
  username: string | null,
  firstName: string | null,
  lastName: string | null,
};