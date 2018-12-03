export default {
  /**
   * 从localStorage中获取值
   * @param key
   */
  getLocalStorage(key) {
    return window.localStorage.getItem(key) || '';
  },

  /**
   * 往localStorage中保存值
   * @param key
   * @param value
   */
  setLocalStorage(key, value) {
    if (value) {
      window.localStorage.setItem(key, value || '');
    }
  },

  /**
   * 移除localStorage项
   * @param key
   */
  removeLocalStorage(key) {
    window.localStorage.removeItem(key);
  },

  /**
   * 从sessionStorage中获取值
   * @param key
   */
  getSessionStorage(key) {
    return window.sessionStorage.getItem(key);
  },

  /**
   * 往sessionStorage中保存值
   * @param key
   * @param value
   */
  setSessionStorage(key, value) {
    window.sessionStorage.setItem(key, value);
  },

  /**
   * 搜索界面输入的历史值
   * 往LocalStorage中保存值
   * @param storageKey
   * @param searchWorld
   */
  fetch(storageKey){
    return JSON.parse(localStorage.getItem(storageKey) || '[]')
  },
  save(storageKey,searchWorld){
    localStorage.setItem(storageKey,JSON.stringify(searchWorld))
  }
}
