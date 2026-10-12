import {
    describe,
    test,
    expect
} from 'bun:test';
import {
    indexOf
} from './index-of';

describe('Тесты indexOf', () => {
    test('Должна вернуть 0 для подстроки в начале "hello" "he"', () => {
        expect(indexOf('hello', 'he')).toEqual(0);
    });

    test('Должна вернуть 2 для подстроки в середине "hello" "ll"', () => {
        expect(indexOf('hello', 'll')).toEqual(2);
    });

    test('Должна вернуть 3 для подстроки в конце "hello" "lo"', () => {
        expect(indexOf('hello', 'lo')).toEqual(3);
    });


    test('Должна вернуть -1 если подстрока не найдена "hello" "li"', () => {
        expect(indexOf('hello', 'li')).toEqual(-1);
    });

    test('Должна вернуть 0 для пустой поисковой строки "hello" ""', () => {
        expect(indexOf('hello', '')).toEqual(0);
    });

    test('Должна вернуть -1 если поисковая строка длинее исходной "hello" "hello!"', () => {
        expect(indexOf('hello', 'hello!')).toEqual(-1);
    });

    test('Должна вернуть 0 для одинаковых строк "abc" "abc"', () => {
        expect(indexOf('abc', 'abc')).toEqual(0);
    });

    test('Должна вернуть индекс первого вхождения при нескольких совпадениях "ababa" "ba"', () => {
        expect(indexOf('ababa', 'ba')).toEqual(1);
    });

    test('Должна найти подстроку, которая начинается внутри предыдущего почти-совпадения "abababc" "ababc"', () => {
        expect(indexOf('abababc', 'ababc')).toEqual(2);
    });

    test('Должна вернуть 0 для поиска одного символа "hello" "h"', () => {
        expect(indexOf("hello", "h")).toEqual(0);
    });

    test('Должна вернуть 2 для поиска повторяющегося символа "hello" "l"', () => {
        expect(indexOf("hello", "l")).toEqual(2);
    });

    test('Должна работать с кириллицей "привет" "иве"', () => {
        expect(indexOf("привет", "иве")).toEqual(2);
    });

    test('Должна выбросить TypeError если аргумент(ы) не строка', () => {
        expect(() => indexOf(123, 'hello')).toThrow(TypeError);
        expect(() => indexOf('hello', 123)).toThrow(TypeError);
    });

});