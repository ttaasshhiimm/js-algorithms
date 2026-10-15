import {
    checkStrings
} from "./helpers/checkStrings";
import {
    indexOf
} from "./index-of";




export function startsWith(str, prefix) {

    checkStrings(str, prefix);

    return indexOf(str, prefix) === 0;
}