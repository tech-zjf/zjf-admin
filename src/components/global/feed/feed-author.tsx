import { AuthorDetailResponse } from "@/api/module/user/interface"
import { Avatar } from "antd"

export interface FeedAuthorProps {
    author: AuthorDetailResponse
}

const FeedAuthor: React.FC<FeedAuthorProps> = () => {
    return (
        <div>
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
        </div>
    )
}
export default FeedAuthor