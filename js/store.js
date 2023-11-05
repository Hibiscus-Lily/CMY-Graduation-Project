/**
 * 全局状态管理
 *
 * @format
 */
/**
 * 初始化全局状态树
 */
store = window.store = {};
/**
 * 创建状态
 * @param {any} key 关键字
 * @param {any} value 值
 */
function creat(key, value) {
  store[key] = value;
  return store;
}
/**
 * 获取状态的值
 * @param {string} key 关键字
 * @returns 当前状态
 */
function get(key) {
  if (key === "" || key === undefined) throw "key不能为空";
  if (store[key] === undefined) throw "不存在key:" + key;
  if (store[key] != undefined) {
    return store[key];
  }
}

/**
 * 获取状态数
 * @returns 状态树中的所有值
 */
function getAll() {
  return store;
}
/**
 *
 * @param {string} key 需要更改的关键字
 * @param {any} value 更新后的值
 * @returns
 */
function set(key, value) {
  // 判断是否key是否存在
  // 不存在
  if (!store.hasOwnProperty(key)) throw "不存在当前key:" + key;
  // 更新key值
  store[key] = value;
  return true;
}
