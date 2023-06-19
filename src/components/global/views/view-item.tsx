import CreateTime from "@/components/widget/create-time";
import LikeIcon from "@/components/widget/like";
import ViewIcon from "@/components/widget/view";
import { Avatar } from "antd";
import Views from ".";
import ViewInput from "./view-input";
import { ViewItemResponse } from "@/api/modules/views/interface";

interface ViewItemProps {
  item: ViewItemResponse;
}

const ViewItem: React.FC<ViewItemProps> = (props) => {
  const { item } = props;
  return (
    <>
      <div className="flex my-6">
        <div>
          <Avatar src={item.author.wechatAvatarUrl} shape="circle" size={32} />
        </div>
        <div className="ml-4">
          <p className="text-md font-medium text-gary-900 h-8 flex items-center">
            {item.author.nickname}
          </p>
          <div className="mt-2 text-gray-900 text-sm">
            阻塞IO怎么是第一个大错误？
            虽然很多时候是需要异步处理，但也有很多不需要异步处理的啊。它提供了这些个方法，就表示他有使用的场景。请不要以偏盖全。
            不管什么代码，只有合理的使用，都是重要的。
          </div>
          <div className="flex items-center justify-between mt-3">
            <CreateTime createTime={item.createTime} />
            <div className=" flex items-center">
              <div className="mr-6">
                <LikeIcon isLike={item.isLike} likeCount={item.likeCount} />
              </div>
              <div>
                <ViewIcon viewCount={item.viewCount} />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <ViewInput />
          </div>
          {item?.children?.length && <Views items={item.children} />}
        </div>
      </div>
    </>
  );
};

export default ViewItem;
