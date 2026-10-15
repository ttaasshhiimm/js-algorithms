export function checkNumber(value) {
    if (typeof value !== 'number') {
        throw new TypeError('Аргумент должен быть числом');
    }
}