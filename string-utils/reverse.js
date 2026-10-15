import {
    checkString
} from "./helpers/checkStrings";
import {
    len
} from "./len";








/**
 * Переворачивает строку str — возвращает новую строку с символами в обратном порядке.
 * Если строка пустая — возвращает пустую строку.
 * Если строка — палиндром, результат совпадает с исходной строкой.
 *
 * @param {string} str — исходная строка
 * @returns {string} — новая строка с символами в обратном порядке
 * @throws {TypeError} — если аргумент не строка
 *
 * @example
 *   reverse('hello');   // 'olleh'
 *   reverse('');        // ''
 *   reverse('a');       // 'a'
 *   reverse('racecar'); // 'racecar' (палиндром)
 *   reverse('a b c');   // 'c b a'
 *   reverse('привет');  // 'тевирп'
 */
export function reverse(str) {

    checkString(str);

    const lenStr = len(str);
    let reverseStr = '';

    for (let i = lenStr - 1; i >= 0; i--) {
        reverseStr += str[i];
    }


    return reverseStr;
}