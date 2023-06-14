import { VideoDetail } from "@/api/modules/video/interface"

interface FeedVideoItemProps {
    videoItem: VideoDetail
}

const FeedVideoItem: React.FC<FeedVideoItemProps> = (props) => {
    const { videoItem } = props
    return (
        <div className="flex cursor-pointer">
            <div className="flex-1 overflow-hidden mr-5">
                <h3 className=" text-base text-gray-900">{videoItem.title}</h3>
                <p className=" text-xs text-gray-700 text-show-2row mt-2">
                    {videoItem.desc}
                </p>
            </div>
            <div style={{ width: 160, height: 90 }} className=" rounded overflow-hidden">
                <img src={videoItem.poster} className="w-full h-full" />
            </div>
        </div>
    )
}
export default FeedVideoItem