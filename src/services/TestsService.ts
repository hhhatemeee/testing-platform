import { AxiosResponse } from "axios";

import api from "../api";
import { ITest } from "../types";
import { IFetchTest } from "../types/response";

export default class TestsService{
  static fetchTests():Promise<AxiosResponse<IFetchTest[]>>{
    return api.get<IFetchTest[]>('/variant/variants');
  }
  
  static uploadTest(test: ITest):Promise<AxiosResponse<IFetchTest>>{
    return api.post<IFetchTest>('/variant/upload',{...test});
  }
}