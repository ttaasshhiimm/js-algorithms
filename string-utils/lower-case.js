import { checkString } from './helpers/checkStrings';
import { len } from './len';

/**
 * Переводит все заглавные буквы (латиница и кириллица) в строчные.
 * Остальные символы не меняются.
 *
 * @param {string} str — исходная строка
 * @returns {string} — строка со строчными буквами
 * @throws {TypeError} — если аргумент не строка
 *
 * @example
 *   toLowerCase('HELLO');         // 'hello'
 *   toLowerCase('Hello World');   // 'hello world'
 *   toLowerCase('ПРИВЕТ');        // 'привет'
 *   toLowerCase('HELLO123');      // 'hello123'
 */
export function toLowerCase(str) {
    checkString(str);
    const strLen = len(str);

    let result = '';

    for (let i = 0; i < strLen; i++) {
        const code = str.charCodeAt(i);
        if ((code >= 65 && code <= 90) || (code >= 1040 && code <= 1071)) {
            result += String.fromCodePoint(code + 32);
        } else {
            result += str[i];
        }
    }
    return result;
}