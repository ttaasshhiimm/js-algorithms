import {
    checkString
} from "./helpers/checkStrings";








/**
 * Возвращает длину строки str — количество символов в ней.
 * Подсчёт ведётся вручную, посимвольно, без использования .length.
 *
 * @param {string} str — строка, длину которой нужно посчитать
 * @returns {number} — количество символов в строке (0 для пустой строки)
 * @throws {TypeError} — если аргумент не строка
 *
 * @example
 *   len('hello');  // 5
 *   len('');       // 0
 *   len('a');      // 1
 *   len('привет'); // 6
 */
export function len(str) {

    checkString(str);
    let i = 0;

    while (str[i] !== undefined) {

        i++;
    }

    return i;
}