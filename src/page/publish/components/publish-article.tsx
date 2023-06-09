import RichEditor from "@/components/global/rich-editor";
import { getArticleContent } from "@/libs/storage";
import { useEffect, useState } from "react";
import { Button, Form, Input, Drawer, Select, message } from "antd";
import $request from "@/api";
import CustomUploadCom from "@/components/widget/upload";
import { useNavigate } from "react-router-dom";

const articleFileds = {
    title: "标题",
    categoryId: "分类",
    poster: "封面",
};

const PublishArticle: React.FC = () => {
    const [content, setContent] = useState<string>("");
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [categoryOptions, setCategoryOptions] = useState<
        { label: string; value: number }[]
    >([]);

    const navigate = useNavigate()

    const getDraftContent = () => {
        const articleContent = getArticleContent();
        setContent(articleContent);
    };

    /** 创建文章 */
    const createArticle = async (values: any) => {
        try {
            if (!content || content.length < 50) {
                message.info('请输入不少于50字的文章内容！')
                return
            }
            const params = {
                ...values,
                content,
            };
            await $request.article.createArticle(params)
            message.success('创建成功')
            navigate('/')
        } catch (error) { }
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
                    onFinish={createArticle}
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
                        label={articleFileds.poster}
                        name="poster"
                        rules={[{ required: true, message: "上传封面" }]}
                    >
                        <CustomUploadCom />
                    </Form.Item>
                    <Form.Item
                        label={articleFileds.categoryId}
                        name="categoryId"
                        rules={[{ required: true, message: "请选择分类..." }]}
                    >
                        <Select options={categoryOptions} placeholder="请选择分类..." />
                    </Form.Item>
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
