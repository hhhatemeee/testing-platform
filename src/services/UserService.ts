import api from "../api";
import { IUser } from "../types";

export default class UserService{
  static fetchUsers(){
    return api.get<IUser>('/user');
  }
}