import Icon from "./icon";

interface CreateTimeProps {
    createTime: string
}

const CreateTime: React.FC<CreateTimeProps> = (props) => {
    const { createTime } = props
    return (
        <div className="flex items-center text-gray-900">
            <Icon type="icon-time" className="text-base mr-1 flex items-center" />
            <p className="  text-xs">{createTime}</p>
        </div>
    )
}
export default CreateTime;