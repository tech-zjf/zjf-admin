import { AxiosInstance } from "axios";
import { CategoryDetail } from "./interface";

export class CategoryApi {
  axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  /** 获取分类列表 */
  async getCategoryList(): Promise<CategoryDetail[]> {
    const { data } = await this.axios.get("/category");
    return data;
  }
}
