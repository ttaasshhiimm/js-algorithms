import {
    checkStrings
} from "./helpers/checkStrings";
import {
    len
} from "./len";





/**
 * Возвращает индекс первого вхождения подстроки search в строку str.
 * Если подстрока не найдена — возвращает -1.
 * Пустая подстрока считается найденной в позиции 0.
 *
 * @param {string} str — строка, в которой ищем
 * @param {string} search — подстрока, которую ищем
 * @returns {number} — индекс первого вхождения search в str, или -1 если не найдено
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   indexOf('hello', 'he');     // 0
 *   indexOf('hello', 'll');     // 2
 *   indexOf('hello', 'lo');     // 3
 *   indexOf('hello', 'li');     // -1
 *   indexOf('hello', '');       // 0
 *   indexOf('hello', 'hello!'); // -1
 *   indexOf('привет', 'иве');   // 2
 */


export function indexOf(str, search) {

    checkStrings(str, search);

    let lenStr = len(str);
    let lenSearch = len(search);


    if (lenSearch > lenStr) {
        return -1;
    }

    for (let i = 0; i <= lenStr - lenSearch; i++) {
        let match = true;

        for (let j = 0; j < lenSearch; j++) {
            if (str[i + j] !== search[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            return i;
        }
    }

    return -1;
}