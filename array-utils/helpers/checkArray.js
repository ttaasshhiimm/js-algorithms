export function checkArray(array) {
    if(!(Array.isArray(array))) {
        throw new TypeError('Аргумент должен быть массивом!');
    }
}