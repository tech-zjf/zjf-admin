import { AuthorDetailResponse } from "@/api/modules/user/interface";
import { ViewItemResponse } from "@/api/modules/views/interface";

class FunctionTools {

    static formatViews(views: ViewItemResponse[], parentAuthor?: AuthorDetailResponse): ViewItemResponse[] {
        return views.map((view: ViewItemResponse) => {
            return {
                ...view,
                active: false,
                child: view.child.length ? FunctionTools.formatViews(view.child, view.author) : [],
                parentAuthor: parentAuthor || null
            }
        })
    }
}

export default FunctionTools