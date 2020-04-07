/**
 * 首字母大写
 */

export default (string) => {
    return string.toLowerCase().replace(/( |^)[a-z]/g, l => l.toUpperCase())
}
