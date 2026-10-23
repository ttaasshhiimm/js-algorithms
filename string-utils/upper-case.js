import { checkString } from './helpers/checkStrings';
import { len } from './len';

/**
 * Переводит все строчные буквы (латиница и кириллица) в заглавные.
 * Остальные символы не меняются.
 *
 * @param {string} str — исходная строка
 * @returns {string} — строка с заглавными буквами
 * @throws {TypeError} — если аргумент не строка
 *
 * @example
 *   toUpperCase('hello');         // 'HELLO'
 *   toUpperCase('Hello World');   // 'HELLO WORLD'
 *   toUpperCase('привет');        // 'ПРИВЕТ'
 *   toUpperCase('hello123');      // 'HELLO123'
 */
export function toUpperCase(str) {
    checkString(str);
    const strLen = len(str);

    let result = '';

    for (let i = 0; i < strLen; i++) {
        const code = str.charCodeAt(i);

        if ((code >= 97 && code <= 122) || (code >= 1072 && code <= 1103)) {
            result += String.fromCodePoint(code - 32);
        } else {
            result += str[i];
        }
    }

    return result;
}