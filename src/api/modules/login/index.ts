import { AxiosInstance } from "axios";
import { LoginParams, LoginResponse } from "./interface";

export class LoginApi {
  axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async loginByPhone(loginParams: LoginParams): Promise<LoginResponse> {
    const  {data}  = await this.axios.post("/auth/phone", {
      ...loginParams,
    });
    return data;
  }
}
