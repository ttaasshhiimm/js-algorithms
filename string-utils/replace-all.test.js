import {
    describe,
    test,
    expect
} from 'bun:test'
import {
    replaceAll
} from "./replace-all";



describe("Tests replaceAll p6l8", () => {
    test("Должна заменить одно вхождение: ('hello', 'll', 'LL') → 'heLLo'", () => {
        expect(replaceAll('hello', 'll', 'LL')).toEqual('heLLo')
    });


    test("Должна заменить несколько вхождений: ('banana', 'na', 'NA') → 'baNANA'", () => {
        expect(replaceAll('banana', 'na', 'NA')).toEqual('baNANA')
    });

    test("Должна не учитывать подставленную строку: ('aaa', 'aa', 'ba') → 'baa'", () => {
        expect(replaceAll('aaa', 'aa', 'ba')).toEqual('baa')
    });

    test("Должна вернуть исходную строку, если search не найден: ('hello', 'eli', 'hhh') → 'hello'", () => {
        expect(replaceAll('hello', 'eli', 'hhh')).toEqual('hello')
    });


    test("Должна работать с заменой символа на строку: ('a', 'a', 'hello') → 'hello'", () => {
        expect(replaceAll('a', 'a', 'hello')).toEqual('hello')
    });

    test("Должна работать с заменой на более длинную: ('hi', 'i', 'ello') → 'hello'", () => {
        expect(replaceAll('hi', 'i', 'ello')).toEqual('hello')
    });

    test("Должна работать с заменой на пустую строку: ('hello', 'l', '') → 'heo'", () => {
        expect(replaceAll('hello', 'l', '')).toEqual('heo')
    });

    test("Должна вернуть '' для пустой исходной строки: ('', 'abc', 'X') → ''", () => {
        expect(replaceAll('', 'abc', 'X')).toEqual('')
    });

    test("Должна вставить replacement вокруг каждого символа при пустом search: ('abc', '', 'X') → 'XaXbXcX'", () => {
        expect(replaceAll('abc', '', 'X')).toEqual('XaXbXcX')
    });

    test('Должна выбросить TypeError если любой аргумент не строка: (123) ', () => {
        expect(() => replaceAll(123, 'na', 'ba')).toThrow(TypeError);
        expect(() => replaceAll('banana', 123, 'ba')).toThrow(TypeError);
        expect(() => replaceAll('banana', 'na', 123)).toThrow(TypeError);
    });


})