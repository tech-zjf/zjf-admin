import { AxiosInstance } from "axios";

export class UploadApi {
  axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async uploadImg(params: FormData): Promise<any> {
    const { data } = await this.axios.post(`/upload`, params, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  }
}
