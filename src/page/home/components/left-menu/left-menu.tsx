import Icon from "@/components/widget/icon"
import './styles.less'

export const leftMenus = [
    {
        title: '推荐',
        key: 'recommend',
        icon: 'icon-tuijian'
    },
    {
        title: '文章',
        key: 'article',
        icon: 'icon-article'
    },
    {
        title: '视频',
        key: 'video',
        icon: 'icon-video'
    },
    {
        title: '帖子',
        key: 'post',
        icon: 'icon-tiezi'
    },
]

const LeftMenu: React.FC = () => {
    return (
        <div className="px-3">
            <div className="left-menu-shadow rounded">
                {
                    leftMenus.map(menu => {
                        return (
                            <div key={menu.key} className=" w-full py-3 px-5 flex items-center cursor-pointer">
                                <Icon type={menu.icon} className=" text-xl mr-3 flex items-center" />
                                <p className=" text-sm text-gray-900">{menu.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default LeftMenu