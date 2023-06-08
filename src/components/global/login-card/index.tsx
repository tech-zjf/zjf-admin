import $request from "@/api";
import { LoginParams } from "@/api/modules/login/interface";
import { setToken, setUserInfo } from "@/libs/storage";
import { Button, Form, Input, message } from "antd"
import { useNavigate } from "react-router-dom";

const LoginCard: React.FC = () => {
    const navigate = useNavigate();

    const onFinish = async (values: LoginParams) => {
        try {
            const {token,user} = await $request.login.loginByPhone(values)
            message.success('登录成功！')
            setToken(token)
            setUserInfo(user)
            navigate('/')
        } catch (error) { }
    };

    return (
        <div className=" shadow p-5 rounded-md" style={{ width: 300 }}>
            <h2 className=" text-gray-900 text-xl font-semibold  text-center pb-3 mb-5">登录</h2>
            <Form
                name="basic"
                labelCol={{ span: 6 }}
                style={{ maxWidth: 280 }}
                onFinish={onFinish}
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
                    name="code"
                    rules={[{ required: true, message: '请输入密码' }, { pattern: /^\d{4}$/, message: '请输入4位数字的密码！' }]}
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