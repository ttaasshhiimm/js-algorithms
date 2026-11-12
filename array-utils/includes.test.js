import {describe,test,expect} from 'bun:test';
import { includes } from './includes';
import { len } from './len';


describe("Тесты своего метода lastIndex для массивов p7-l10",()=>{

    test("Должна вернуть true если элемент есть: includes([1, 2, 3], 2) → true",()=>{
        const array = [1, 2, 3];
        expect(len(array)).toEqual(3);
        expect(includes(array,2)).toEqual(true);
        expect(array).toEqual([1,2,3]);
    })

    test("Должна вернуть false если элемента нет: includes([1, 2, 3], 9) → false",()=>{
        const array = [1, 2, 3];
        expect(len(array)).toEqual(3);
        expect(includes(array,9)).toEqual(false);
        expect(array).toEqual([1,2,3]);
    })

    test("Должна вернуть false для пустого массива: includes([], 1) → false",()=>{
        const array = [];
        expect(len(array)).toEqual(0);
        expect(includes(array,1)).toEqual(false);
        expect(array).toEqual([]);
    })

    test("Должна вернуть true для первого элемента: includes([1, 2, 3], 1) → true",()=>{
        const array = [1,2,3];
        expect(len(array)).toEqual(3);
        expect(includes(array,1)).toEqual(true);
        expect(array).toEqual([1,2,3]);
    })

    test("Должна вернуть true для последнего элемента: includes([1, 2, 3], 3) → true",()=>{
        const array = [1,2,3];
        expect(len(array)).toEqual(3);
        expect(includes(array,3)).toEqual(true);
        expect(array).toEqual([1,2,3]);
    })

    test("Должна найти строку: includes(['a', 'b'], 'b') → true",()=>{
        const array = ['a', 'b'];
        expect(len(array)).toEqual(2);
        expect(includes(array,'b')).toEqual(true);
        expect(array).toEqual(['a', 'b']);
    })

    test("Должна различать 0 и false: includes([0], false) → false, includes([0], 0) → true",()=>{

        const array = [0];
        expect(len(array)).toEqual(1);
        expect(includes(array,false)).toEqual(false);
        expect(array).toEqual([0]);

        const array1 = [0];
        expect(len(array)).toEqual(1);
        expect(includes(array,0)).toEqual(true);
        expect(array).toEqual([0]);
    })

    test("Должна выбросить TypeError если arr не массив (indexOf('hello', 1))",()=>{
            expect(() => includes('hello',1)).toThrow(TypeError);
    })
})