/**
 * Сохранение данных в sessionStorage
 * @param key - ключ сохряняемого объекта
 * @param value - значение сохряняемого объекта
 */
export function setSessionStorage (key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

/**
 *
 * @param key
 * @returns {undefined}
 */
export function getSessionStorage (key) {
    let data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
}

/**
 *
 * @param key
 */
export function destroySessionStorage (key) {
    sessionStorage.removeItem(key);
}
