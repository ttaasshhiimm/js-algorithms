import { len } from "./len";

/**
 * Добавляет элемент в начало массива, сдвигая все существующие элементы
 * на одну позицию вправо. ⚠️ Мутирует исходный массив.
 * Работает по аналогии со стандартным Array.prototype.unshift:
 * возвращает новую длину массива.
 *
 * @param {Array} arr — массив, в который добавляем элемент (будет изменён)
 * @param {*} item — элемент, который добавляем в начало
 * @returns {number} — новая длина массива после добавления
 * @throws {TypeError} — если arr не массив (проверка внутри len)
 *
 * @example
 *   const arr = [2, 3];
 *   unshift(arr, 1);      // 3
 *   console.log(arr);     // [1, 2, 3] — массив мутирован
 *
 *   unshift([], 'a');     // 1
 *   unshift([10], 20);    // 2 (массив стал [20, 10])
 */
export function unshift(arr,item) {

    const currLen = len(arr);
    for(let i = currLen;i>0;i--) {
       arr[i] = arr[i-1];
    }
    
    arr[0] = item;

    return len(arr);
}