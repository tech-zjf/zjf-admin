import PublishCard from "@/components/global/publish-card"
import LeftMenu from "./components/left-menu/left-menu"
import Tabs from "@/components/global/tabs"
import { HomeLeftMenus, HomeLeftMenutabsEnum, HomeMainTabs } from "./constant"
import FeedWrap from "@/components/global/feed/feed-wrap"
import { useCallback, useEffect, useState } from "react"
import { HomeFeedList, OrderByEnum, OrderEnum } from "@/api/interface"
import $request from "@/api"
import { Empty } from "antd"
import HomeContext from "./home-context"



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

    /** 刷新列表 */
    const onRefreshList = useCallback(() => {
        getFeedList()
    }, [leftMenuValue, step])

    return (
        <HomeContext.Provider value={{
            onRefreshList
        }}>

            <div className="grid grid-cols-5 gap-5 py-10 h-full">
                <div className=" col-span-1">
                    <LeftMenu
                        items={HomeLeftMenus}
                        value={leftMenuValue}
                        onChange={setLeftMenuValue}
                    />
                </div>
                <div className=" col-span-3 border px-3 pb-10 mb-10">
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
                            feedList.map(item => (
                                <FeedWrap
                                    item={item}
                                    key={item.id}
                                    onRefreshList={onRefreshList}
                                />
                            ))
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
                                没有更多啦 ~
                            </p>
                        )
                    }
                </div>
                <div className=" col-span-1 px-3">
                    <PublishCard />
                </div>
            </div>
        </HomeContext.Provider>
    )
}
export default HomePage