import { useParams } from "react-router-dom"

const ArticlePage: React.FC = () => {
    const { id } = useParams()
    return (
        <div>文章 - {id}</div>
    )
}
export default ArticlePage