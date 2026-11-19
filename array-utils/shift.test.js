import {describe,test,expect} from 'bun:test';
import { shift } from './shift';
import { len } from './len';


describe("Тесты своего метода shift для массивов p7-l8",()=>{
    test("Должна удалить первый элемент и вернуть его: shift([1, 2, 3]) → 1, массив [2, 3]",()=>{
       const array = [1,2,3];
       expect(shift(array)).toEqual(1);
       expect(len(array)).toEqual(2);
       expect(array).toEqual([2,3]);
    })

    test("Должна вернуть undefined для пустого массива: shift([]) → undefined",()=>{
       const array = [];
       expect(shift(array)).toEqual(undefined);
       expect(len(array)).toEqual(0);
       expect(array).toEqual([]);
    })

    test("Должна удалить единственный элемент: shift([42]) → 42, массив стал пустым",()=>{
       const array = [42];
       expect(shift(array)).toEqual(42);
       expect(len(array)).toEqual(0);
       expect(array).toEqual([]);
    })

    test("Должна сохранить порядок остальных элементов: shift(['a', 'b', 'c']) → 'a', массив ['b', 'c']",()=>{
       const array = ['a', 'b', 'c'];
       expect(shift(array)).toEqual('a');
       expect(len(array)).toEqual(2);
       expect(array).toEqual(['b', 'c']);
    })

    test("Должна корректно удалить falsy значение (не спутать с undefined): shift([0, 1]) → 0",()=>{
       const array = [0,1];
       expect(shift(array)).toEqual(0);
       expect(len(array)).toEqual(1);
       expect(array).toEqual([1]);
    })

    test("Два shift подряд уменьшают длину на 2",()=>{
       const array = [0,1,2];
       expect(shift(array)).toEqual(0);
       expect(shift(array)).toEqual(1);
       expect(len(array)).toEqual(1);
       expect(array).toEqual([2]);
    })

    test("Должна выбросить TypeError если arr не массив (shift('hello'))",()=>{
         expect(() => shift('hello')).toThrow(TypeError);
    })
})