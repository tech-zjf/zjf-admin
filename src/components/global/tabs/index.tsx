import { useEffect, useState } from "react";

export interface TabItem {
    key: string | number,
    label: string,
    [name: string]: any
}

export interface TabsProps {
    items: TabItem[],
    space?: number,
    value?: string;
    onChange?: (key: string | number, item: TabItem) => void;
}

const Tabs: React.FC<TabsProps> = (props) => {
    const { value, items, onChange, space = 48 } = props

    const [activeKey, setActiveKey] = useState<string | number>()

    useEffect(() => {
        setActiveKey(value || '')
    }, [value])

    const onHandleClick = (tab: TabItem) => {
        setActiveKey(tab.key)
        onChange && onChange(tab.key, tab)
    }

    return (
        <div className=" flex items-center">
            {
                items.map(v => {
                    return (
                        <p
                            className={`py-4  text-sm cursor-pointer ${activeKey == v.key ? ' text-gray-900 text-base font-medium dark:text-white' : 'text-gray-900 dark:text-white'}`}
                            style={{ marginRight: space }}
                            key={v.key}
                            onClick={() => onHandleClick(v)}
                        >
                            {v.label}
                        </p>
                    )
                })
            }
        </div >
    )
}
export default Tabs