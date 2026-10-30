import {
    describe,
    test,
    expect
} from 'bun:test';
import {
    slice
} from "./slice";








describe('Тесты функции slice p6-l5', () => {

    test('Должна вернуть "hello" для ("hello", 0, 5)', () => {
        expect(slice("hello", 0, 5)).toEqual("hello")
    });

    test("Должна вернуть 'ell' для ('hello', 1, 4)", () => {
        expect(slice('hello', 1, 4)).toEqual('ell')
    });

    test("Должна вернуть 'll' для ('hello', 2, 4)", () => {
        expect(slice('hello', 2, 4)).toEqual('ll')
    });

    test("Должна вернуть 'llo' для ('hello', 2) — без end, до конца", () => {
        expect(slice('hello', 2)).toEqual('llo')
    });

    test("Должна вернуть 'h' для ('hello', 0, 1)", () => {
        expect(slice('hello', 0, 1)).toEqual('h')
    });

    test("Должна вернуть 'l' для ('hello', 2, 3)", () => {
        expect(slice('hello', 2, 3)).toEqual('l')
    });

    test("Должна вернуть 'o' для ('hello', 4)", () => {
        expect(slice('hello', 4)).toEqual('o')
    });

    test("Должна вернуть 'llo' для отрицательного start: ('hello', -3)", () => {
        expect(slice('hello', -3)).toEqual('llo')
    });

    test("Должна вернуть 'hell' для отрицательного end: ('hello', 0, -1)", () => {
        expect(slice('hello', 0, -1)).toEqual('hell')
    });

    test("Должна вернуть 'll' для обоих отрицательных: ('hello', -3, -1)", () => {
        expect(slice('hello', -3, -1)).toEqual('ll')
    });

    test("Должна вернуть '' если start >= end после нормализации: ('hello', 4, 1)", () => {
        expect(slice('hello', 4, 1)).toEqual('')
    });

    test("Должна вернуть '' если start за границей: ('hello', 10, 15)", () => {
        expect(slice('hello', 10, 15)).toEqual('')
    });

    test("Должна нормализовать выходящий за границы отрицательный start: ('hello', -10, 3) → 'hel'", () => {
        expect(slice('hello', -10, 3)).toEqual('hel')
    });

    test("Должна вернуть '' для пустой строки: ('', 0, 1)", () => {
        expect(slice('', 0, 1)).toEqual('')
    });

    test("Должна работать с кириллицей: ('привет', 1, 4) → 'рив'", () => {
        expect(slice('привет', 1, 4)).toEqual('рив')
    });

    test("Должна выбросить TypeError если str не строка", () => {
        expect(() => slice(1, 1, 4)).toThrow(TypeError);
    });

    test("Должна выбросить TypeError если 2-й аргумент не число", () => {
        expect(() => slice("hello", 'test', 4)).toThrow(TypeError);
    });

    test("Должна выбросить TypeError если 3-й аргумент указан и не число", () => {
        expect(() => slice("hello", 4, 'test')).toThrow(TypeError);
    });

})