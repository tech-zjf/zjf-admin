class StringTools {

  /** 将标签替换为空 */
  static filterTagToEmpty(htmlStr: string) {
    const regex = /<[^>]+>/g;
    const str = htmlStr.replace(regex, "");
    return str;
  }
}

export default StringTools;
