import {
    checkNumber
} from "./helpers/checkNumber";
import {
    checkString
} from "./helpers/checkStrings";
import {
    len
} from "./len";








/**
 * Извлекает подстроку str от start (включая) до end (не включая).
 * Поддерживает отрицательные индексы: -1 — последний символ, -2 — предпоследний.
 * В отличие от substring: start и end не меняются местами.
 *
 * @param {string} str — исходная строка
 * @param {number} start — начальный индекс (включая); если отрицательный — с конца
 * @param {number} [end] — конечный индекс (не включая); если не указан — до конца; если отрицательный — с конца
 * @returns {string} — извлечённая подстрока
 * @throws {TypeError} — если str не строка, start не число, или end указан и не число
 *
 * @example
 *   slice('hello', 0, 5);   // 'hello'
 *   slice('hello', 1, 4);   // 'ell'
 *   slice('hello', 2);      // 'llo'
 *   slice('hello', -3);     // 'llo'
 *   slice('hello', 0, -1);  // 'hell'
 *   slice('hello', -3, -1); // 'll'
 */
export function slice(str, start, end) {

    checkString(str);
    checkNumber(start);
    checkNumber(end);

    let strLen = len(str);
    const string = str;
    let strStart = start;
    let strEnd = end;
    let result = '';



    if (typeof strEnd === 'undefined') {
        strEnd = strLen;
    }

    if (strStart < 0) {

        if (strLen + strStart > 0) {
            strStart = strLen + strStart;
        } else {
            strStart = 0;
        }

    }

    if (strEnd < 0) {
        strEnd = strLen + strEnd;
        if(strEnd < 0) strEnd = 0;
    }

    if (strStart > strLen) strStart = strLen;
    if (strEnd > strLen) strEnd = strLen;

    for (let i = strStart; i < strEnd; i++) {
        result += string[i];
    }
    return result;
}