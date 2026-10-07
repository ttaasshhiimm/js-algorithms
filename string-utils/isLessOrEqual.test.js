import {
    describe,
    test,
    expect
} from 'bun:test';
import {
    isLessOrEqual
} from './isLessOrEqual';

describe('Тесты isLessOrEqual', () => {
    test('должна вернуть false если a больше "cat", "car"', () => {
        expect(isLessOrEqual('cat', 'car')).toEqual(false);
    });

    test('должна вернуть true если строки равны "hello", "hello"', () => {
        expect(isLessOrEqual('hello', 'hello')).toEqual(true);
    });

    test('должна вернуть true если a меньше "car", "cat"', () => {
        expect(isLessOrEqual('car', 'cat')).toEqual(true);
    });

    test('должна вернуть false если a длиннее и символы совпадают "hello!", "hello"', () => {
        expect(isLessOrEqual('hello!', 'hello')).toEqual(false);
    });

    test('должна вернуть true если a короче и символы совпадают "hello", "hello!"', () => {
        expect(isLessOrEqual('hello', 'hello!')).toEqual(true);
    });

    test('должна вернуть true для пустых строк "", ""', () => {
        expect(isLessOrEqual('', '')).toEqual(true);
    });

    test('Должна выбросить TypeError если аргумент(ы) не строка', () => {
        expect(() => isLessOrEqual(123, 'hello')).toThrow(TypeError);
        expect(() => isLessOrEqual('hello', 123)).toThrow(TypeError);
    });
});