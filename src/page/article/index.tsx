import $request from "@/api";
import { ArticleDetail } from "@/api/modules/article/interface";
import { CategoryDetail } from "@/api/modules/category/interface";
import { AuthorDetailResponse } from "@/api/modules/user/interface";
import DetailPageHeader from "@/components/global/detail-page/header";
import Views from "@/components/global/views";
import FollowButton from "@/components/widget/follow-button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '@wangeditor/editor/dist/css/style.css' // 引入 css
const ArticlePage: React.FC = () => {
    const { id } = useParams();
    const [articleInfo, setArticleInfo] = useState<ArticleDetail>();

    const getArticleInfo = async () => {
        const data = await $request.article.getArticleDetail(+id!);
        setArticleInfo(data);
    };

    useEffect(() => {
        getArticleInfo();
    }, []);

    return (
        <div className="grid grid-cols-3">
            <div className="col-span-2 mt-10 mb-20 custom-shadow px-5 py-10 rounded">
                <h1 className="text-2xl text-center font-bold">{articleInfo?.title}</h1>
                <DetailPageHeader
                    author={articleInfo?.author as AuthorDetailResponse}
                    category={articleInfo?.category as CategoryDetail}
                    createTime={articleInfo?.createTime as string}
                    rightSlot={<FollowButton />}
                />
                <div className="mt-4 ">
                    <img src={articleInfo?.poster} className="w-full mb-4" />
                    <div className="w-e-text-container">
                        <div
                            data-slate-editor
                            className=" text-gray-900 leading-7 text-sm  "
                            dangerouslySetInnerHTML={{ __html: articleInfo?.content || "" }}
                        ></div>
                    </div>
                </div>
                <Views className=" flex justify-center mt-10" />
            </div>
        </div>
    );
};

export default ArticlePage;
