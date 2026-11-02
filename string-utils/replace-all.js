import { checkString } from "./helpers/checkStrings";
import { len } from "./len";
import { indexOf } from "./index-of";
/**
 * Заменяет все вхождения подстроки search в строке str на replacement.
 * Заменённый текст не участвует в дальнейшем поиске.
 * Если search не найден — возвращает исходную строку без изменений.
 * Если search пустой — вставляет replacement вокруг каждого символа.
 *
 * @param {string} str — исходная строка
 * @param {string} search — подстрока, которую ищем
 * @param {string} replacement — строка, на которую заменяем
 * @returns {string} — строка со всеми заменами
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   replaceAll('aaa', 'aa', 'ba');      // 'baa'
 *   replaceAll('hello world', 'o', '0'); // 'hell0 w0rld'
 *   replaceAll('hello', 'xyz', 'ABC');  // 'hello'
 *   replaceAll('abc', '', 'X');         // 'XaXbXcX'
 */

export function replaceAll(str, search, replacement) {
  checkString(str);
  checkString(search);
  checkString(replacement);

  const strLen = len(str);
  const searchLen = len(search);

  if (searchLen === 0) {
    let result = replacement;
    for (let i = 0; i < strLen; i++) {
      result += str[i];
      result += replacement;
    }
    return result;
  }

  let result = "";
  let i = 0;

  while (i < strLen) {
    
    let tail = "";
    for (let k = i; k < strLen; k++) {
      tail += str[k];
    }

    const matchIndex = indexOf(tail, search);

    if (matchIndex === 0) {
      result += replacement; 
      i += searchLen; 
    } else {
      result += str[i]; 
      i += 1;
    }
  }
  return result;
}
