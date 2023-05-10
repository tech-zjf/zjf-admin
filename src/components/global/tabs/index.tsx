import { useState } from "react";

export interface TabItem {
    key: string | number,
    label: string,
    [name: string]: any
}

export interface TabsProps {
    defaultKey: string,
    items: TabItem[],
    space?: number,
    onChange?: (key: string | number, item: TabItem) => void;
}

const Tabs: React.FC<TabsProps> = (props) => {
    const { defaultKey, items, onChange, space = 48 } = props

    const [activeKey, setActiveKey] = useState<string | number>(defaultKey)

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
                            className={`py-4  text-sm cursor-pointer ${activeKey == v.key ? ' text-gray-900 text-base font-medium' : 'text-gray-900'}`}
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