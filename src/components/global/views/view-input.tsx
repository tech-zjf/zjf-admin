import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useState } from "react";

const ViewInput: React.FC = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

  const onEmojiSelect = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      <TextArea rows={4} />
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center text-sm">
          <div className="mr-6 relative">
            <p
              className=" text-xl flex items-center cursor-pointer"
              onClick={() => {
                setShowEmojiPicker(!showEmojiPicker);
              }}
            >
              😊
              <span className="text-sm ml-1">表情</span>
            </p>
            <div
              className={`${
                showEmojiPicker ? "block" : "hidden"
              } absolute top-8 left-0 z-10`}
            >
              <Picker data={data} onEmojiSelect={onEmojiSelect} />
            </div>
          </div>
          <p>图片上传</p>
        </div>
        <div className="flex items-center">
          <Button>发布</Button>
        </div>
      </div>
    </div>
  );
};
export default ViewInput;
