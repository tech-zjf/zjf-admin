import { AxiosInstance } from "axios";
import { AddLikeParams, RemoveLikeParams } from "./interface";

class LikeApi {
    axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    /** 点赞 */
    async addLike(params: AddLikeParams): Promise<boolean> {
        const { data } = await this.axios.post(`/likes`, {
            ...params,
        });
        return data;
    }

    /** 取消点赞 */
    async removeLike(params: RemoveLikeParams): Promise<boolean> {
        const { data } = await this.axios.delete(`/likes`, {
            params
        });
        return data;
    }
}

export default LikeApi;
