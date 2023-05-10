import PublishPage from "@/page/publish";
import { lazy } from "react";

const LoginPage = lazy(() => import('../page/login'));
const LayoutPage = lazy(() => import('../page/layout'));
const ArticlePage = lazy(() => import('../page/article'));
const HomePage = lazy(() => import('../page/home'));

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
                path: '/article',
                element: <ArticlePage />
            },
            {
                path: '/video',
                element: <></>
            },
            {
                path: '/post',
                element: <></>
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
