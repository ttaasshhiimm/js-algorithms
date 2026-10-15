import { checkStrings } from "./helpers/checkStrings";
import { len } from "./len";







/**
 * Проверяет, меньше ли строка a строки b лексикографически.
 * Сравнение посимвольное, с учётом регистра.
 * Если все символы до конца короткой строки совпали — меньше та, что короче.
 *
 * @param {string} a — первая строка
 * @param {string} b — вторая строка
 * @returns {boolean} — true если a < b, false если a >= b
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   isLess('car', 'cat');   // true
 *   isLess('cat', 'car');   // false
 *   isLess('abc', 'abc');   // false
 *   isLess('hello', 'hello!'); // true
 *   isLess('A', 'a');       // true
 */

export function isLess(a, b) {

    checkStrings(a,b);

    const lenA = len(a);
    const lenB = len(b);

    let minLen = lenA;
    if (lenB < minLen) {
        minLen = lenB;
    }

    for (let i = 0; i < minLen; i++) {

        if (a.charCodeAt(i) < b.charCodeAt(i)) {
            return true;
        }

        if (a.charCodeAt(i) > b.charCodeAt(i)) {
            return false;
        }
    }

    if (lenA < lenB) {
        return true;
    }

    return false;
}