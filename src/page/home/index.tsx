import PublishCard from "@/components/global/publish-card"
import LeftMenu from "./components/left-menu/left-menu"
import Tabs from "@/components/global/tabs"
import { HomeMainTabs, HomeMainTabsEnum } from "./constent"
import FeedWrap from "@/components/global/feed/feed-wrap"



const HomePage: React.FC = () => {
    return (
        <div className=" grid grid-cols-5 gap-5 mt-10">
            <div className=" col-span-1">
                <LeftMenu />
            </div>
            <div className=" col-span-3 border px-3">
                <div className="border-b">
                    <Tabs
                        defaultKey={HomeMainTabsEnum.HOT}
                        items={HomeMainTabs}
                        space={24}
                        onChange={(key) => {
                            console.log(key)
                        }}
                    />
                </div>
                <div>
                    <FeedWrap item={{}} />
                </div>
            </div>
            <div className=" col-span-1 px-3">
                <PublishCard />
            </div>
        </div>
    )
}
export default HomePage