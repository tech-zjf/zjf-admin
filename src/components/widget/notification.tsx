import { Badge } from "antd"
import Icon from "./icon"

interface NotificationProps {
    count: number
}

const Notification: React.FC<NotificationProps> = (props) => {
    const { count } = props
    return (
        <Badge count={count} className="mr-6 cursor-pointer" size="small">
            <Icon type="icon-tongzhi" className=" text-2xl flex items-center" />
        </Badge>
    )
}
export default Notification