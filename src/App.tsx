import React, { Suspense, useEffect } from "react"
import { useNavigate, useRoutes } from 'react-router-dom';
import router from "./routers";
import Loading from "./components/widget/loading";
import { getToken } from "./libs/storage";

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken()
    if (!token) {
      navigate('/login')
    }
  }, [])

  return (
    <>
      <Suspense fallback={<Loading />}>
        {useRoutes(router)}
      </Suspense>
    </>
  )
}

export default App
