import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

interface ViewInputProps {
    onCreateView: (params: any) => void
}

const ViewInput: React.FC<ViewInputProps> = (props) => {
    const { onCreateView } = props

    const [viewStep, setViewStep] = useState({
        content: '',
        pics: [],
    })

    return (
        <div>
            <TextArea
                rows={4}
                onChange={(e) => {
                    const str = e.target.value
                    setViewStep({ ...viewStep, content: str })
                }}
            />
            <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center text-sm">
                    <p>图片上传</p>
                </div>
                <div className="flex items-center">
                    <Button
                        onClick={() => {
                            onCreateView(viewStep)
                        }}
                    >
                        发布
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default ViewInput;
