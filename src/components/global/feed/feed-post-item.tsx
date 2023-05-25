import { PostDetailResponse } from "@/api/modules/post/interface"
import { Image } from 'antd'

interface FeedPostItemProps {
    postItem: PostDetailResponse
}

const FeedPostItem: React.FC<FeedPostItemProps> = (props) => {
    const { postItem } = props
    return (
        <div>
            <p className="text-show-3row text-base text-gray-900 leading-6 cursor-pointer">{postItem.content}</p>
            <div className="flex items-center flex-wrap mt-3">
                <Image.PreviewGroup>
                    {
                        postItem.attachments.map((img, i) => {
                            return (
                                <div className=" mr-2 mb-2 rounded overflow-hidden" key={i}>
                                    <Image width={80} height={80} src={img} />
                                </div>
                            )
                        })
                    }
                </Image.PreviewGroup>
            </div>
        </div>
    )
}
export default FeedPostItem