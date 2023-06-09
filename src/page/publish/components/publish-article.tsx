import RichEditor from "@/components/global/rich-editor";
import { getArticleContent } from "@/libs/storage";
import { useEffect, useState } from "react";
import { Button, Form, Input, Drawer, Select } from "antd";
import $request from "@/api";
import Dragger from "antd/es/upload/Dragger";
import { RcFile } from "antd/es/upload";

const articleFileds = {
    title: "标题",
    categoryId: "分类",
};

const PublishArticle: React.FC = () => {
    const [content, setContent] = useState<string>("");
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [categoryOptions, setCategoryOptions] = useState<
        { label: string; value: number }[]
    >([]);

    const getDraftContent = () => {
        const articleContent = getArticleContent();
        setContent(articleContent);
    };

    const onFinish = (values: any) => {
        const params = {
            ...values,
            content,
        };
        console.log(params);
    };

    /** 获取分类列表 */
    const getCategoryOptions = async () => {
        const list = await $request.category.getCategoryList();
        const options = list.map((v) => ({ label: v.name, value: v.id }));
        setCategoryOptions(options);
    };

    useEffect(() => {
        getCategoryOptions();
    }, []);

    const beforeUpload = async (file: RcFile) => {
        const formData = new FormData();
        formData.append('image', file); 
        const data = await $request.upload.uploadImg(formData)
        console.log(data)
    };

    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex justify-end py-3">
                <Button onClick={getDraftContent}>草稿</Button>
                <Button
                    type="primary"
                    className="ml-6"
                    onClick={() => setOpenDrawer(true)}
                >
                    发布
                </Button>
            </div>
            <div className="w-full flex-1 pb-3  overflow-hidden">
                <RichEditor
                    value={content}
                    onChange={(html) => {
                        setContent(html);
                    }}
                />
            </div>
            <Drawer
                title="发布文章"
                width={600}
                placement="right"
                onClose={() => {
                    setOpenDrawer(false);
                }}
                open={openDrawer}
            >
                <Form
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item
                        label={articleFileds.title}
                        name="title"
                        rules={[{ required: true, message: "请输入标题..." }]}
                    >
                        <Input placeholder="请输入标题..." />
                    </Form.Item>
                    <Form.Item
                        label={articleFileds.categoryId}
                        name="category"
                        rules={[{ required: true, message: "请选择分类..." }]}
                    >
                        <Select options={categoryOptions} placeholder="请选择分类..." />
                    </Form.Item>
                    <Dragger beforeUpload={beforeUpload} showUploadList={false}>
                        <p className="ant-upload-text">
                            点击或者拖拽上传
                        </p>
                    </Dragger>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            确认并发布
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </div>
    );
};
export default PublishArticle;
