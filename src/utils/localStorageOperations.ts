const setDataInLocalStorage = (key: string, item: string) => localStorage.setItem(key, item);

const getDataFromLocalStorage = (item: string) => localStorage.getItem(item);

const deleteDataFromLocalStorage = (key: string) => localStorage.removeItem(key);

export {
    setDataInLocalStorage,
    getDataFromLocalStorage,
    deleteDataFromLocalStorage
}