import { checkArray } from "./helpers/checkArray";

/**
 * Возвращает количество элементов в массиве.
 * Подсчёт ведётся вручную, посимвольно, без использования .length.
 * Работает с массивами, где элементы идут подряд без «дыр» (без undefined).
 *
 * @param {Array} array — массив, длину которого нужно посчитать
 * @returns {number} — количество элементов в массиве (0 для пустого)
 *
 * @example
 *   len([]);            // 0
 *   len([1, 2, 3]);     // 3
 *   len(['a', 'b']);    // 2
 *   len([true, false]); // 2
 */

export function len(array) {
  checkArray(array);  
  let count = 0;

  for (let i = 0; array[i] !== undefined; i++) {
    count++;
  }
  return count;
}
