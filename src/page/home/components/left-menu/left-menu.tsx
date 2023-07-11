import Icon from "@/components/widget/icon"
import './styles.less'
import { HomeLeftMenutabsEnum } from "../../constant"


export interface LeftMenuItem {
    title: string,
    key: HomeLeftMenutabsEnum,
    icon: string,
}

interface LeftMenuProps {
    items: LeftMenuItem[],
    value: HomeLeftMenutabsEnum,
    onChange: (val: HomeLeftMenutabsEnum) => void
}

const LeftMenu: React.FC<LeftMenuProps> = (props) => {
    const { items, value, onChange } = props
    return (
        <div className="px-3">
            <div className="left-menu-shadow rounded">
                {
                    items.map(menu => {
                        return (
                            <div
                                key={menu.key}
                                className=" w-full py-3 px-5 flex items-center cursor-pointer transform "
                                onClick={() => {
                                    onChange(menu.key)
                                }}
                            >
                                <Icon type={menu.icon} className={`  mr-3 flex items-center ${value === menu.key ? ' text-2xl' : 'text-xl'}`} />
                                <p className={` text-gray-900 dark:text-white ${value === menu.key ? ' text-base font-semibold' : 'text-sm'}`}>{menu.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default LeftMenu