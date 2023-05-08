import { AxiosInstance } from "axios";
import { VideoDetail } from "./interface";

class VideoApi {
  axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  /** 视频列表 */
  async getVideoList(params: any): Promise<VideoDetail[]> {
    const { data } = await this.axios.get(`/video/list`, {
      params,
    });
    return data;
  }

  /** 视频详情 */
  async getVideoDetail(id: number): Promise<VideoDetail> {
    const { data } = await this.axios.get(`/video/${id}`);
    return data;
  }
}

export default VideoApi;
