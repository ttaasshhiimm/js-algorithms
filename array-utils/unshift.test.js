import {describe,test,expect} from 'bun:test';
import { unshift } from './unshift';
import { len } from './len';




describe("Тесты своего метода unshift для массивов p7-l8",()=>{
    test("Должна добавить элемент в начало и вернуть новую длину: unshift([2, 3], 1) → 3, массив [1, 2, 3]",()=>{
       const array = [2,3];
       expect(unshift(array,1)).toEqual(3);
       expect(len(array)).toEqual(3);
       expect(array).toEqual([1,2,3]);
    })

    test("Должна работать с пустым массивом: unshift([], 'a') → 1, массив ['a']",()=>{
       const array = [];
       expect(unshift(array,'a')).toEqual(1);
       expect(len(array)).toEqual(1);
       expect(array).toEqual(['a']);
    })

    test("Должна добавить в массив из одного элемента: unshift([20], 10) → 2, массив [10, 20]",()=>{
       const array = [20];
       expect(unshift(array,10)).toEqual(2);
       expect(len(array)).toEqual(2);
       expect(array).toEqual([10,20]);
    })

    test("Должна сохранить порядок остальных элементов (ничего не затёрлось): unshift(['b', 'c', 'd'], 'a') → массив ['a', 'b', 'c', 'd']",()=>{
       const array = ['b', 'c', 'd'];
       expect(unshift(array,'a')).toEqual(4);
       expect(len(array)).toEqual(4);
       expect(array).toEqual(['a', 'b', 'c', 'd']);
    })

    test("Должна сохранить порядок остальных элементов (ничего не затёрлось): unshift(['b', 'c', 'd'], 'a') → массив ['a', 'b', 'c', 'd']",()=>{
       const array = ['b', 'c', 'd'];
       expect(unshift(array,'a')).toEqual(4);
       expect(len(array)).toEqual(4);
       expect(array).toEqual(['a', 'b', 'c', 'd']);
    })

    test("Два unshift подряд: первый элемент становится вторым",()=>{
       const array = ['c', 'd', 'e'];
       expect(unshift(array,'b')).toEqual(4);
       expect(unshift(array,'a')).toEqual(5);
       expect(len(array)).toEqual(5);
       expect(array).toEqual(['a', 'b', 'c', 'd', 'e']);
    })

    test("Должна выбросить TypeError если arr не массив (unshift('hello', 1))",()=>{
        expect(() => unshift('hello',1)).toThrow(TypeError);
        })
})