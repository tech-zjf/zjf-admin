import { AuthorDetailResponse } from "@/api/modules/user/interface"
import { Avatar } from "antd"

export interface FeedAuthorProps {
    author: AuthorDetailResponse
}

const FeedAuthor: React.FC<FeedAuthorProps> = (props) => {
    const { author } = props
    return (
        <div className="flex items-center cursor-pointer" >
            <Avatar src={author.wechatAvatarUrl}
                shape='circle'
                className="w-8 h-8 mr-2"
            />
            <p className=" text-xs font-bold text-gary-900">{author.nickname}</p>
        </div>
    )
}
export default FeedAuthor