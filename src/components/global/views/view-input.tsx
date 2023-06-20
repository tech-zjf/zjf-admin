import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const ViewInput: React.FC = () => {
    const [viewStep, setViewStep] = useState({
        content: '',
        pics: [],
    })

    /** 
     * 创建评论 
     */
    const createView = () => {
    };

    return (
        <div>
            <TextArea rows={4} onChange={(e) => {
                console.log(e)
            }} />
            <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center text-sm">
                    <p>图片上传</p>
                </div>
                <div className="flex items-center">
                    <Button onClick={createView}>发布</Button>
                </div>
            </div>
        </div>
    );
};
export default ViewInput;
