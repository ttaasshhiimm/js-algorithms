import {
    describe,
    test,
    expect
} from 'bun:test';
import {
    isNotEqual
} from './isNotEqual';

describe('Тесты isNotEqual', () => {
    test('должна вернуть true для разных строк "hello","world"', () => {
        expect(isNotEqual('hello', 'world')).toEqual(true);
    });

    test('должна вернуть false для одинаковых строк "abc","abc"', () => {
        expect(isNotEqual('abc', 'abc')).toEqual(false);
    });

    test('должна вернуть true для строк разной длины "hi","hello"', () => {
        expect(isNotEqual('hi', 'hello')).toEqual(true);
    });

    test('должна вернуть false для пустых строк "",""', () => {
        expect(isNotEqual('', '')).toEqual(false);
    });

    test('Должна выбросить TypeError если аргумент(ы) не строка', () => {
        expect(() => isNotEqual(123, "hello")).toThrow(TypeError);
        expect(() => isNotEqual("hello", 123)).toThrow(TypeError);
    });
});