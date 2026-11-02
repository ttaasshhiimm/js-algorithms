export function checkNumber(value) {
    if (typeof value !== 'number' && typeof value !== 'undefined') {
        throw new TypeError('Аргумент должен быть числом');
    }
}