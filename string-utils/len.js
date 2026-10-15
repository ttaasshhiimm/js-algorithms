import {
    checkString
} from "./helpers/checkStrings";



export function len(str) {

    checkString(str);
    let i = 0;

    while (str[i] !== undefined) {

        i++;
    }

    return i;
}