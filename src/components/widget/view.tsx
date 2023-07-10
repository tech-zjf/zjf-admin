import Icon from "./icon"

interface ViewIconProps {
    viewCount: number,
    onClick: () => void
}

const ViewIcon: React.FC<ViewIconProps> = (props) => {
    const { viewCount, onClick } = props
    return (
        <div className="flex items-center text-gray-900 cursor-pointer" onClick={onClick}>
            <Icon type="icon-pinglun" className=" flex items-center mr-1" />
            <p className="text-xs ">{viewCount || '评论'}</p>
        </div>
    )
}
export default ViewIcon