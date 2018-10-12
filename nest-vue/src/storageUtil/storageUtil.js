var storageKey = 'searchmsg';

export default {
  fetch(){
    return JSON.parse(localStorage.getItem(storageKey) || '[]')
  },
  save(searchWorld){
    localStorage.setItem(storageKey,JSON.stringify(searchWorld))
  }
}
