import { Fragment } from "react";
import ViewChild from "./view-child";
import ViewItem from "./view-item";
import { Empty } from "antd";

interface ViewsProps {
  className?: string;
  items: any[];
}

const Views: React.FC<ViewsProps> = (props) => {
  const { items } = props;

  return (
    <>
      {items.map((item) => (
        <Fragment key={item.id}>
          <ViewItem item={item} />
          {!!item?.child?.length && (
            <div className="ml-12">
              <ViewChild items={item.child} />
            </div>
          )}
        </Fragment>
      ))}
      {
        !(!!items.length) && (
          <div className="py-10 h-full flex items-center justify-center">
            <Empty description="暂无数据 ~ " />
          </div>
        )
      }
    </>
  );
};
export default Views;
