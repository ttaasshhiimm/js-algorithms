import {
    checkStrings
} from "./helpers/checkStrings";
import { len } from "./len";








/**
 * Проверяет, больше ли строка a строки b лексикографически.
 * Сравнение посимвольное, с учётом регистра.
 * Если все символы до конца короткой строки совпали — больше та, что длиннее.
 *
 * @param {string} a — первая строка
 * @param {string} b — вторая строка
 * @returns {boolean} — true если a > b, false если a <= b
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   isMore('cat', 'car');     // true
 *   isMore('car', 'cat');     // false
 *   isMore('abc', 'abc');     // false
 *   isMore('hello!', 'hello'); // true
 *   isMore('hello', 'hello!'); // false
 *   isMore('a', 'A');         // true
 */
export function isMore(a, b) {

    checkStrings(a, b);

    const lenA = len(a);
    const lenB = len(b);

    let minLen = lenA;
    if (lenB < minLen) {
        minLen = lenB;
    }

    for (let i = 0; i < minLen; i++) {
        if (a.charCodeAt(i) > b.charCodeAt(i)) {
            return true;
        }

        if (a.charCodeAt(i) < b.charCodeAt(i)) {
            return false;
        }
    }

    if (lenA > lenB) {
        return true;
    }

    return false;
}