import { len } from './len';

/**
 * Возвращает индекс последнего вхождения элемента item в массив arr.
 * Если элемент не найден — возвращает -1.
 * Не мутирует исходный массив: только читает элементы.
 * Сравнение строгое (===), без приведения типов.
 * Поиск идёт с конца массива к началу.
 *
 * @param {Array} arr — массив для поиска
 * @param {*} item — искомый элемент (любого типа)
 * @returns {number} — индекс последнего вхождения, или -1 если не найден
 * @throws {TypeError} — если arr не массив (проверка внутри len)
 *
 * @example
 *   lastIndexOf([1, 2, 1, 3], 1);      // 2 (последнее вхождение)
 *   lastIndexOf([1, 2, 3], 9);         // -1
 *   lastIndexOf([5, 6, 7], 5);         // 0
 *   lastIndexOf([5, 6, 7], 7);         // 2
 *   lastIndexOf([], 1);                // -1
 *   lastIndexOf(['a', 'b', 'a'], 'a'); // 2
 *   lastIndexOf(['ab', 'cd', 'ab'], 'ab'); // 2
 */
export function lastIndexOf(arr, item) {
    const lenArr = len(arr);

    for (let i = lenArr - 1; i >= 0; i--) {
        if (arr[i] === item) {
            return i;
        }
    }

    return -1;
}