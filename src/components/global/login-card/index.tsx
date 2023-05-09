import { Button, Form, Input } from "antd"
const LoginCard: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className=" shadow p-5 rounded-md" style={{ width: 300 }}>
            <h2 className=" text-gray-900 text-xl font-semibold  text-center pb-3 mb-5">登录</h2>
            <Form
                name="basic"
                labelCol={{ span: 6 }}
                style={{ maxWidth: 280 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout='vertical'
            >
                <Form.Item
                    label="手机号"
                    name="phone"
                    rules={[{ required: true, message: '请输入手机号' }, { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号格式！' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }, { pattern: /^\d{6}$/, message: '请输入6位数字的密码！' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit" className="w-full">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>

    )
}
export default LoginCard