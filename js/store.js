/**
 * 全局状态管理
 */

/**
 * 创建状态
 * @param {any} key 关键字 
 * @param {any} value 值
 */

/**
 * 全局状态树
 */
const store = {
    
}
function creat(key,value) {
    store[key] = value
    return store
}
/**
 * 获取状态的值
 * @param {any} key 关键字
 * @returns 当前状态
 */
function get(key) {
    return store[key]
}