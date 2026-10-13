import {
    describe,
    test,
    expect
} from 'bun:test';
import {
    reverse
} from './reverse';
import {
    checkString
} from './helpers/checkStrings';






describe('Tests from p5-l4', () => {
    test('Должна перевернуть строку: reverse "hello" → "olleh"', () => {
        expect(reverse('hello')).toEqual('olleh')
    });

    test('Должна вернуть "" для пустой строки', () => {
        expect(reverse('')).toEqual('')
    });

    test('Должна вернуть "a" для строки из одного символа', () => {
        expect(reverse('a')).toEqual('a')
    });

    test('Должна вернуть ту же строку для палиндрома: reverse "racecar"', () => {
        expect(reverse('racecar')).toEqual('racecar')
    });

    test('Должна перевернуть строку с пробелами: reverse "a b c"', () => {
        expect(reverse('a b c')).toEqual('c b a')
    });

    test('Должна работать с кириллицей: reverse "привет"', () => {
        expect(reverse('привет')).toEqual('тевирп')
    });


    test('Должна выбросить TypeError если аргумент не строка', () => {
        expect(() => reverse(123)).toThrow(TypeError);
    });

    test('Должна выбросить TypeError если аргумент null', () => {
        expect(() => reverse(null)).toThrow(TypeError);
    });
})