import { PublushTypeEnum } from '@/page/publish/constant'
import './style.less'
import { useNavigate } from 'react-router-dom';


export const publishList = [
    {
        type: PublushTypeEnum.ARTICLE,
        title: '文章',
        icon: 'https://upload.42how.com/42web/images/icon/home_public_article.png'
    },
    {
        type: PublushTypeEnum.VIDEO,
        title: '视频',
        icon: 'https://upload.42how.com/42web/images/icon/home_public_video.png'
    },
    {
        type: PublushTypeEnum.POST,
        title: '帖子',
        icon: 'https://upload.42how.com/42web/images/idea.png'
    },
]

const PublishCard: React.FC = () => {
    const navigate = useNavigate();

    /** 跳转发布页 */
    const toPublishPage = (type: PublushTypeEnum = PublushTypeEnum.ARTICLE) => {
        navigate(`/publish/${type}`)
    }

    return (
        <div className="card-shadow py-5 px-3 rounded">
            <div className=" flex items-center justify-between">
                {publishList.map(item => {
                    return (
                        <div
                            key={item.type}
                            className="flex-1 flex items-center flex-col transition-transform transform cursor-pointer hover:scale-110"
                            onClick={() => { toPublishPage(item.type) }}
                        >
                            <img className=" w-8 h-8" src={item.icon} />
                            <p className="text-gray-700 text-xs mt-2">{item.title}</p>
                        </div>
                    )
                })}
            </div>
            <div
                className='text-sm bg-gray-900 cursor-pointer mt-8 text-gray-50 w-full py-2 rounded text-center '
                onClick={() => { toPublishPage() }}
            >
                去发布
            </div>
        </div>
    )
}
export default PublishCard