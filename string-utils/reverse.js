import {
    checkString
} from "./helpers/checkStrings";
import {
    len
} from "./len";






export function reverse(str) {

    checkString(str);

    const lenStr = len(str);
    let reverseStr = '';

    for (let i = lenStr - 1; i >= 0; i--) {
        reverseStr += str[i];
    }


    return reverseStr;
}