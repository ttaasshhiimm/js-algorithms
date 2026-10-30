import { checkString } from './helpers/checkStrings';
import { len } from './len';
import { substring } from './substring';

/**
 * Удаляет пробелы в начале и конце строки.
 * Пробелы внутри строки сохраняются.
 *
 * @param {string} str — исходная строка
 * @returns {string} — строка без пробелов в начале и конце
 * @throws {TypeError} — если аргумент не строка
 *
 * @example
 *   trim('   hello  ');       // 'hello'
 *   trim('hello world');      // 'hello world'
 *   trim('   ');              // ''
 *   trim('');                 // ''
 *   trim('  hello world  ');  // 'hello world'
 */
export function trim(str) {
    checkString(str);
    const strLen = len(str);

    let start = 0;
    while (start < strLen && str[start] === ' ') {
        start++;
    }

    let end = strLen;
    while (end > start && str[end - 1] === ' ') {
        end--;
    }

    return substring(str, start, end);
}