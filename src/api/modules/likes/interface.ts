import { CONTENT_TYPE } from "@/constant"

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


/** 
 * 根据内容类型获取点赞关联类型 article: 1
 */
export const GetViewTypeByContentTypeMap = new Map([
    [CONTENT_TYPE.ARTICLE, LikeTypeEnum.ARTICLE],
    [CONTENT_TYPE.VIDEO, LikeTypeEnum.VIDEO],
    [CONTENT_TYPE.POST, LikeTypeEnum.POST],
    [CONTENT_TYPE.VIEW, LikeTypeEnum.VIEW],
])



export interface AddLikeParams {
    parentId: number,
    relationType: LikeTypeEnum
}

export interface RemoveLikeParams {
    parentId: number,
    relationType: LikeTypeEnum
}