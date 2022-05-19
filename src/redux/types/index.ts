import { ILoginPayload } from "../../services/types";
import { IQuestion, ITest } from "../../types";

export interface IAddTestPayload {
  name: string;
};

export interface IAddQuestionPayload {
  question: IQuestion;
};


export interface IAddAnswerPayload {
  name: string;
  testId: number;
  questionId: number;
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

export interface IFetchTestPayload {
  data: ITest[],
}

export interface IUploadTestPayload{
  id: number,
  test: ITest, 
}