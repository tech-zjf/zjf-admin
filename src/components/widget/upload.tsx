import $request from "@/api";
import { RcFile } from "antd/es/upload";
import Dragger from "antd/es/upload/Dragger";
import { Image } from "antd";

interface CustomUploadComProps {
    onChange?: (url: string) => void;
    value?: string;
}

/** 
 * 图片上传组件 
 */
const CustomUploadCom: React.FC<CustomUploadComProps> = (props) => {
    const { onChange, value } = props;

    const beforeUpload = async (file: RcFile) => {
        const formData = new FormData();
        formData.append("image", file);
        const url = await $request.upload.uploadImg(formData);
        onChange?.(url);
    };

    return (
        <Dragger beforeUpload={beforeUpload} showUploadList={false}>
            {value ? (
                <Image width={200} src={value} preview={false} />
            ) : (
                <p className="ant-upload-text">点击或者拖拽上传</p>
            )}
        </Dragger>
    );
};
export default CustomUploadCom;
