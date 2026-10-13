import {
    checkStrings
} from "./helpers/checkStrings";
import {
    len
} from "./len";




export function indexOf(str, search) {

    checkStrings(str, search);

    let lenStr = len(str);
    let lenSearch = len(search);


    if (lenSearch > lenStr) {
        return -1;
    }

    for (let i = 0; i <= lenStr - lenSearch; i++) {
        let match = true;

        for (let j = 0; j < lenSearch; j++) {
            if (str[i + j] !== search[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            return i;
        }
    }

    return -1;
}