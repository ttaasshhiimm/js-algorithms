export function isMore(a, b) {

    if (typeof a !== 'string' || typeof b !== 'string') {
        throw new TypeError('Аргумент должен быть строкой');
    }

    let lenA = 0;
    let lenB = 0;
    let i = 0;
    let j = 0;

    while (a[i] !== undefined) {
        lenA++;
        i++;
    }

    while (b[j] !== undefined) {
        lenB++;
        j++;
    }

    let minLen = lenA;
    if (lenB < minLen) {
        minLen = lenB;
    }

    for (let i = 0; i < minLen; i++) {
        if (a.charCodeAt(i) > b.charCodeAt(i)) {
            return true;
        }

        if (a.charCodeAt(i) < b.charCodeAt(i)) {
            return false;
        }
    }

    if (lenA > lenB) {
        return true;
    }

    return false;
}