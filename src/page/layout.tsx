import { Suspense, useEffect, useMemo, useState } from 'react';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Tabs from '../components/global/tabs';
import Icon from '../components/widget/icon';
import Notification from '@/components/widget/notification'
import { Avatar } from 'antd';
import Loading from '@/components/widget/loading';
import { getUserInfo } from '@/libs/storage';
import { AuthorDetailResponse } from '@/api/modules/user/interface';
import ToggleThemeBtn from '@/components/widget/toggle-theme-btn';

export enum HomeHeaderTabsEnum {
    HOME = "home",
    ARTICLE = "article",
    VIDEO = "video",
    POST = "post",
}

const tabs = [
    {
        key: HomeHeaderTabsEnum.HOME,
        label: '首页',
        path: '/',
    },
    {
        key: HomeHeaderTabsEnum.ARTICLE,
        label: '图文',
        path: '/article',
    },
    {
        key: HomeHeaderTabsEnum.VIDEO,
        label: '视频',
        path: '/video',
    },
    {
        key: HomeHeaderTabsEnum.POST,
        label: '帖子',
        path: '/post',
    }
]
const LayoutPage: React.FC = () => {
    const [defaultTab, setDefaultTab] = useState<string>(HomeHeaderTabsEnum.HOME)
    const navigate = useNavigate();

    /** 用户信息 */
    const userInfo: AuthorDetailResponse = useMemo(() => getUserInfo(), [])

    const location = useLocation();

    useEffect(() => {
        const currentTab = tabs.find(tab => tab.path === location.pathname)
        if (currentTab) {
            setDefaultTab(currentTab.key)
        } else {
            setDefaultTab('')
        }
    }, [location]);

    return (
        <div className='w-full h-full flex flex-col'>
            <header className='w-full border-b  border-gray-200 dark:border-gray-900 dark:bg-black'>
                <div style={{ width: 1440 }} className='flex mx-auto items-center px-10'>
                    <div className='h-full flex items-center mr-20 '>
                        <Icon type="icon-Blog" className='text-4xl mr-3 flex items-center' />
                        <p className=' font-bold text-gray-900 dark:text-white text-xl'>个人博客</p>
                    </div>
                    <Tabs
                        value={defaultTab}
                        items={tabs}
                        onChange={(key) => {
                            const navItem = tabs.find(v => v.key == key)
                            navigate(navItem?.path || '/')
                        }}
                    />
                    <div className='ml-auto'>
                        <div className='flex items-center'>
                            <Notification count={9} />
                            <Avatar src={userInfo.wechatAvatarUrl}
                                shape='circle'
                                className="w-10 h-10"
                            />
                        </div>
                    </div>
                </div>
            </header>
            <div className=" w-full flex-1 overflow-y-auto dark:bg-black">
                <div className='mx-auto h-full' style={{ width: 1200 }}>
                    <Suspense
                        fallback={<Loading />}
                    >
                        <Outlet />
                    </Suspense>
                </div>
            </div>
            <ToggleThemeBtn />
        </div>
    )
}
export default LayoutPage