import {
    checkString
} from './helpers/checkStrings';
import {
    checkNumber
} from './helpers/checkNumber';
import {
    len
} from './len';


/**
 * Функция возвращает: string — строка, дополненная до длины length. 
 * Если длина уже достаточная — исходная строка без изменений.
 *
 * @param {string} str — исходная строка
 * @param {number} length — целевая длина
 * @param {string} char — строка для дополнения (может быть длиннее одного символа; повторяется циклично и обрезается до нужной длины)
 * @param {string} side  — сторона: 'left', 'right' или 'both'
 * @returns {string} — строка, дополненная до длины length. 
 * @throws {TypeError} — если один из аргументов не строка
 * 
 * Правила для 'both':
 * Общее количество добавляемых символов: padding = length - len(str)
 * Слева: Math.floor(padding / 2), справа: padding - left
 * При нечётном padding — лишний символ справа
 *
 * @example
 *   pad('hi', 5, '-', 'left'); // '---hi';
 *   pad('hi', 5, '-', 'right'); // 'hi---';
 *   pad('hi', 6, '-', 'both'); // '--hi--';
 */



export function pad(str, length, char, side) {
    checkString(str);
    checkNumber(length);
    checkString(char);
    checkString(side);
    const strLen = len(str);

    if (length <= strLen) {
        return str;
    }

    const padding = length - strLen;
    const charLen = len(char);

    let temp = '';
    for (let i = 0; i < padding; i++) {
        temp += char[i % charLen];
    }

    if (side === 'left') {
        return temp + str;
    }

    if (side === 'right') {
        return str + temp;
    }

    if (side === 'both') {
        const left = Math.floor(padding / 2);
        const right = padding - left;

        let leftPart = '';
        for (let i = 0; i < left; i++) {
            leftPart += temp[i];
        }

        let rightPart = '';
        for (let i = 0; i < right; i++) {
            rightPart += temp[left + i];
        }

        return leftPart + str + rightPart;
    }

    if (side !== 'left' || side !== 'right' || side !== 'both') {
        throw new TypeError('Аргумент должен быть left или right или both');
    }

    return str;
}