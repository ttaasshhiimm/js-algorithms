import {
    checkStrings
} from "./helpers/checkStrings";
import {
    indexOf
} from "./index-of";








/**
 * Проверяет, начинается ли строка str с подстроки prefix.
 * Использует indexOf: если первое вхождение prefix — на позиции 0, значит это префикс.
 * Пустой prefix считается префиксом любой строки.
 *
 * @param {string} str — строка, в которой проверяем начало
 * @param {string} prefix — подстрока, которую ищем в начале
 * @returns {boolean} — true если str начинается с prefix, false если нет
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   startsWith('hello', 'he');    // true
 *   startsWith('hello', 'hello'); // true
 *   startsWith('hello', 'lo');    // false
 *   startsWith('hello', '');      // true
 *   startsWith('hello', 'he!');   // false
 *   startsWith(123, 'he');        // TypeError
 */
export function startsWith(str, prefix) {

    checkStrings(str, prefix);

    return indexOf(str, prefix) === 0;
}