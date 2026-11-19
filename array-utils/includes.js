import { indexOf } from './index-of';

/**
 * Проверяет, содержится ли элемент item в массиве arr.
 * Реализовано через indexOf: элемент найден, если индекс !== -1.
 * Не мутирует исходный массив: только читает элементы.
 * Сравнение строгое (===), без приведения типов.
 *
 * @param {Array} arr — массив для поиска
 * @param {*} item — искомый элемент (любого типа)
 * @returns {boolean} — true если элемент найден, false если нет
 * @throws {TypeError} — если arr не массив (проверка внутри indexOf/len)
 *
 * @example
 *   includes([1, 2, 3], 2);        // true
 *   includes([1, 2, 3], 9);        // false
 *   includes([], 1);               // false
 *   includes([1, 2, 3], 1);        // true (первый)
 *   includes([1, 2, 3], 3);        // true (последний)
 *   includes(['a', 'b'], 'b');     // true
 *   includes([0], false);          // false (0 !== false)
 *   includes([0], 0);              // true
 */
export function includes(arr, item) {
    if (indexOf(arr, item) !== -1) {
        return true;
    }

    return false;
}