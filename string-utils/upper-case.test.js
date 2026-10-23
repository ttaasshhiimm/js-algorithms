import {
    describe,
    test,
    expect
} from 'bun:test'
import {
    toUpperCase
} from './upper-case'

describe("Tests upperCase() p6l10", () => {
    test("Должна перевести все строчные латинские: ('hello') → 'HELLO'", () => {
        expect(toUpperCase('hello')).toEqual('HELLO')
    });

    test("Должна оставить заглавные без изменений: ('HELLO') → 'HELLO'", () => {
        expect(toUpperCase('HELLO')).toEqual('HELLO')
    });

    test("Должна работать со смешанным регистром: ('Hello World') → 'HELLO WORLD'", () => {
        expect(toUpperCase('Hello World')).toEqual('HELLO WORLD')
    });

    test("Должна не трогать пробелы: (' hello 123') → ' HELLO 123'", () => {
        expect(toUpperCase(' hello 123')).toEqual(' HELLO 123')
    });

    test("Должна не менять цифры: ('hello123') → 'HELLO123'", () => {
        expect(toUpperCase('hello123')).toEqual('HELLO123')
    });

    test("Должна не менять знаки: ('hello!@#') → 'HELLO!@#'", () => {
        expect(toUpperCase('hello!@#')).toEqual('HELLO!@#')
    });

    test("Должна вернуть '' для пустой строки", () => {
        expect(toUpperCase('')).toEqual('')
    });

    test("Должна вернуть строку без изменений, если нет строчных букв: ('123!@#') → '123!@#'", () => {
        expect(toUpperCase('123!@#')).toEqual('123!@#')
    });

    test("Должна перевести кириллицу: ('привет') → 'ПРИВЕТ'", () => {
        expect(toUpperCase('привет')).toEqual('ПРИВЕТ')
    });

    test("Должна работать со смесью латиницы и кириллицы: ('hello привет') → 'HELLO ПРИВЕТ'", () => {
        expect(toUpperCase('hello привет')).toEqual('HELLO ПРИВЕТ')
    });

    test("Должна не менять уже заглавные буквы (включая кириллицу): ('ПРИВЕТ') → 'ПРИВЕТ'", () => {
        expect(toUpperCase('ПРИВЕТ')).toEqual('ПРИВЕТ')
    });

    test('Должна выбросить TypeError если любой аргумент не строка: (123) ', () => {
        expect(() => toUpperCase(123)).toThrow(TypeError);
    });


})