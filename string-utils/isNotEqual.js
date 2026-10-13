import {
    checkStrings
} from "./helpers/checkStrings";

import {
    len
} from './len';





export function isNotEqual(a, b) {

    checkStrings(a, b);

    const lenA = len(a);
    const lenB = len(b);

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