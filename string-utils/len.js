import {
    checkString
} from "./helpers/checkStrings";
export function len(str) {

    checkString(str);

    let count = 0;
    let i = 0;

    while (str[i] !== undefined) {
        count++;
        i++;
    }

    return count;
}