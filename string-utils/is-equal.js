import { len } from './len';
import { checkStrings } from './helpers/checkStrings';



export function isEqual(a, b) {
    checkStrings(a, b);

    const lenA = len(a);
    const lenB = len(b);

    if (lenA !== lenB) {
        return false;
    }

    for (let i = 0; i < lenA; i++) {
        if (a.charCodeAt(i) !== b.charCodeAt(i)) {
            return false;
        }
    }

    return true;
}