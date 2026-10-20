import {
    len
} from './len';
import {
    checkString
} from './helpers/checkStrings';





/**
 * Извлекает подстроку str от start (включая) до end (не включая).
 * Нормализация: отрицательные и NaN → 0, больше длины → длина,
 * если start > end — меняются местами.
 *
 * @param {string} str — исходная строка
 * @param {number} start — начальный индекс (включая)
 * @param {number} [end] — конечный индекс (не включая); если не указан — до конца
 * @returns {string} — извлечённая подстрока
 * @throws {TypeError} — если str не строка или start/end не числа
 *
 * @example
 *   substring('hello', 0, 5);  // 'hello'
 *   substring('hello', 1, 4);  // 'ell'
 *   substring('hello', 4, 1);  // 'ell'
 *   substring('hello', 3, -1); // 'hel'
 *   substring('hello', 2);     // 'llo'
 */


export function substring(str, start, end) {

    checkString(str);
    const strLen = len(str);
    let strStart = start;
    let strEnd = end;



    if (typeof strStart !== 'number' || (typeof strEnd !== 'number' && typeof strEnd !== 'undefined')) {
        throw new TypeError('Аргумент должен быть числом!');
    }


    if (typeof strEnd !== 'number') {
        strEnd = strLen;
    }


    if (strStart < 0 || Number.isNaN(strStart)) {
        strStart = 0;
    }
    if (strEnd < 0 || Number.isNaN(strEnd)) {
        strEnd = 0;
    }


    if (strStart > strLen) {
        strStart = strLen;
    }
    if (strEnd > strLen) {
        strEnd = strLen;
    }


    if (strStart > strEnd) {
        const temp = strStart;
        strStart = strEnd;
        strEnd = temp;
    }

    let result = '';
    for (let i = strStart; i < strEnd; i++) {
        result += str[i];
    }

    return result;
}