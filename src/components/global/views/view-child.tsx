import { ViewItemResponse } from "@/api/modules/views/interface"
import ViewItem from "./view-item"
import { Fragment } from "react"

interface ViewChildProps {
    items: ViewItemResponse[]
}

const ViewChild: React.FC<ViewChildProps> = (props) => {
    const { items } = props
    return (
        <>
            {
                items.map(item =>
                    <Fragment key={item.id} >
                        <ViewItem item={item} />
                        {!!item?.child?.length && <ViewChild items={item.child} />}
                    </Fragment>
                )
            }
        </>
    )
}
export default ViewChild