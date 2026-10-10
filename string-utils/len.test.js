// string-utils/len.test.js
import {
    describe,
    test,
    expect
} from 'bun:test';
import {
    len
} from './len';

describe('Тесты len', () => {
    test('должна вернуть 5 для строки "hello"', () => {
        // тут твоя проверка работы функции
        expect(len('hello')).toEqual(5);
    });

    test('Должна вернуть 0 для пустой строки ""', () => {
        expect(len('')).toEqual(0)
    });

    test('Должна вернуть 3 для строки из 3 пробелов', () => {
        expect(len('   ')).toEqual(3)
    });

    test('Должна корректно считать кириллицу', () => {
        expect(len('привет')).toEqual(6)
    });

    test('Должна выбросить TypeError если аргумент — число (123)', () => {
        expect(() => len(123)).toThrow(TypeError);
    });

    test('Должна выбросить TypeError если аргумент — null, undefined', () => {
        expect(() => len(null)).toThrow('Аргумент должен быть строкой');
        expect(() => len(undefined)).toThrow('Аргумент должен быть строкой');
    });


});