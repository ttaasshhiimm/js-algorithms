import { checkArray } from "./helpers/checkArray"
import { checkIndexArray } from "./helpers/checkIndexArray";
import { len } from "./len";

/**
 * Возвращает элемент массива по индексу.
 * Поддерживает отрицательные индексы: -1 — последний элемент, -2 — предпоследний.
 * Если индекс выходит за границы после нормализации — возвращает undefined.
 *
 * @param {Array} array — массив, из которого берём элемент
 * @param {number} index — индекс элемента; если отрицательный — отсчёт с конца
 * @returns {*} — элемент массива по индексу, или undefined если индекс за границей
 * @throws {TypeError} — если array не массив или index не число
 * @throws {RangeError} — если index выходит за границы (проверка в checkIndexArray)
 *
 * @example
 *   at([1, 2, 3], 0);   // 1
 *   at([1, 2, 3], 2);   // 3
 *   at([1, 2, 3], -1);  // 3 (последний)
 *   at([1, 2, 3], -3);  // 1 (первый)
 *   at([1, 2, 3], 5);   // undefined
 */
export function at(array, index) {
    checkArray(array);  
    checkIndexArray(array,index);  
    if(index<0) {
        index = len(array) - (-index);
    }
    return array[index]
}