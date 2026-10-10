import {
    describe,
    test,
    expect
} from 'bun:test';
import {
    isMore
} from './isMore';

describe('Тесты isMore', () => {
    test('должна вернуть true если a явно больше - различие на третьем символе "cat", "car"', () => {
        expect(isMore('cat', 'car')).toEqual(true);
    });

    test('должна вернуть false если a явно меньше "car", "cat"', () => {
        expect(isMore('car', 'cat')).toEqual(false);
    });

    test('Должна вернуть false для равных строк "hello", "hello"', () => {
        expect(isMore('hello', 'hello')).toEqual(false);
    });

    test('Должна вернуть true если a длинее, но символы совпадают "hello!","hello"', () => {
        expect(isMore('hello!', 'hello')).toEqual(true);
    });

    test('Должна вернуть false если a короче, но символы совпадают "hello","hello!"', () => {
        expect(isMore('hello', 'hello!')).toEqual(false);
    });

    test('Должна вернуть true если первый символ a больше длинна не важна "b","aaaaa"', () => {
        expect(isMore('b', 'aaaaa')).toEqual(true);
    });

    test("Должна вернуть false для заглавной vs строчной — 'A'(65) < 'a'(97) 'Admin', 'admini'", () => {
        expect(isMore('Admin', 'admini')).toEqual(false);
    });

    test("Должна вернуть false  a начинается с пробела a b c буквы ' a', 'aa'", () => {
        expect(isMore(' a', 'aa')).toEqual(false);
    });

    test("Должна вернуть true если a заканчивается пробелом 'aa ', 'aa'", () => {
        expect(isMore('aa ', 'aa')).toEqual(true);
    });

    test("Должна вернуть false для пустых строк '', '' ", () => {
        expect(isMore('', '')).toEqual(false);
    });

    test("Должна вернуть false если a пустая, b нет '', 'a' ", () => {
        expect(isMore('', 'a')).toEqual(false);
    });

    test('Должна выбросить TypeError если аргумент(ы) не строка', () => {
        expect(() => isMore(123, "hello")).toThrow(TypeError);
        expect(() => isMore("hello", 123)).toThrow(TypeError);
    });


});