import { AxiosResponse } from "axios";

import api from "../api";
import { IFetchUser } from "./types";

export default class UserService{
  static fetchUser():Promise<AxiosResponse<IFetchUser>>{
    return api.get<IFetchUser>('/user/');
  }
}