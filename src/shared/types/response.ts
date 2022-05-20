import { Test } from "./common";

export type IFetchTest = {} & Test;

export type AuthResponse = {
  success: boolean;
  token: string;
};

export type FetchUser = {
  id: number;
  username: string;
  lastName: string;
  firstName: string;
};
