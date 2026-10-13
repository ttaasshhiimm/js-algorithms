import {
    checkString
} from "./helpers/checkStrings";
import {
    checkNumber
} from "./helpers/checkNumber";





export function repeat(str, count = 0) {

    checkString(str);
    checkNumber(count);

    let strOut = '';

    count = Math.floor(count)

    if (count < 0) {
        throw new RangeError('Аргумент должен быть больше 0');
    }

    for (let i = 0; i < count; i++) {
        strOut += str;
    }

    return strOut;
}