export const getStorage = (key) => {
    return JSON.parse(window.localStorage.getItem(`MEIYUAN_${key}`));
}
export const setStorage = (key, value) => {
    window
        .localStorage
        .setItem(`MEIYUAN_${key}`, JSON.stringify(value));
}
