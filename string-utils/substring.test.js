import {
    describe,
    test,
    expect
} from 'bun:test';
import {
    substring
} from './substring';

describe('Тесты substring p6-l4', () => {

    test("Должна вернуть 'hello' для ('hello', 0, 5)", () => {
        expect(substring('hello', 0, 5)).toEqual('hello');
    });

    test("Должна вернуть 'ell' для ('hello', 1, 4)", () => {
        expect(substring('hello', 1, 4)).toEqual('ell');
    });

    test("Должна вернуть 'h' для одного символа в начале для ('hello', 0, 1)", () => {
        expect(substring('hello', 0, 1)).toEqual('h');
    });

    test("Должна вернуть 'e' для одного символа при обмене границ('hello', 2, 1)", () => {
        expect(substring('hello', 2, 1)).toEqual('e');
    });

    test("Должна вернуть 'o' для одного символа при обмене границ('hello', 4, 5)", () => {
        expect(substring('hello', 4, 5)).toEqual('o');
    });

    test("Должна обрезать end до длины строки: ('hello', 0, 10 -> 'hello')", () => {
        expect(substring('hello', 0, 10)).toEqual('hello');
    });

    test("Должна вернуть до конца строки при не указанном 3-м аргументе: ('hello', 2) → 'llo'", () => {
        expect(substring('hello', 2)).toEqual('llo');
    });

    test("Должна поменять start и end местами, если start > end: ('hello', 4, 1) → 'ell'", () => {
        expect(substring('hello', 4, 1)).toEqual('ell');
    });

    test("Должна привести отрицательный start к 0: ('hello', -2, 3) → 'hel'", () => {
        expect(substring('hello', -2, 3)).toEqual('hel');
    });

    test("Должна привести отрицательный end к 0: ('hello', 3, -1) → 'hel'", () => {
        expect(substring('hello', 3, -1)).toEqual('hel');
    });

    test("Должна привести NaN к 0: ('hello', NaN, 3) → 'hel'", () => {
        expect(substring('hello', NaN, 3)).toEqual('hel');
    });

    test("Должна вернуть '' если start >= длины строки: ('hello', 5, 7) → ''", () => {
        expect(substring('hello', 5, 7)).toEqual('');
    });

    test("Должна вернуть '' для пустой исходной строки: ('', 0, 1) → ''", () => {
        expect(substring('', 0, 1)).toEqual('');
    });

    test("Должна работать с кириллицей: ('привет', 1, 4) → 'рив'", () => {
        expect(substring('привет', 1, 4)).toEqual('рив');
    });

    test('Должна выбросить TypeError если str не строка', () => {
        expect(() => substring(1, 1, 4)).toThrow(TypeError);
    });

    test('Должна выбросить TypeError если start не указан или не число', () => {
        expect(() => substring('hello', 'start', 4)).toThrow(TypeError);
    });

    test('Должна выбросить TypeError если end не число', () => {
        expect(() => substring('привет', 1, 'end')).toThrow(TypeError);
    });

});