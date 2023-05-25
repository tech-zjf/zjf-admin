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
import { FeedItemType } from "./constant"
import { Tag } from "antd"

export interface FeedWrapProps {
    item: ArticleDetail | VideoDetail | PostDetailResponse,
}

const FeedWrap: React.FC<FeedWrapProps> = (props) => {
    const { item } = props

    /** 中心区域组件 */
    const CoreContentCom = () => {
        let com = <></>
        switch (item.type) {
            case FeedItemType.ARTICLE:
                com = <FeedArticleItem articleItem={item as ArticleDetail} />;
                break;
            case FeedItemType.VIDEO:
                com = <FeedVideoItem videoItem={item as VideoDetail} />;
                break;
            case FeedItemType.POST:
                com = <FeedPostItem postItem={item as PostDetailResponse} />;
                break;
        }
        return com;
    }

    return (
        <div className=" py-4 border-b">
            <FeedAuthor author={item.author} />
            <div className="mt-4">
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
                        <ViewIcon viewCount={item.viewCount} />
                    </div>
                    <div>
                        <LikeIcon isLike={item.isLike} likeCount={item.likeCount} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeedWrap