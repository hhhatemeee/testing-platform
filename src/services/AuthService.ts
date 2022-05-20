import { AxiosResponse } from "axios";

import api from "../api";
import { LoginPayload, AuthResponse, RegistrationPayload } from "../shared/types";

export default class AuthService {
  static async login({ username, password }: LoginPayload): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/auth/login', { username, password })
  }

  static async registration(payload: RegistrationPayload): Promise<AxiosResponse<AuthResponse>> {
    const { username, firstName, lastName, password, confirmPassword } = payload;
    
    return api.post<AuthResponse>('/auth/registration', { username, firstName, lastName, password, confirmPassword });
  }
}
