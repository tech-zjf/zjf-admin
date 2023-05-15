import { lazy } from "react";

/** 登录 */
const LoginPage = lazy(() => import('../page/login'));
/** 入口页面 */
const LayoutPage = lazy(() => import('../page/layout'));
/** 入口页面 - 子页面 */
const ArticlePage = lazy(() => import('../page/article'));
const VideoPage = lazy(() => import('../page/video'));
const PostPage = lazy(() => import('../page/post'));
const HomePage = lazy(() => import('../page/home'));
const PublishPage = lazy(() => import('@/page/publish'));

const router = [
    {
        path: '/',
        element: <LayoutPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/article',
                element: <ArticlePage />
            },
            {
                path: '/video',
                element: <VideoPage />
            },
            {
                path: '/post',
                element: <PostPage />
            },
            {
                path: '/publish/:type',
                element: <PublishPage />
            },
        ]
    },

    {
        path: '/login',
        element: <LoginPage />,
    },
];

export default router;
