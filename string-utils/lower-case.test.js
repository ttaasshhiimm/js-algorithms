import { describe, test, expect } from 'bun:test';
import { toLowerCase } from './lower-case';

describe("Tests lowerCase() p6l10", () => {
    test("Должна перевести все заглавные латинские: ('HELLO') → 'hello'", () => {
        expect(toLowerCase('HELLO')).toEqual('hello')
    });

    test("Должна оставить строчные без изменений: ('hello') → 'hello'", () => {
        expect(toLowerCase('hello')).toEqual('hello')
    });

    test("Должна работать со смешанным регистром: ('Hello World') → 'hello world'", () => {
        expect(toLowerCase('Hello World')).toEqual('hello world')
    });

    test("Должна не трогать пробелы: (' HELLO 123') → ' hello 123'", () => {
        expect(toLowerCase(' HELLO 123')).toEqual(' hello 123')
    });

    test("Должна не менять цифры: ('HELLO123') → 'hello123'", () => {
        expect(toLowerCase('HELLO123')).toEqual('hello123')
    });

    test("Должна не менять знаки: ('HELLO!@#') → 'hello!@#'", () => {
        expect(toLowerCase('HELLO!@#')).toEqual('hello!@#')
    });

    test("Должна вернуть '' для пустой строки", () => {
        expect(toLowerCase('')).toEqual('')
    });

    test("Должна вернуть строку без изменений, если нет заглавных букв: ('123!@#') → '123!@#'", () => {
        expect(toLowerCase('123!@#')).toEqual('123!@#')
    });

    test("Должна перевести кириллицу: ('ПРИВЕТ') → 'привет'", () => {
        expect(toLowerCase('ПРИВЕТ')).toEqual('привет')
    });

    test("Должна работать со смесью латиницы и кириллицы: ('HELLO ПРИВЕТ') → 'hello привет'", () => {
        expect(toLowerCase('HELLO ПРИВЕТ')).toEqual('hello привет')
    });

    test("Должна не менять уже строчные буквы (включая кириллицу): ('привет') → 'привет'", () => {
        expect(toLowerCase('привет')).toEqual('привет')
    });

    test('Должна выбросить TypeError если  аргумент не строка: (123) ', () => {
        expect(() => toLowerCase(123)).toThrow(TypeError);
    });
})