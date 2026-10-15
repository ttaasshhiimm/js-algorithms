import {
    checkStrings
} from "./helpers/checkStrings";
import {
    len
} from './len';






/**
 * Проверяет, различаются ли строки a и b.
 * Сравнение посимвольное, с учётом регистра.
 * Если длины разные — строки сразу считаются различными.
 *
 * @param {string} a — первая строка
 * @param {string} b — вторая строка
 * @returns {boolean} — true если строки различаются, false если равны
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   isNotEqual('hello', 'world'); // true
 *   isNotEqual('abc', 'abc');     // false
 *   isNotEqual('hi', 'hello');    // true
 *   isNotEqual('abc', 'ABC');     // true
 *   isNotEqual('', '');           // false
 */
export function isNotEqual(a, b) {

    checkStrings(a, b);

    const lenA = len(a);
    const lenB = len(b);

    if (lenA !== lenB) {
        return true
    }

    for (let i = 0; i < lenA; i++) {
        if (a.charCodeAt(i) !== b.charCodeAt(i)) {
            return true;
        }
    }



    return false;
}