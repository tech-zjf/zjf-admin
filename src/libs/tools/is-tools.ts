class IsTools {
    /** 是否是手机号 */
    static isPhone(phone: string) {
        let phoneRegxp = /^1[3-9]\d{9}$/;
        return phoneRegxp.test(phone);
    }
}
export default IsTools