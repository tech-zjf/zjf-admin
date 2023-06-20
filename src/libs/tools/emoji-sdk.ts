import emojiData from "@emoji-mart/data";

class EmojiSdk {
    emojiMap: any;
    emojiData: any
    natives: any
    constructor() {
        this.emojiData = emojiData
        this.natives = this.emojiData.natives
        this.formatObjToMap()
    }

    /** 
     * 将表情和key使用map对应起来 
     */
    formatObjToMap() {
        const natives = this.emojiData.natives;
        const emojiMap = new Map()
        Object.keys(natives).forEach(key => {
            emojiMap.set(natives[key], key)
        })
        this.emojiMap = emojiMap
    }

    /** 
     * 前端提交给后端，是将表情替换成标签了
     * 将内容中的<emoji>emojikey</emoji> 替换成表情
     */
    filterEmojiContentByKey(content: string) {
        const regex = /<emoji>(.*?)<\/emoji>/g
        let match;
        while ((match = regex.exec(content)) !== null) {
            const key = match[1]; // 获取捕获组中的键值
            content = content.replace(key, this.emojiMap.get(key))
        }
        return content
    }
}

export default EmojiSdk

