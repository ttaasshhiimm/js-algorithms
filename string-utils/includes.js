import {
    checkStrings
} from "./helpers/checkStrings";
import {
    indexOf
} from "./index-of";




export function includes(str, search) {
    checkStrings(str, search);
    return indexOf(str, search) >= 0;

}