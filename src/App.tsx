import React, { Suspense } from "react"
import { useRoutes } from 'react-router-dom';
import router from "./routers";
import Loading from "./components/widget/loading";
const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {useRoutes(router)}
      </Suspense>
    </>
  )
}

export default App
