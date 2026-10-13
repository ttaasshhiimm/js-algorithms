import {
    checkStrings
} from "./helpers/checkStrings";
import {
    indexOf
} from "./index-of";
import { len } from "./len";



export function endsWith(str, suffix) {

    checkStrings(str, suffix);

    const lenStr = len(str);
    const lenSuffix = len(suffix);

    if (lenSuffix === 0) {
        return true;
    }

    if (lenSuffix > lenStr) {
        return false;
    }

    const index = indexOf(str, suffix);

    return index !== -1 && index + lenSuffix === lenStr;
}