export function checkString(value) {
    if (typeof value !== 'string') {
        throw new TypeError('Аргумент должен быть строкой');
    }
}

export function checkStrings(a, b) {
    checkString(a);
    checkString(b);
}