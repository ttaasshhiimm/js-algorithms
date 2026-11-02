import {
    describe,
    test,
    expect
} from 'bun:test';
import {
    pad
} from './pad';






describe("Test pad function p6l9", () => {
    test("Должна дополнить слева: ('hi', 5, '-', 'left') → '---hi'", () => {
        expect(pad('hi', 5, '-', 'left')).toEqual('---hi')
    })

    test("Должна дополнить справа: ('hi', 5, '-', 'right') → 'hi---'", () => {
        expect(pad('hi', 5, '-', 'right')).toEqual('hi---')
    })

    test("Должна дополнить с обеих сторон (чётное): ('hi', 6, '-', 'both') → '--hi--'", () => {
        expect(pad('hi', 6, '-', 'both')).toEqual('--hi--')
    })

    test("Должна дополнить с обеих сторон (нечётное, лишний справа): ('hi', 5, '-', 'both') → '-hi--'", () => {
        expect(pad('hi', 5, '-', 'both')).toEqual('-hi--')
    })

    test("Должна вернуть строку без изменений, если длина уже достаточная: ('hello', 5, '-', 'left') → 'hello'", () => {
        expect(pad('hello', 5, '-', 'left')).toEqual('hello')
    })

    test("Должна вернуть строку без изменений, если она длиннее целевой: ('hello', 3, '-', 'left') → 'hello'", () => {
        expect(pad('hello', 3, '-', 'left')).toEqual('hello')
    })

    test("Должна работать с пробелами: ('a', 3, ' ', 'right') → 'a  '", () => {
        expect(pad('a', 3, ' ', 'right')).toEqual('a  ')
    })

    test("Должна работать с пустой исходной строкой: ('', 4, 'x', 'both') → 'xxxx'", () => {
        expect(pad('', 4, 'x', 'both')).toEqual('xxxx')
    })

    test("Должна вернуть '' для pad('', 0, '-', 'left')", () => {
        expect(pad('', 0, '-', 'left')).toEqual('')
    })

    test("Должна дополнить многосимвольной строкой слева: ('hi', 7, 'ab', 'left') → 'ababahi' (padding=5, 'ab' повторяется и обрезается)", () => {
        expect(pad('hi', 7, 'ab', 'left')).toEqual('ababahi')
    })

    test("Должна дополнить многосимвольной строкой справа: ('hi', 7, 'ab', 'right') → 'hiababa'", () => {
        expect(pad('hi', 7, 'ab', 'right')).toEqual('hiababa')
    })

    test("Должна выбросить ошибку при неверном side: ('a', 3, '-', 'top')", () => {
        expect(() => pad('hi', 7, 'ab', 'top')).toThrow(TypeError);
    });

    test('Должна выбросить TypeError если str не строка: (123) ', () => {
        expect(() => pad(7, 7, 'ab', 'right')).toThrow(TypeError);
    });
})