import RichEditor from "@/components/global/rich-editor"
import { getArticleContent } from "@/libs/storage"
import { useState } from "react"
import { Button, Form, Input, Drawer } from 'antd';

const articleFileds = {
    title: '标题',
}

const PublishArticle: React.FC = () => {
    const [content, setContent] = useState<string>('')
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)

    const getDraftContent = () => {
        const articleContent = getArticleContent()
        setContent(articleContent)
    }

    const onFinish = (values: any) => {
        const params = {
            ...values,
            content,
        }
        console.log(params)
    };



    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex justify-end py-3">
                <Button
                    onClick={getDraftContent}
                >
                    草稿
                </Button>
                <Button
                    type='primary'
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
                        setContent(html)
                    }} />
            </div>
            <Drawer
                title="发布文章"
                width={600}
                placement="right"
                onClose={() => {
                    setOpenDrawer(false)
                }}
                open={openDrawer}
            >
                <Form
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    autoComplete="off"
                    layout='vertical'
                >
                    <Form.Item
                        label={articleFileds.title}
                        name="title"
                        rules={[{ required: true, message: '输入标题' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            确认并发布
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </div>
    )
}
export default PublishArticle