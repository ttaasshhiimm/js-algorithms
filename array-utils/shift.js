import { len } from "./len";

/**
 * Удаляет первый элемент массива и возвращает его.
 * ⚠️ Мутирует исходный массив: все элементы сдвигаются влево на одну позицию,
 * последний индекс удаляется через delete.
 * Для пустого массива возвращает undefined (массив не меняется).
 *
 * @param {Array} array — массив, из которого удаляем первый элемент (будет изменён)
 * @returns {*} — удалённый первый элемент, или undefined для пустого массива
 * @throws {TypeError} — если array не массив (проверка внутри len)
 *
 * @example
 *   const arr = [1, 2, 3];
 *   shift(arr);        // 1
 *   console.log(arr);  // [2, 3] — массив мутирован
 *
 *   shift([]);         // undefined
 *   shift([42]);       // 42 (массив стал пустым)
 *   shift(['a', 'b']); // 'a' (массив стал ['b'])
 */
export function shift(array) {
    const currLen = len(array);

    if (currLen === 0) {
        return undefined;   
    }

    const firstEl = array[0];

    for (let i = 0; i < currLen - 1; i++) {
        array[i] = array[i + 1];
    }

    delete array[currLen - 1];

    return firstEl;
}