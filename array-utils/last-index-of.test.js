import {describe,test,expect} from 'bun:test';
import { lastIndexOf } from './last-index-of';
import { len } from './len';


describe("Тесты своего метода lastIndex для массивов p7-l10",()=>{

    test("Должна вернуть индекс последнего вхождения при дубликатах: lastIndexOf([1, 2, 1, 3], 1) → 2",()=>{
        const array = [1, 2, 1, 3];
        expect(len(array)).toEqual(4);
        expect(lastIndexOf(array,1)).toEqual(2);
        expect(array).toEqual([1,2,1,3]);
    })

    test("Должна вернуть -1 если элемента нет: lastIndexOf([1, 2, 3], 9) → -1",()=>{
        const array = [1, 2, 3];
        expect(len(array)).toEqual(3);
        expect(lastIndexOf(array,9)).toEqual(-1);
        expect(array).toEqual([1,2,3]);
    })

    test("Должна вернуть 0 для единственного вхождения в начале: lastIndexOf([5, 6, 7], 5) → 0",()=>{
        const array = [5, 6, 7];
        expect(len(array)).toEqual(3);
        expect(lastIndexOf(array,5)).toEqual(0);
        expect(array).toEqual([5,6,7]);
    })

    test("Должна вернуть последний индекс для элемента в конце: lastIndexOf([5, 6, 7], 7) → 2",()=>{
        const array = [5, 6, 7];
        expect(len(array)).toEqual(3);
        expect(lastIndexOf(array,7)).toEqual(2);
        expect(array).toEqual([5,6,7]);
    })

    test("Должна вернуть -1 для пустого массива: lastIndexOf([], 1) → -1",()=>{
        const array = [];
        expect(len(array)).toEqual(0);
        expect(lastIndexOf(array,1)).toEqual(-1);
        expect(array).toEqual([]);
    })

    test("Должна найти символ: lastIndexOf(['a', 'b', 'a'], 'a') → 2",()=>{
        const array = ['a', 'b', 'a'];
        expect(len(array)).toEqual(3);
        expect(lastIndexOf(array,'a')).toEqual(2);
        expect(array).toEqual(['a', 'b', 'a']);
    })

    test("Должна найти строку: lastIndexOf(['ab', 'cd', 'ab'], 'ab') → 2",()=>{
        const array = ['ab', 'cd', 'ab'];
        expect(len(array)).toEqual(3);
        expect(lastIndexOf(array,'ab')).toEqual(2);
        expect(array).toEqual(['ab', 'cd', 'ab']);
    })

    test("Должна выбросить TypeError если arr не массив (indexOf('hello', 1))",()=>{
            expect(() => lastIndexOf('hello',1)).toThrow(TypeError);
    })
})