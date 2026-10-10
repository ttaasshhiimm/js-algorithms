import {
    checkStrings
} from "./helpers/checkStrings";
export function isLessOrEqual(a, b) {

    checkStrings(a, b);

    let lenA = 0;
    let i = 0;
    while (a[i] !== undefined) {
        lenA++;
        i++;
    }

    let lenB = 0;
    let j = 0;
    while (b[j] !== undefined) {
        lenB++;
        j++;
    }

    let minLen = lenA;
    if (lenB < minLen) {
        minLen = lenB;
    }


    for (let i = 0; i < minLen; i++) {

        if (a.charCodeAt(i) < b.charCodeAt(i)) {
            return true;
        }

        if (a.charCodeAt(i) > b.charCodeAt(i)) {
            return false;
        }

    }


    return lenA <= lenB;
}