import {describe, test, expect} from 'bun:test';
import { len } from './len';

describe("Тесты своего метода len для массивов p7-l4",()=>{
    test("Должна вернуть 3 для [1, 2, 3]",()=>{
        const array = [1,2,3];
        const result = len(array);
        expect(result).toBe(3);
    })

    test("Должна вернуть 0 для пустого массива []",()=>{
        const array = [];
        const result = len(array);
        expect(result).toBe(0);
    })

    test("Должна вернуть 1 для массива из одного элемента [42]",()=>{
        const array = [42];
        const result = len(array);
        expect(result).toBe(1);
    })

    test("Должна вернуть 4 для массива строк ['a', 'b', 'c', 'd']",()=>{
        const array = ['a', 'b', 'c', 'd'];
        const result = len(array);
        expect(result).toBe(4);
    })

    test("Должна вернуть 5 для массива с разными типами [1, 'two', true, null, 0]",()=>{
        const array = [1, 'two', true, null, 0];
        const result = len(array);
        expect(result).toBe(5);
    })

    test("Должна не мутировать исходный массив: после len([1, 2, 3]) массив по-прежнему [1, 2, 3] (запомни длину и элементы до вызова)",()=>{
        const array = [1, 2, 3];
        const lenBefore = len(array); //3
        len(array);
        expect(len(array)).toBe(lenBefore);
        expect(array).toEqual([1, 2, 3]);
    })

    test("Должна выбросить TypeError если передать строку len('hello')",()=>{
        const array = 'hello';
        expect(() => len(array)).toThrow(TypeError);
    })

    test("Должна выбросить TypeError если передать число len(123)",()=>{
        const array = 123;
        expect(() => len(array)).toThrow(TypeError);
    })

    test("Должна выбросить TypeError если передать объект len({0: 'a'})",()=>{
        const array = {0: 'a'};
        expect(() => len(array)).toThrow(TypeError);
    })

    test("Должна выбросить TypeError если аргумент не передан len()",()=>{
        expect(() => len()).toThrow(TypeError);
    })
})