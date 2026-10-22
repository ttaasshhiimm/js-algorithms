import {
    describe,
    test,
    expect
} from 'bun:test';

import {
    trim
} from './trim';





describe("Tests trim p6-l6", () => {
    test("Должна удалить пробелы с обеих сторон: ('  hello  ') → 'hello'", () => {
        expect(trim('  hello  ')).toEqual('hello')
    });

    test("Должна удалить пробелы только слева: ('  hello') → 'hello'", () => {
        expect(trim('  hello')).toEqual('hello')
    });

    test("Должна удалить пробелы только справа: ('hello  ') → 'hello'", () => {
        expect(trim('hello  ')).toEqual('hello')
    });

    test("Должна вернуть строку без изменений, если пробелов нет: ('hello') → 'hello'", () => {
        expect(trim('hello')).toEqual('hello')
    });

    test("Должна вернуть '' для строки из одних пробелов: ('   ') → ''", () => {
        expect(trim('  ')).toEqual('')
    });

    test("Должна вернуть '' для пустой строки: ('') → ''", () => {
        expect(trim('')).toEqual('')
    });

    test("Должна сохранить пробелы внутри строки: ('  he llo  ') → 'he llo'", () => {
        expect(trim('  he llo  ')).toEqual('he llo')
    });

    test("Должна удалить только пробелы, не \t и \n: (' \t hello \n ') → '\t hello \n'", () => {
        expect(trim(' \t hello \n ')).toEqual('\t hello \n')
    });

    test("Должна работать с кириллицей: ('  привет  ') → 'привет'", () => {
        expect(trim('   привет   ')).toEqual('привет')
    });

    test('Должна выбросить TypeError если аргумент не строка: (123) ', () => {
        expect(() => trim(123)).toThrow(TypeError);
    });

    test('Должна выбросить TypeError если аргумент null ', () => {
        expect(() => trim(null)).toThrow(TypeError);
    });



})