import { Fragment, useEffect } from "react";
import ViewChild from "./view-child";
import ViewItem from "./view-item";

interface ViewsProps {
  className?: string;
  items: any[];
}

const Views: React.FC<ViewsProps> = (props) => {
  const { items } = props;
  useEffect(() => {
    console.log(items)
  }, [])
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
    </>
  );
};
export default Views;
