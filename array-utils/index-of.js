import { len } from './len';

/**
 * Возвращает индекс первого вхождения элемента item в массив arr.
 * Если элемент не найден — возвращает -1.
 * Не мутирует исходный массив: только читает элементы.
 * Сравнение строгое (===), без приведения типов.
 *
 * @param {Array} arr — массив для поиска
 * @param {*} item — искомый элемент (любого типа)
 * @returns {number} — индекс первого вхождения, или -1 если не найден
 * @throws {TypeError} — если arr не массив (проверка внутри len)
 *
 * @example
 *   indexOf([10, 20, 30], 20);      // 1
 *   indexOf([10, 20, 30], 10);      // 0
 *   indexOf([10, 20, 30], 99);      // -1
 *   indexOf([1, 2, 1, 3], 1);       // 0 (первое вхождение)
 *   indexOf(['a', 'b', 'c'], 'b');  // 1
 *   indexOf([0, false], 0);         // 0
 *   indexOf([0, false], false);     // 1
 *   indexOf([], 1);                 // -1
 */
export function indexOf(arr, item) {
    const lenArr = len(arr);

    for (let i = 0; i < lenArr; i++) {
        if (arr[i] === item) {
            return i;
        }
    }

    return -1;
}