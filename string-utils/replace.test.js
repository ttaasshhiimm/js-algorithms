import {describe,test,expect} from 'bun:test';
import {replace} from './replace';








describe("Tests function replace p6l7", () => {
    test("Должна заменить 'world' на 'everyone': ('hello world', 'world', 'everyone') → 'hello everyone'", () => {
        expect(replace('hello world', 'world', 'everyone')).toEqual('hello everyone')
    });

    test("Должна заменить в начале: ('hello world', 'hello', 'hi') → 'hi world'", () => {
        expect(replace('hello world', 'hello', 'hi')).toEqual('hi world')
    });

    test("Должна заменить в конце: ('hello world', 'world', 'earth') → 'hello earth'", () => {
        expect(replace('hello world', 'world', 'earth')).toEqual('hello earth')
    });

    test("Должна заменить в середине: ('hello world', 'ello', 'i') → 'hi world'", () => {
        expect(replace('hello world', 'ello', 'i')).toEqual('hi world')
    });

    test("Должна вернуть исходную строку, если search не найден: ('hello', 'help', 'hhhh') → 'hello'", () => {
        expect(replace('hello', 'help', 'hhhh')).toEqual('hello')
    });

    test("Должна работать с заменой на более длинную: ('hi', 'i', 'ello') → 'hello'", () => {
        expect(replace('hi', 'i', 'ello')).toEqual('hello')
    });

    test("Должна работать с заменой на более короткую: ('hello', 'ello', 'i') → 'hi'", () => {
        expect(replace('hello', 'ello', 'i')).toEqual('hi')
    });

    test("Должна работать с заменой на пустую строку: ('hello', 'll', '') → 'heo'", () => {
        expect(replace('hello', 'll', '')).toEqual('heo')
    });

    test("Должна заменить только первое вхождение при множественных: ('banana', 'na', 'ba') → 'babana'", () => {
        expect(replace('banana', 'na', 'ba')).toEqual('babana')
    });

    test("Должна работать с кириллицей: ('привет мир', 'мир', 'всем') → 'привет всем'", () => {
        expect(replace('привет мир', 'мир', 'всем')).toEqual('привет всем')
    });

    test('Должна выбросить TypeError если любой аргумент не строка: (123) ', () => {
        expect(() => replace(123, 'na', 'ba')).toThrow(TypeError);
        expect(() => replace('banana', 123, 'ba')).toThrow(TypeError);
        expect(() => replace('banana', 'na', 123)).toThrow(TypeError);
    });
})