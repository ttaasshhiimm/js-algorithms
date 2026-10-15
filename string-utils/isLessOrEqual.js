import {
    checkStrings
} from "./helpers/checkStrings";
import {
    len
} from "./len";








/**
 * Проверяет, меньше ли строка a строки b лексикографически, или они равны.
 * Сравнение посимвольное, с учётом регистра.
 * Если все символы до конца короткой строки совпали — результат зависит от длины:
 * a <= b, если lenA <= lenB.
 *
 * @param {string} a — первая строка
 * @param {string} b — вторая строка
 * @returns {boolean} — true если a <= b, false если a > b
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   isLessOrEqual('car', 'cat');   // true
 *   isLessOrEqual('cat', 'car');   // false
 *   isLessOrEqual('abc', 'abc');   // true
 *   isLessOrEqual('hello', 'hello!'); // true
 *   isLessOrEqual('hello!', 'hello'); // false
 *   isLessOrEqual('A', 'a');       // true
 */
export function isLessOrEqual(a, b) {

    checkStrings(a, b);

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


    return lenA <= lenB;
}