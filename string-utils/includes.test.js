import {
    describe,
    test,
    expect
} from 'bun:test';

import {
    includes
} from './includes';


describe('Тесты на проверку insludes - проверка наличия подстроки. ', () => {

    test('Должна вернуть true для подстроки в начале "hello", "he"', () => {
        expect(includes("hello", "he")).toEqual(true);
    });

    test('Должна вернуть true для подстроки в середине "hello", "ll"', () => {
        expect(includes("hello", "ll")).toEqual(true);
    });

    test('Должна вернуть true для подстроки в конце "hello" "lo"', () => {
        expect(includes('hello', 'lo')).toEqual(true);
    });


    test('Должна вернуть false если подстрока не найдена "hello" "li"', () => {
        expect(includes('hello', 'li')).toEqual(false);
    });

    test('Должна вернуть true для пустой поисковой строки "hello" ""', () => {
        expect(includes('hello', '')).toEqual(true);
    });

    test('Должна вернуть false если поисковая строка длинее исходной "hello" "hello!"', () => {
        expect(includes('hello', 'hello!')).toEqual(false);
    });

    test('Должна вернуть true для одинаковых строк "abc" "abc"', () => {
        expect(includes('abc', 'abc')).toEqual(true);
    });

    test('Должна вернуть true при нескольких совпадениях "ababa" "ba"', () => {
        expect(includes('ababa', 'ba')).toEqual(true);
    });

    test('Должна найти подстроку, которая начинается внутри предыдущего почти-совпадения "abababc" "ababc"', () => {
        expect(includes('abababc', 'ababc')).toEqual(true);
    });

    test('Должна вернуть true для поиска символа в начаде "hello" "h"', () => {
        expect(includes("hello", "h")).toEqual(true);
    });

    test('Должна вернуть true для поиска символа в середине "hello" "l"', () => {
        expect(includes("hello", "l")).toEqual(true);
    });

    test('Должна вернуть true для поиска символа в конце "hello" "o"', () => {
        expect(includes("hello", "o")).toEqual(true);
    });

    test('Должна работать с кириллицей "привет" "иве"', () => {
        expect(includes("привет", "иве")).toEqual(true);
    });

    test('Должна выбросить TypeError если аргумент(ы) не строка', () => {
        expect(() => includes(123, 'hello')).toThrow(TypeError);
        expect(() => includes('hello', 123)).toThrow(TypeError);
    });

})