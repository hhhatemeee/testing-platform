import { AxiosResponse } from "axios";

import api from "../api";
import { IFetchTest, Test } from "../shared/types";

export default class TestsService{
  static fetchTests():Promise<AxiosResponse<IFetchTest[]>>{
    return api.get<IFetchTest[]>('/variant/variants');
  }
  
  static uploadTest(test: Test):Promise<AxiosResponse<Test>>{
    return api.post<Test>('/variant/upload',{...test});
  }
}