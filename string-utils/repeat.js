import {
    checkString
} from "./helpers/checkStrings";
import {
    checkNumber
} from "./helpers/checkNumber";






/**
 * Повторяет строку str указанное количество раз.
 * Дробная часть count обрезается вниз через Math.floor.
 * Если count не передан — возвращает пустую строку.
 *
 * @param {string} str — строка для повторения
 * @param {number} [count=0] — сколько раз повторить (по умолчанию 0)
 * @returns {string} — новая строка из count повторений str
 * @throws {TypeError} — если str не строка или count не число
 * @throws {RangeError} — если count отрицательный
 *
 * @example
 *   repeat('ab', 3);    // 'ababab'
 *   repeat('ab', 1);    // 'ab'
 *   repeat('ab', 0);    // ''
 *   repeat('a');        // ''
 *   repeat('a', 2.7);   // 'aa'  (дробная часть обрезается)
 *   repeat('да', 3);    // 'дадада'
 */
export function repeat(str, count = 0) {
    checkString(str);
    checkNumber(count);
    let strOut = '';
    count = Math.floor(count)
    if (count < 0) {
        throw new RangeError('Аргумент должен быть больше 0');
    }
    for (let i = 0; i < count; i++) {
        strOut += str;
    }
    return strOut;
}