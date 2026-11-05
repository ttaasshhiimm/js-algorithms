import {describe,test,expect} from 'bun:test';
import { push } from './push';
import { len } from './len';

describe("Тесты своего метода push для массивов p7-l6",()=>{

    test("Должна добавить элемент в конец и вернуть новую длину: push([1, 2], 3) → 3, массив [1, 2, 3]",()=>{
     const array = [1,2];
     const arrayLen = len(array);
     const result = push(array,3);  
     expect(array).toEqual([1,2,3]);
     expect(array[arrayLen]).toBe(3);  
     expect(result).toBe(3);
    })

    test("Должна работать с пустым массивом: push([], 'a') → 1, массив ['a']",()=>{
     const array = [];
     const arrayLen = len(array);
     const result = push(array,'a');  
     expect(array).toEqual(['a']);
     expect(array[arrayLen]).toBe('a');  
     expect(result).toBe(1);
    })

    test("Должна добавить несколько элементов по очереди", () => {
    const arr = [1, 2];
    push(arr, 3);   
    push(arr, 4);   
    expect(arr).toEqual([1, 2, 3, 4]); 
    });

    test("Должна добавить элемент в массив из одного элемента: push([10], 20) → 2, массив [10, 20]",()=>{
     const array = [10];
     const arrayLen = len(array);
     const result = push(array,20);  
     expect(array).toEqual([10,20]);
     expect(array[arrayLen]).toBe(20);  
     expect(result).toBe(2);
    })

    test("Должна добавить 0, false, null как полноценные элементы (проверь, что len их учитывает)",()=>{
     const array = [10,'a'];
     let arrayLen = len(array);
     let result = push(array,0);  
     expect(array).toEqual([10,'a',0]);
     expect(array[arrayLen]).toBe(0);  
     expect(result).toBe(3);

     arrayLen = len(array);
     result = push(array,false);  
     expect(array).toEqual([10,'a',0,false]);
     expect(array[arrayLen]).toBe(false);  
     expect(result).toBe(4);

     arrayLen = len(array);
     result = push(array,null);  
     expect(array).toEqual([10,'a',0,false,null]);
     expect(array[arrayLen]).toBe(null);  
     expect(result).toBe(5);
    })

    test("Должна добавить объект как элемент: push([], {a: 1}) → 1",()=>{
     const array = [];
     const arrayLen = len(array);
     const result = push(array,{a:1});  
     expect(array).toEqual([{a:1}]);
     expect(array[arrayLen]).toEqual({a:1});  
     expect(result).toBe(1);
    })

    test("Исходный массив изменился — arr[len-1] равен добавленному элементу", () => {
    const arr = [1, 2];
    const item = 3;
    const newLen = push(arr, item);
    expect(arr[newLen - 1]).toBe(item)
    })

    test("Должна выбросить TypeError если arr не массив (push('hello', 1))",()=>{
    expect(() => push('hello',1)).toThrow(TypeError);
    })
})