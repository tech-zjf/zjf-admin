/** 
 * 点赞类型
  */
export enum LikeTypeEnum {
    /** 
     * 文章 
     */
    ARTICLE = 1,
    /** 
     * 视频
     */
    VIDEO = 2,
    /**
     * 帖子
     */
    POST = 3,
    /**
     * 评论
     */
    VIEW = 4
}

export const ViewTypeMap = new Map([
    [LikeTypeEnum.ARTICLE, 'article'],
    [LikeTypeEnum.VIDEO, 'video'],
    [LikeTypeEnum.POST, 'post'],
    [LikeTypeEnum.VIEW, 'view'],
])



export interface AddLikeParams {
    parentId: number,
    relationType: LikeTypeEnum
}

export interface RemoveLikeParams {
    parentId: number,
    relationType: LikeTypeEnum
}