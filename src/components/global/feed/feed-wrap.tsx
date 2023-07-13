import { ArticleDetail } from "@/api/modules/article/interface"
import FeedAuthor from "./feed-author"
import { VideoDetail } from "@/api/modules/video/interface"
import { PostDetailResponse } from "@/api/modules/post/interface"
import CreateTime from "@/components/widget/create-time"
import ViewIcon from "@/components/widget/view"
import LikeIcon from "@/components/widget/like"
import FeedArticleItem from "./feed-article-item"
import FeedVideoItem from "./feed-video-item"
import FeedPostItem from "./feed-post-item"
import { Tag, message } from "antd"
import { useNavigate } from "react-router-dom"
import $request from "@/api"
import { GetViewTypeByContentTypeMap, } from "@/api/modules/likes/interface"
import { CONTENT_TYPE } from "@/constant"

export interface FeedWrapProps {
    item: ArticleDetail | VideoDetail | PostDetailResponse,
    onRefreshList: () => void
}

const FeedWrap: React.FC<FeedWrapProps> = (props) => {
    const { item, onRefreshList } = props
    const navigate = useNavigate()

    /** 中心区域组件 */
    const CoreContentCom = () => {
        let com = <></>
        switch (item.type) {
            case CONTENT_TYPE.ARTICLE:
                com = <FeedArticleItem articleItem={item as ArticleDetail} />;
                break;
            case CONTENT_TYPE.VIDEO:
                com = <FeedVideoItem videoItem={item as VideoDetail} />;
                break;
            case CONTENT_TYPE.POST:
                com = <FeedPostItem postItem={item as PostDetailResponse} />;
                break;
        }
        return com;
    }

    /** 跳转到详情页 */
    const toDetailPage = () => {
        const { type, id } = item;
        navigate(`${type}/${id}`)
    }

    /** 
     * 点赞
     */
    const onToggleLikeStatus = async () => {
        const relationType = GetViewTypeByContentTypeMap.get(item.type)
        if (!relationType) {
            message.warning('该类型不支持点赞！')
            return
        }
        if (item.isLike) {
            await $request.like.removeLike({ parentId: item.id, relationType })
        } else {
            await $request.like.addLike({ parentId: item.id, relationType })
        }
        await onRefreshList()
        message.success('ok!')
    }

    return (
        <div className=" py-4 border-b"  >
            <FeedAuthor author={item.author} />
            <div className="mt-4" onClick={toDetailPage}>
                <CoreContentCom />
            </div>
            {
                item?.category?.name && (
                    <div className=" flex items-center cursor-pointer mt-3">
                        <Tag color="orange">{item.category.name}</Tag>
                    </div>
                )
            }
            <div className="flex items-center justify-between mt-3">
                <CreateTime createTime={item.createTime} />
                <div className=" flex items-center">
                    <div className="mr-6">
                        <LikeIcon isLike={item.isLike} likeCount={item.likeCount} onToggleLikeStatus={onToggleLikeStatus} />
                    </div>
                    <div>
                        <ViewIcon
                            viewCount={item.viewCount}
                            onClick={toDetailPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeedWrap