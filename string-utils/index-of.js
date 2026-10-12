import { checkStrings } from "./helpers/checkStrings";
export function indexOf(str, search) {

    checkStrings(str,search);

    let lenStr = 0;
    let lenSearch = 0;
    let i = 0;
    let j = 0;

    while (str[i] !== undefined) {
        lenStr++;
        i++;
    }

    while (search[j] !== undefined) {
        lenSearch++;
        j++;
    }

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