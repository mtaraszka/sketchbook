const setItemInLocalStorage = (key: string, item: string) => localStorage.setItem(key, item);

const getItemFromLocalStorage = (item: string) => localStorage.getItem(item);

const deleteItemFromLocalStorage = (key: string) => localStorage.removeItem(key);

export {
    setItemInLocalStorage,
    getItemFromLocalStorage,
    deleteItemFromLocalStorage
}