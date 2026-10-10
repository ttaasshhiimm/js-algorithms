import {
    describe,
    test,
    expect
} from 'bun:test';
import {
    isMoreOrEqual
} from './isMoreOrEqual';

describe('Тесты isMoreOrEqual', () => {
    test('должна вернуть true если a больше "cat", "car"', () => {
        expect(isMoreOrEqual('cat', 'car')).toEqual(true);
    });

    test('должна вернуть true если строки равны "hello", "hello"', () => {
        expect(isMoreOrEqual('hello', 'hello')).toEqual(true);
    });

    test('должна вернуть false если a меньше "car", "cat"', () => {
        expect(isMoreOrEqual('car', 'cat')).toEqual(false);
    });

    test('должна вернуть true если a длиннее и символы совпадают "hello!", "hello"', () => {
        expect(isMoreOrEqual('hello!', 'hello')).toEqual(true);
    });

    test('должна вернуть false если a короче и символы совпадают "hello", "hello!"', () => {
        expect(isMoreOrEqual('hello', 'hello!')).toEqual(false);
    });

    test('должна вернуть true для пустых строк "", ""', () => {
        expect(isMoreOrEqual('', '')).toEqual(true);
    });

    test('Должна выбросить TypeError если аргумент(ы) не строка', () => {
        expect(() => isMoreOrEqual(123, 'hello')).toThrow(TypeError);
        expect(() => isMoreOrEqual('hello', 123)).toThrow(TypeError);
    });
});