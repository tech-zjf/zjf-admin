import { createContext } from "react";

interface HomeContextValue {
    onRefreshList?: () => void
}

const HomeContext = createContext<HomeContextValue>({})

export default HomeContext