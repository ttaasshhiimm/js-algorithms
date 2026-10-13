import {
    checkStrings
} from "./helpers/checkStrings";
import { len } from "./len";





export function isLessOrEqual(a, b) {

    checkStrings(a, b);

    const lenA = len(a);
    const lenB = len(b);

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