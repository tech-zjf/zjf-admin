import { Spin, SpinProps } from "antd"

export interface LoadingProps extends SpinProps { }

const Loading: React.FC<LoadingProps> = ({ ...rest }) => {
    return (
        <div className="flex items-center justify-center ">
            <Spin {...rest} />
        </div>
    )
}
export default Loading