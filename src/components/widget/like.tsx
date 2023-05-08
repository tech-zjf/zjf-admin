import Icon from "./icon"

interface LikeIconProps {
    likeCount: number,
    isLike: boolean
}

const LikeIcon: React.FC<LikeIconProps> = (props) => {
    const { likeCount, isLike } = props
    return (
        <div className="flex items-center text-gray-900 cursor-pointer">
            {
                isLike ? (
                    <Icon type="icon-dianzan" className=" flex items-center mr-1" />
                ) : (
                    <Icon type="icon-z-like" className=" flex items-center mr-1" />
                )
            }

            <p className="text-xs ">{likeCount || '点赞'}</p>
        </div>
    )
}
export default LikeIcon