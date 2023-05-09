import { Suspense } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import Tabs from '../components/global/tabs';
import Icon from '../components/widget/icon';
import Notification from '@/components/widget/notification'
import { Avatar } from 'antd';

const tabs = [
    {
        key: "home",
        label: '首页',
        path: '/',
    },
    {
        key: 'article',
        label: '图文',
        path: '/article',
    },
    {
        key: 'video',
        label: '视频',
        path: '/video',
    },
    {
        key: 'post',
        label: '帖子',
        path: '/post',
    }
]
const LayoutPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-full flex flex-col'>
            <header className='w-full border-b border-gray-200'>
                <div style={{ width: 1440 }} className='flex mx-auto items-center'>
                    <div className='h-full flex items-center mr-20 '>
                        <Icon type="icon-Blog" className='text-4xl mr-3 flex items-center' />
                        <p className=' font-bold text-gray-900 text-xl'>个人博客</p>
                    </div>
                    <Tabs
                        defaultKey='home'
                        items={tabs}
                        onChange={(key) => {
                            const navItem = tabs.find(v => v.key == key)
                            navigate(navItem?.path || '/')
                        }}
                    />
                    <div className='ml-auto'>
                        <div className='flex items-center'>
                            <Notification count={9} />
                            <Avatar src='https://p3-passport.byteimg.com/img/user-avatar/5a8ea89f20b9dcee6a4aa4ea6e646a17~100x100.awebp'
                                shape='circle'
                                className="w-10 h-10"
                            />
                        </div>
                    </div>
                </div>
            </header>
            <div className=" w-full flex-1 overflow-y-auto ">
                <div className='mx-auto' style={{ width: 1200 }}>
                    <Suspense fallback={<>loading...</>}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
export default LayoutPage