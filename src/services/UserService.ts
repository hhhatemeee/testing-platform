import { AxiosResponse } from "axios";

import api from "../api";
import { FetchUser } from "../shared/types";

export default class UserService{
  static fetchUser():Promise<AxiosResponse<FetchUser>>{
    return api.get<FetchUser>('/user/');
  }
}