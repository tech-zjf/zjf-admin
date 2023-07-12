import { ArticleDetail } from "@/api/modules/article/interface"

interface FeedArticleItemProps {
    articleItem: ArticleDetail
}

const FeedArticleItem: React.FC<FeedArticleItemProps> = (props) => {
    const { articleItem } = props
    return (
        <div className="flex cursor-pointer">
            <div className="flex-1 overflow-hidden mr-5">
                <p className="text-base text-gray-900 leading-6 text-show-2row">
                    {articleItem.title}
                </p>
            </div>
            <div
                style={{ width: 160, height: 90 }}
                className=" rounded overflow-hidden"
            >
                <img src={articleItem.poster} className="w-full h-full" />
            </div>
        </div>
    )
}
export default FeedArticleItem