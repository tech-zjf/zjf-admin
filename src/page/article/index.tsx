import $request from "@/api";
import { ArticleDetail } from "@/api/modules/article/interface";
import { CategoryDetail } from "@/api/modules/category/interface";
import { AuthorDetailResponse } from "@/api/modules/user/interface";
import DetailPageHeader from "@/components/global/detail-page/header";
import FollowButton from "@/components/widget/follow-button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import Views from "@/components/global/views";
import { OrderByEnum, OrderEnum } from "@/api/interface";
import { ViewItemResponse, ViewTypeEnum } from "@/api/modules/views/interface";
import FunctionTools from "@/libs/tools/function-tools";

const ArticlePage: React.FC = () => {
  const { id } = useParams();
  const [articleInfo, setArticleInfo] = useState<ArticleDetail>();
  const [views, setViews] = useState<ViewItemResponse[]>([])

  const getArticleInfo = async () => {
    const data = await $request.article.getArticleDetail(+id!);
    setArticleInfo(data);
  };

  const getViews = async () => {
    let { list } = await $request.view.getViewList({
      page: 1,
      pageSize: 10,
      orderBy: OrderByEnum.CREATE_TIME,
      order: OrderEnum.DESC,
      parentId: +id!,
      relationType: ViewTypeEnum.ARTICLE
    })
    setViews(FunctionTools.formatViews(list))
  }

  useEffect(() => {
    getArticleInfo();
    getViews()
  }, []);

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 mt-10 mb-20">
        <div className="custom-shadow px-5 py-10 rounded">
          <h1 className="text-2xl text-center font-bold">
            {articleInfo?.title}
          </h1>
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
        </div>
        <div className="mt-10 custom-shadow px-5 py-5">
          <h4 className=" text-xl font-bold text-gray-900">全部评论 · ~</h4>
          <Views items={views}></Views>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
