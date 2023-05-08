import { Avatar, Badge } from "antd"

const Notification: React.FC = () => {
    return (
        <div>
            <Badge count={5}>
                <Avatar shape="square" size="large" />
            </Badge>
        </div>
    )
}
export default Notification