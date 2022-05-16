import { ILoginPayload } from "../../services/types";
import { ADD_QUESTION, ADD_TEST, SET_AUTH } from "./actionsTypes";

export interface IAddTestPayload {
  name: string;
};

export interface IAddTestSuccess {
  type: typeof ADD_TEST;
  payload: IAddTestPayload;
};

export interface IAddQuestionPayload {
  name: string;
  testId: string;
};

export interface IAddQuestionSuccess {
  type: typeof ADD_QUESTION;
  payload: IAddQuestionPayload;
};

export interface IAddAnswerPayload {
  name: string;
  testId: string;
  questionId: string;
};

export interface IAddAnswerSuccess {
  type: typeof ADD_QUESTION;
  payload: IAddAnswerPayload;
};

export interface ISetAuthPayload{
  isAuth: boolean,
  username?:string,
  password?: string,
};

export interface ISetAuthSuccess{
  type: typeof SET_AUTH,
  payload: ISetAuthPayload,
};

export interface IUserState {
  id: number | null,
  username: string | null,
  firstName: string | null,
  lastName: string | null,
};