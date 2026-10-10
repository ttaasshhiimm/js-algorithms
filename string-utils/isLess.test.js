import {
    describe,
    test,
    expect
} from 'bun:test';
import {
    isLess
} from './isLess';

describe('Тесты isLess', () => {
    test('должна вернуть true если a явно меньше — различие на третьем символе "car", "cat"', () => {
        expect(isLess('car', 'cat')).toEqual(true);
    });

    test('должна вернуть false если a больше "cat", "car"', () => {
        expect(isLess('cat', 'car')).toEqual(false);
    });

    test('Должна вернуть false для равных строк "hello", "hello"', () => {
        expect(isLess('hello', 'hello')).toEqual(false);
    });

    test('Должна вернуть true если a короче "hello", "hello!"', () => {
        expect(isLess('hello', 'hello!')).toEqual(true);
    });

    test("Должна вернуть true для заглавной vs строчной — 'A'(65) < 'a'(97) 'A', 'a'", () => {
        expect(isLess('A', 'a')).toEqual(true);
    });

    test("Должна вернуть true для пустой vs непустой '', 'a'", () => {
        expect(isLess('', 'a')).toEqual(true);
    });

    test('Должна выбросить TypeError если аргумент(ы) не строка', () => {
        expect(() => isLess(123, 'hello')).toThrow(TypeError);
        expect(() => isLess('hello', 123)).toThrow(TypeError);
    });
});