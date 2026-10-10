// string-utils/is-equal.test.js
import {
    describe,
    test,
    expect
} from 'bun:test';
import {
    isEqual
} from './is-equal';

describe('Тесты is-equal', () => {
    test('должна вернуть true для равных строк "hello","hello"', () => {
        // тут твоя проверка работы функции
        expect(isEqual('hello', 'hello')).toEqual(true);
    });

    test('должна вернуть true для равных строк " "," "', () => {
        expect(isEqual(' ', ' ')).toEqual(true);
    });

    test('Должна вернуть false для разных строк одинаковой длины "hello", "world"', () => {
        expect(isEqual('hello', 'world')).toEqual(false);
    });

    test('Должна вернуть false для строк разной длины "hi", "hello"', () => {
        expect(isEqual("hi", "hello")).toEqual(false);
    });

    test('Должна вернуть false для строки с пробелом "hi", "hi "', () => {
        expect(isEqual("hi", "hi ")).toEqual(false);
    });

    test('Должна вернуть false если одна строка пустая, а другая нет "", "a"', () => {
        expect(isEqual("", "a")).toEqual(false);
    });

    test('Должна вернуть false если пробелы различаются " a", "a "', () => {
        expect(isEqual(" a", "a ")).toEqual(false);
    });

    test('Должна вернуть true для кириллицы "привет", "привет"', () => {
        expect(isEqual("привет", "привет")).toEqual(true);
    });

    test('Должна выбросить TypeError если первый аргумент не строка 123, "hello"', () => {
        expect(() => isEqual(123, "hello")).toThrow(TypeError);
    });

    test('Должна выбросить TypeError если второй аргумент не строка "hello", null', () => {
        expect(() => isEqual("hello", null)).toThrow(TypeError);
    });

});