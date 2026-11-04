import {describe, test, expect} from 'bun:test';
import { at } from './at';
import { len } from './len';

describe("Тесты своего метода at для массивов p7-l5",()=>{
    test("Должна вернуть элемент по положительному индексу: at([10, 20, 30], 1) → 20",()=>{
        const array = [10,20,30];
        const lenBefore = len(array); 
        const result = at(array,1);
        expect(result).toBe(20);
        expect(lenBefore).toBe(len(array));
        expect(array).toEqual([10,20,30])
    })

    test("Должна вернуть первый элемент: at([10, 20, 30], 0) → 10",()=>{
        const array = [10,20,30];
        const lenBefore = len(array);
        const result = at(array,0);
        expect(result).toBe(10);
        expect(lenBefore).toBe(len(array));
        expect(array).toEqual([10,20,30])
    })

    test("Должна вернуть последний элемент по отрицательному индексу: at([10, 20, 30], -1) → 30",()=>{
        const array = [10,20,30];
        const lenBefore = len(array);
        const result = at(array,-1);
        expect(result).toBe(30);
        expect(lenBefore).toBe(len(array));
        expect(array).toEqual([10,20,30])
    })

    test("Должна вернуть предпоследний элемент: at([10, 20, 30], -2) → 20",()=>{
        const array = [10,20,30];
        const lenBefore = len(array);
        const result = at(array,-2);
        expect(result).toBe(20);
        expect(lenBefore).toBe(len(array));
        expect(array).toEqual([10,20,30])
    })

    test("Должна вернуть первый через -len: at([10, 20, 30], -3) → 10",()=>{
        const array = [10,20,30];
        const lenBefore = len(array);
        const result = at(array,-3);
        expect(result).toBe(10);
        expect(lenBefore).toBe(len(array));
        expect(array).toEqual([10,20,30])
    })

    test("Должна вернуть undefined при выходе за правую границу: at([10, 20, 30], 5) → undefined",()=>{
        const array = [10,20,30];
        const lenBefore = len(array);
        const result = at(array,5);
        expect(result).toBe(undefined);
        expect(lenBefore).toBe(len(array));
        expect(array).toEqual([10,20,30])
    })

    test("Должна вернуть undefined при выходе за левую границу: at([10, 20, 30], -5) → undefined",()=>{
        const array = [10,20,30];
        const lenBefore = len(array);
        const result = at(array,-5);
        expect(result).toBe(undefined);
        expect(lenBefore).toBe(len(array));
        expect(array).toEqual([10,20,30])
    })

    test("Должна вернуть undefined для пустого массива: at([], 0) → undefined",()=>{
        const array = [];
        const lenBefore = len(array);
        const result = at(array,0);
        expect(result).toBe(undefined);
        expect(lenBefore).toBe(len(array));
        expect(array).toEqual([])
    })

    test("Должна вернуть undefined для пустого массива и отрицательного: at([], -1) → undefined",()=>{
        const array = [];
        const lenBefore = len(array);
        const result = at(array,-1);
        expect(result).toBe(undefined);
        expect(lenBefore).toBe(len(array));
        expect(array).toEqual([])
    })

    test("Должна работать с массивом строк: at(['a', 'b', 'c'], 2) → 'c'",()=>{
        const array = ['a', 'b', 'c'];
        const lenBefore = len(array);
        const result = at(array,2);
        expect(result).toBe('c');
        expect(lenBefore).toBe(len(array));
        expect(array).toEqual(['a', 'b', 'c'])
    })

    test("Должна выбросить TypeError если arr не массив",()=>{
        const array = {0: 'a'};
        expect(() => at(array)).toThrow(TypeError);
    })

    test("Должна выбросить TypeError если index не число (at([1], 'a'))",()=>{
        const array = [1];
        const lenBefore = len(array);
        expect(lenBefore).toBe(len(array));
        expect(array).toEqual([1])
        expect(() => at(array,'a')).toThrow(TypeError);
    })
})