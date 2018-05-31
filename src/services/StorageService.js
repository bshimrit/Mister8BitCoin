function getStorage(item){
    return localStorage.getItem(item)
}

function setStorage(item,value){
    localStorage.setItem(item,value)
}
export default {
    getStorage,
    setStorage
}