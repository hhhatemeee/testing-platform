import { AxiosResponse } from "axios";
import api from "../api";
import { AuthResponse } from "../types/response";
import { ILoginPayload } from "./types";

export default class AuthService {
  static async login({username, password}: ILoginPayload):Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/auth/login', {username, password})
  }
  
  static async registration(
    username: string,
    firstName: string,
    lastName: string,
    password: string,
    confirmPassword: string,
    ):Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/auth/registration', {username, firstName,lastName, password, confirmPassword})
  }
}