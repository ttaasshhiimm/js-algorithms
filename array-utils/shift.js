import { len } from "./len";

export function shift(array) {
    const currLen = len(array);
    
    if (currLen === 0) {
        return undefined;   
    }

    const firstEl = array[0];

    for (let i = 0; i < currLen - 1; i++) {
        array[i] = array[i + 1];
    }

    delete array[currLen - 1];

    return firstEl;
}