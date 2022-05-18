import { IQuestion } from "../../types";

export interface AuthResponse{
  success: boolean,
  token: string,
};

export interface IFetchUser {
  id: number,
  username: string,
  firstName: string,
  lastName: string,
}

export interface IFetchTest{
  id: string;
  name: string;
  questions: IQuestion[];
}