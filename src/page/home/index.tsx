import PublishCard from "@/components/global/publish-card"
import LeftMenu from "./components/left-menu/left-menu"
import Tabs from "@/components/global/tabs"
import { HomeLeftMenus, HomeLeftMenutabsEnum, HomeMainTabs } from "./constant"
import FeedWrap from "@/components/global/feed/feed-wrap"
import { useEffect, useRef, useState } from "react"
import { HomeFeedList, OrderByEnum, OrderEnum } from "@/api/interface"
import $request from "@/api"
import { Empty } from "antd"

const mockFeed = [
    {
        id: 1,
        type: 'article',
        author: {
            nickname: '张三',
            age: 12,
            uid: 1,
            wechatAvatarUrl: 'https://p3-passport.byteimg.com/img/user-avatar/5a8ea89f20b9dcee6a4aa4ea6e646a17~100x100.awebp',
            phone: 17683835692,
            gender: 1
        },
        title: '进度条告急！抓紧报名「掘金技术引力榜2023」',
        content: '这是一篇文章啊这是一篇文章啊这是一篇文章啊这是一篇文章啊这是一篇文章啊这是一篇文章啊这是一篇文章啊这是一篇文章啊这是一篇文章啊这是一篇文章啊这是一篇文章啊这是一篇文章啊这是一篇文章啊这是一篇文章啊这是一篇文章啊这是一篇文章啊这是一篇文章啊这是一篇文章啊',
        createTime: '2023-05-08 12:40:12',
        isLike: false,
        viewCount: 12,
        likeCount: 0,
        poster: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2faa95eac98486d9d44c7ff5e5abad0~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
    },
    {
        id: 2,
        type: 'post',
        author: {
            nickname: '李四',
            age: 12,
            uid: 1,
            wechatAvatarUrl: 'https://p3-passport.byteimg.com/img/user-avatar/7cac44e91df36585eb297a0d94b93d31~100x100.awebp',
            phone: 17683835692,
            gender: 1
        },
        content: '这是帖子内容啊这是帖子内容啊这是帖子内容啊这是帖子内容啊这是帖子内容啊这是帖子内容啊这是帖子内容啊这是帖子内容啊这是帖子内容啊这是帖子内容啊这是帖子内容啊这是帖子内容啊这是帖子内容啊这是帖子内容啊这是帖子内容啊',
        createTime: '2023-05-08 12:40:12',
        isLike: false,
        viewCount: 12,
        likeCount: 99,
        attachments: [
            "https://upload.42how.com/topic/jtCa74_1260367_1683537121059.jpg",
            'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2faa95eac98486d9d44c7ff5e5abad0~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2faa95eac98486d9d44c7ff5e5abad0~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            "https://upload.42how.com/topic/jtCa74_1260367_1683537121059.jpg",
            'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2faa95eac98486d9d44c7ff5e5abad0~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2faa95eac98486d9d44c7ff5e5abad0~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
            "https://upload.42how.com/topic/jtCa74_1260367_1683537121059.jpg",
        ]
    },
    {
        id: 3,
        type: 'video',
        author: {
            nickname: '王二麻子',
            age: 12,
            uid: 1,
            wechatAvatarUrl: 'https://p3-passport.byteimg.com/img/user-avatar/21d781038fbf3c5e5ef6ec8db2f3443a~100x100.awebp',
            phone: 17683835692,
            gender: 1
        },
        title: '这是视频标题啊',
        desc: '这是视频描述啊这是视频描述啊这是视频描述啊这是视频描述啊这是视频描述啊这是视频描述啊这是视频描述啊这是视频描述啊这是视频描述啊这是视频描述啊这是视频描述啊这是视频描述啊',
        createTime: '2023-05-08 12:40:12',
        isLike: true,
        viewCount: 12,
        likeCount: 99,
        poster: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2faa95eac98486d9d44c7ff5e5abad0~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
        video: ''
    }
]

const HomePage: React.FC = () => {
    const [leftMenuValue, setLeftMenuValue] = useState<HomeLeftMenutabsEnum>(HomeLeftMenutabsEnum.ARTICLE)
    const [step, setStep] = useState({ page: 1, pageSize: 10, orderBy: OrderByEnum.CREATE_TIME, order: OrderEnum.DESC })
    const [feedList, setFeedList] = useState<HomeFeedList>([])
    const [isLoadMore, setIsLoadMore] = useState(true)

    /** 获取文章列表 */
    const getArticleList = async () => {
        const data = await $request.article.getArticleList(step)
        return data
    }
    /** 获取视频列表 */
    const getVideoList = async () => {
        return []
    }
    /** 获取帖子列表 */
    const getPostList = async () => {
        return []
    }

    const getFeedList = async () => {
        let list: HomeFeedList = []
        if (leftMenuValue === HomeLeftMenutabsEnum.ARTICLE) {
            list = await getArticleList()
        }
        if (leftMenuValue === HomeLeftMenutabsEnum.VIDEO) {
            list = await getVideoList()
        }
        if (leftMenuValue === HomeLeftMenutabsEnum.POST) {
            list = await getPostList()
        }
        setIsLoadMore(list.length == step.pageSize)
        setFeedList(list)
    }

    useEffect(() => {
        getFeedList()
    }, [leftMenuValue, step])


    return (
        <div className=" grid grid-cols-5 gap-5 py-10 h-full">
            <div className=" col-span-1">
                <LeftMenu
                    items={HomeLeftMenus}
                    value={leftMenuValue}
                    onChange={setLeftMenuValue}
                />
            </div>
            <div className=" col-span-3 border px-3">
                <div className="border-b">
                    <Tabs
                        value={OrderByEnum.CREATE_TIME}
                        items={HomeMainTabs}
                        space={24}
                        onChange={(key) => {
                            setStep({ ...step, orderBy: key as OrderByEnum })
                        }}
                    />
                </div>
                <div>
                    {
                        feedList.map(item => <FeedWrap item={item} key={item.id} />)
                    }
                </div>
                {
                    !(!!feedList.length) && (
                        <div className="py-10 h-full flex items-center justify-center">
                            <Empty description="暂无数据 ~ " />
                        </div>
                    )
                }
                {
                    !isLoadMore && !!feedList.length && (
                        <p className="text-center text-gray-700 text-sm mt-4">
                            没有更多啦
                        </p>
                    )
                }
            </div>
            <div className=" col-span-1 px-3">
                <PublishCard />
            </div>
        </div>
    )
}
export default HomePage