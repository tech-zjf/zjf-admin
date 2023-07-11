import { AxiosInstance } from "axios";
import { CreateView, FindViews, ViewItemResponse, } from "./interface";

class ViewApi {
    axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    /** 评论列表 */
    async getViewList(params: FindViews): Promise<{ list: ViewItemResponse[] }> {
        const { data } = await this.axios.get(`/views`, {
            params,
        });
        return data;
    }


    /** 创建评论 */
    async createView(params: CreateView): Promise<{ viewId: number }> {
        const { data } = await this.axios.post(`/views`, {
            ...params,
        });
        return data;
    }
}

export default ViewApi;
