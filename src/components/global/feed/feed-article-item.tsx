import { ArticleDetail } from "@/api/module/article/interface"

interface FeedArticleItemProps {
    articleItem: ArticleDetail
}

const FeedArticleItem: React.FC<FeedArticleItemProps> = (props) => {
    const { articleItem } = props
    return (
        <div className="flex">
            <div className="flex-1 overflow-hidden mr-5">
                <h2 className=" text-base text-gray-900">{articleItem.title}</h2>
                <p className=" text-xs text-gray-700 text-show-2row mt-2">
                    {articleItem.content}
                </p>
            </div>
            <div style={{ width: 160, height: 90 }} className=" rounded overflow-hidden">
                <img src={articleItem.poster} className="w-full h-full" />
            </div>
        </div>
    )
}
export default FeedArticleItem