import CreateTime from "@/components/widget/create-time";
import LikeIcon from "@/components/widget/like";
import ViewIcon from "@/components/widget/view";
import { Avatar } from "antd";
import ViewInput from "./view-input";
import { ViewItemResponse } from "@/api/modules/views/interface";
import { noop } from "@/constant";
import { useCallback } from "react";

interface ViewItemProps {
    item: ViewItemResponse;
}

const ViewItem: React.FC<ViewItemProps> = (props) => {
    const { item } = props;

    const onCreateView = (params: any) => {
        console.log(params)
    }

    const FormatNickname = useCallback(() => {
        if (item.parentAuthor) {
            return (
                <p>"{item.author.nickname}"<span className=" text-sm text-gray-700 px-4">回复</span>"{item.parentAuthor.nickname}"</p>
            )
        }
        return <p>{item.author.nickname}</p>
    }, [])

    return (
        <>
            <div className="flex my-6">
                <div>
                    <Avatar src={item?.author?.wechatAvatarUrl} shape="circle" size={32} />
                </div>
                <div className="ml-4 flex-1 overflow-hidden">
                    <div className="text-md font-medium text-gary-900 h-8 flex items-center">
                        <FormatNickname />
                    </div>
                    <div className="mt-2 text-gray-900 text-sm">
                        {item?.content}
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <CreateTime createTime={item?.createTime} />
                        <div className=" flex items-center">
                            <div className="mr-6">
                                <LikeIcon isLike={item?.isLike} likeCount={item?.likeCount} onToggleLikeStatus={noop} />
                            </div>
                            <div>
                                <ViewIcon viewCount={item?.viewCount} onClick={noop} />
                            </div>
                        </div>
                    </div>
                    {
                        item.active && (
                            < div className="mt-6">
                                <ViewInput onCreateView={onCreateView} />
                            </div>
                        )
                    }
                </div>
            </div>

        </>
    );
};

export default ViewItem;
