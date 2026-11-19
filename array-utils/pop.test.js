import {describe, test, expect} from 'bun:test';
import { len } from './len';
import { pop } from './pop';


describe("Тесты своего метода pop для массивов p7-l7",()=>{
    test("Должна удалить последний элемент и вернуть его: pop([1, 2, 3]) → 3, массив стал [1, 2]",()=>{
            const array = [1,2,3];
            const result = pop(array);
            expect(result).toBe(3);
            expect(len(array)).toEqual(2)
    })

    test("Должна вернуть undefined для пустого массива: pop([]) → undefined",()=>{
            const array = [];
            const result = pop(array);
            expect(result).toBe(undefined);
            expect(len(array)).toEqual(0)
    })

    test("Должна удалить единственный элемент: pop([42]) → 42, массив стал пустым (len === 0)",()=>{
            const array = [42];
            const result = pop(array);
            expect(result).toBe(42);
            expect(len(array)).toEqual(0)
    })

    test("Должна работать с массивом строк: pop(['a', 'b']) → 'b'",()=>{
            const array = ['a', 'b'];
            const result = pop(array);
            expect(result).toBe('b');
            expect(len(array)).toEqual(1)
    })

    test("Должна корректно удалить 0 или false (не спутать с undefined): pop([0]) → 0",()=>{
            const array = [0];
            const result = pop(array);
            expect(result).toBe(0);
            expect(len(array)).toEqual(0)

            const array1 = [false];
            const result1 = pop(array1);
            expect(result1).toBe(false);
            expect(len(array)).toEqual(0);
    })

    test("После двух pop подряд длина уменьшается на 2",()=>{
            const array = ['a', 'b'];
            pop(array);
            pop(array);
            expect(len(array)).toEqual(0)
    })

    test("Должна выбросить TypeError если arr не массив (pop('hello'))",()=>{
        expect(() => pop('hello')).toThrow(TypeError);
        expect(() => pop({0: 'a'})).toThrow(TypeError);
    })

})