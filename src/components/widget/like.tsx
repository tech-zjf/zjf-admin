import Icon from "./icon"

interface LikeIconProps {
    likeCount: number,
    isLike: boolean,
    onToggleLikeStatus: () => void
}

const LikeIcon: React.FC<LikeIconProps> = (props) => {
    const { likeCount, isLike, onToggleLikeStatus } = props
    return (
        <div className="flex items-center text-gray-900 cursor-pointer" onClick={onToggleLikeStatus}>
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