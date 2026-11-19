import { len } from './len';

/**
 * Удаляет последний элемент массива и возвращает его.
 * ⚠️ Мутирует исходный массив: последний индекс удаляется через delete.
 * Для пустого массива возвращает undefined (массив не меняется).
 *
 * @param {Array} array — массив, из которого удаляем последний элемент (будет изменён)
 * @returns {*} — удалённый элемент, или undefined для пустого массива
 * @throws {TypeError} — если array не массив (проверка внутри len)
 *
 * @example
 *   const arr = [1, 2, 3];
 *   pop(arr);          // 3
 *   console.log(arr);  // [1, 2] — массив мутирован
 *
 *   pop([]);           // undefined
 *   pop([42]);         // 42 (массив стал пустым)
 *   pop(['a', 'b']);   // 'b'
 */
export function pop(array) {
    let lenBefore = len(array);
    const deleted = array[lenBefore - 1];
    delete array[lenBefore - 1];
    return deleted;
}