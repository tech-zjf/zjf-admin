import Icon from "./icon"
import { useEffect, useState } from "react"
import { getTheme, setTheme } from "@/libs/storage"
import { Tooltip } from "antd"

const enum ThemeEnum {
    DARK = 'dark',
    LIGHT = 'light'
}

const ToggleThemeBtn: React.FC = () => {
    const [isDark, setIsDark] = useState(false)

    const setAttr = (type: ThemeEnum) => {
        document.documentElement.setAttribute('class', type)
        setTheme(type)
    }

    useEffect(() => {
        const defaultTheme = getTheme() as ThemeEnum;
        if (defaultTheme) {
            setAttr(defaultTheme)
            setIsDark(defaultTheme === ThemeEnum.DARK)
        }
    }, [])

    useEffect(() => {
        const theme = isDark ? ThemeEnum.DARK : ThemeEnum.LIGHT
        setAttr(theme)
    }, [isDark])

    const onToggleTheme = () => {
        setIsDark(!isDark)
    }

    return (
        <Tooltip title="切换主题" placement="left">
            <div className=" shadow-xl  w-12 h-12 rounded-full cursor-pointer fixed right-80 bottom-40 flex items-center justify-center" onClick={onToggleTheme}>
                {
                    isDark ? (
                        <Icon type="icon-qingtian" className="text-xl" />
                    ) : (
                        <Icon type="icon-yejian" className="text-xl" />
                    )
                }

            </div>
        </Tooltip>
    )
}
export default ToggleThemeBtn