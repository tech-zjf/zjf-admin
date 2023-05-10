import { useParams } from "react-router-dom"
import { PublushTypeEnum } from "./constant"
import PublishArticle from "./components/publish-article"
import PublishVideo from "./components/publish-video"
import PublishPost from "./components/publish-post"


const PublishPage: React.FC = () => {
    const { type } = useParams()

    /** 发布组件 */
    const PublishCom = () => {
        let com = <></>
        switch (type) {
            case PublushTypeEnum.ARTICLE:
                com = <PublishArticle />;
                break;
            case PublushTypeEnum.VIDEO:
                com = <PublishVideo />;
                break;
            case PublushTypeEnum.POST:
                com = <PublishPost />;
                break;
        }
        return com;
    }

    return (
        <div className="w-full h-full">
            <PublishCom />
        </div>
    )
}
export default PublishPage