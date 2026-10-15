import {
    checkStrings
} from "./helpers/checkStrings";
import {
    indexOf
} from "./index-of";
import { len } from "./len";







/**
 * Проверяет, заканчивается ли строка str на подстроку suffix.
 * Использует indexOf: суффикс найден, если его индекс + его длина = длине str.
 * Пустой суффикс считается суффиксом любой строки.
 *
 * @param {string} str — строка, в которой проверяем конец
 * @param {string} suffix — подстрока, которую ищем в конце
 * @returns {boolean} — true если str заканчивается на suffix, false если нет
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   endsWith('hello', 'lo');     // true
 *   endsWith('hello', 'he');     // false
 *   endsWith('hello', 'o');      // true
 *   endsWith('hello', 'hello');  // true
 *   endsWith('hello', '');       // true
 *   endsWith('hello', 'hello!'); // false
 *   endsWith('привет', 'вет');   // true
 */
export function endsWith(str, suffix) {

    checkStrings(str, suffix);

    const lenStr = len(str);
    const lenSuffix = len(suffix);

    if (lenSuffix === 0) {
        return true;
    }

    if (lenSuffix > lenStr) {
        return false;
    }

    const index = indexOf(str, suffix);

    return index !== -1 && index + lenSuffix === lenStr;
}