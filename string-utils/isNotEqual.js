import {
    checkStrings
} from "./helpers/checkStrings";
export function isNotEqual(a, b) {

    checkStrings(a, b);
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



    if (lenA !== lenB) {
        return true
    }

    for (let i = 0; i < lenA; i++) {
        if (a.charCodeAt(i) !== b.charCodeAt(i)) {
            return true;
        }
    }



    return false;
}