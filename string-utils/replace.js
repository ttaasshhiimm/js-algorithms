import {checkString} from "./helpers/checkStrings";
import {indexOf} from "./index-of";
import {len} from "./len";





/**
 * Заменяет первое вхождение подстроки search в строке str на replacement.
 * Если search не найден — возвращает исходную строку без изменений.
 *
 * @param {string} str — исходная строка
 * @param {string} search — подстрока, которую ищем
 * @param {string} replacement — строка, на которую заменяем
 * @returns {string} — строка с заменённым первым вхождением
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   replace('hello world', 'world', 'everyone'); // 'hello everyone'
 *   replace('hello', 'l', 'L');                  // 'heLlo'
 *   replace('hello', 'xyz', 'ABC');              // 'hello'
 *   replace('hello', 'hello', 'hi');             // 'hi'
 */


export function replace(str, search, replacement) {
    checkString(str);
    checkString(search);
    checkString(replacement);
    const strLen = len(str);
    const searchLen = len(search);
    const index = indexOf(str, search);

    if (index === -1) {
        return str;
    }

    let result = '';
    for (let i = 0; i < index; i++) {
        result += str[i];
    }

    result += replacement;

    for (let i = index + searchLen; i < strLen; i++) {
        result += str[i];
    }

    return result;
}