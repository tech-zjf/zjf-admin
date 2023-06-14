import { memo, useMemo } from "react";
import Icon from "./icon";
import moment from 'moment'

interface CreateTimeProps {
    createTime: string
}

const CreateTime: React.FC<CreateTimeProps> = (props) => {
    const { createTime } = props

    const formattedTime = useMemo(() => moment(createTime).format('YYYY-MM-DD HH:mm:ss'), [])

    return (
        <div className="flex items-center text-gray-900">
            <Icon type="icon-time" className="text-base mr-1 flex items-center" />
            <p className="  text-xs">{formattedTime}</p>
        </div>
    )
}
export default memo(CreateTime);