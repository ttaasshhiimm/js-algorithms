import {describe,test,expect} from 'bun:test';
import { indexOf } from './index-of';
import { len } from './len';




describe("Тесты своего метода indexOf для массивов p7-l9",()=>{
    test("Должна найти элемент в середине: indexOf([10, 20, 30], 20) → 1",()=>{
        const array = [10,20,30];
        expect(len(array)).toEqual(3);
        expect(indexOf(array,20)).toEqual(1);
        expect(array).toEqual([10,20,30]);
    })

    test("Должна найти первый элемент: indexOf([10, 20, 30], 10) → 0",()=>{
        const array = [10,20,30];
        expect(len(array)).toEqual(3);
        expect(indexOf(array,10)).toEqual(0);
        expect(array).toEqual([10,20,30]);
    })

    test("Должна найти последний элемент: indexOf([10, 20, 30], 30) → 2",()=>{
        const array = [10,20,30];
        expect(len(array)).toEqual(3);
        expect(indexOf(array,30)).toEqual(2);
        expect(array).toEqual([10,20,30]);
    })

    test("Должна вернуть -1 если элемента нет: indexOf([10, 20, 30], 99) → -1",()=>{
        const array = [10,20,30];
        expect(len(array)).toEqual(3);
        expect(indexOf(array,99)).toEqual(-1);
        expect(array).toEqual([10,20,30]);
    })

    test("Должна вернуть индекс первого вхождения при дубликатах: indexOf([1, 2, 1, 3], 1) → 0",()=>{
        const array = [1,2,1,3];
        expect(len(array)).toEqual(4);
        expect(indexOf(array,1)).toEqual(0);
        expect(array).toEqual([1,2,1,3]);
    })

    test("Должна вернуть -1 для пустого массива: indexOf([], 1) → -1",()=>{
        const array = [];
        expect(len(array)).toEqual(0);
        expect(indexOf(array,1)).toEqual(-1);
        expect(array).toEqual([]);
    })

    test("Должна найти строку по значению: indexOf(['a', 'b', 'c'], 'b') → 1",()=>{
        const array = ['a', 'b', 'c'];
        expect(len(array)).toEqual(3);
        expect(indexOf(array,'b')).toEqual(1);
        expect(array).toEqual(['a', 'b', 'c']);
    })

    test("Должна корректно работать с массивом строк: indexOf(['abc', 'def', 'xyz'], 'def') → 1",()=>{
        const array = ['abc', 'def', 'xyz'];
        expect(len(array)).toEqual(3);
        expect(indexOf(array,'def')).toEqual(1);
        expect(array).toEqual(['abc', 'def', 'xyz']);
    })

    test("Должна найти 0 (не спутать с false): indexOf([0, false], 0) → 0, indexOf([0, false], false) → 1",()=>{
        const array = [0, false];
        expect(len(array)).toEqual(2);
        expect(indexOf(array,0)).toEqual(0);
        expect(array).toEqual([0, false]);

        const array1 = [0, false];
        expect(len(array1)).toEqual(2);
        expect(indexOf(array1,false)).toEqual(1);
        expect(array1).toEqual([0, false]);
    })

    test("Должна выбросить TypeError если arr не массив (indexOf('hello', 1))",()=>{
            expect(() => indexOf('hello',1)).toThrow(TypeError);
    })
})