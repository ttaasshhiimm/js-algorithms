import { len } from './len';
import { checkStrings } from './helpers/checkStrings';







/**
 * Возвращает равны ли строки a и b.
 * Сравнение посимвольное, с учётом регистра.
 *
 * @param {string} a — первая строка
 * @param {string} b — вторая строка
 * @returns {boolean} — true если строки равны, false если нет
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   isEqual('hello', 'hello'); // true
 *   isEqual('hi', 'hello');    // false
 */
export function isEqual(a, b) {
    checkStrings(a, b);

    const lenA = len(a);
    const lenB = len(b);

    if (lenA !== lenB) {
        return false;
    }

    for (let i = 0; i < lenA; i++) {
        if (a.charCodeAt(i) !== b.charCodeAt(i)) {
            return false;
        }
    }

    return true;
}