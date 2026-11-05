import{len} from './len';

/**
 * Добавляет элемент в конец массива, мутируя исходный массив.
 * Возвращает новую длину массива после добавления.
 * В отличие от стандартного push, возвращает только длину (не сам массив).
 *
 * @param {Array} array — массив, в который добавляем элемент
 * @param {*} item — элемент, который добавляем в конец
 * @returns {number} — новая длина массива после добавления
 * @throws {TypeError} — если array не массив (проверка внутри len)
 *
 * @example
 *   const arr = [1, 2];
 *   push(arr, 3);       // 3
 *   console.log(arr);   // [1, 2, 3] — массив мутирован
 *
 *   push([], 'a');      // 1
 *   push([1], null);    // 2
 */
export function push(array,item){
  const beforeLen = len(array);
  array[beforeLen] = item;
  const afterLen = len(array);
  return afterLen;
}