import ViewItem from "./view-item";

interface ViewsProps {
  className?: string;
  items: any[];
}

const Views: React.FC<ViewsProps> = (props) => {
  const { className, items } = props;
  return (
    <div>
      {items.map((item) => (
        <ViewItem item={item} key={item.id} />
      ))}
    </div>
  );
};
export default Views;
