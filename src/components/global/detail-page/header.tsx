import { CategoryDetail } from "@/api/modules/category/interface";
import { AuthorDetailResponse } from "@/api/modules/user/interface";
import CreateTime from "@/components/widget/create-time";
import { Avatar, Tag } from "antd";
import { ReactNode, memo } from "react";

interface DetailPageHeaderProps {
  author: AuthorDetailResponse;
  category: CategoryDetail;
  createTime: string;
  rightSlot?: ReactNode;
}

const DetailPageHeader: React.FC<DetailPageHeaderProps> = (props) => {
  const { author, category, rightSlot, createTime } = props;
  return (
    <div className=" mt-6 pb-4 border-b">
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <Avatar src={author?.wechatAvatarUrl} shape="circle" size={40} />
          <p className=" text-xl font-bold text-gary-900 ml-4">
            {author?.nickname}
          </p>
        </div>
        {rightSlot}
      </div>
      <div className=" mt-4 flex items-center justify-between">
        <Tag color="orange">{category?.name}</Tag>
        <CreateTime createTime={createTime} />
      </div>
    </div>
  );
};
export default memo(DetailPageHeader);
