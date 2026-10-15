import {
    checkStrings
} from "./helpers/checkStrings";
import {
    indexOf
} from "./index-of";







/**
 * Проверяет, содержится ли подстрока search в строке str.
 * Использует indexOf: если результат >= 0 — подстрока найдена.
 * Пустая подстрока считается содержащейся в любой строке.
 *
 * @param {string} str — строка, в которой ищем
 * @param {string} search — подстрока, которую ищем
 * @returns {boolean} — true если search найден в str, false если нет
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   includes('hello', 'he');     // true
 *   includes('hello', 'll');     // true
 *   includes('hello', 'lo');     // true
 *   includes('hello', 'li');     // false
 *   includes('hello', '');       // true
 *   includes('hello', 'hello!'); // false
 *   includes('привет', 'иве');   // true
 */
export function includes(str, search) {
    checkStrings(str, search);
    return indexOf(str, search) >= 0;

}