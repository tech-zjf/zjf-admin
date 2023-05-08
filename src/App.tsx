import React, { Suspense } from "react"
import { useRoutes } from 'react-router-dom';
import router from "./routers";
const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<>loading...</>}>
        {useRoutes(router)}
      </Suspense>
    </>
  )
}

export default App
