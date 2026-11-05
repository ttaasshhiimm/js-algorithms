import { len } from "./len";
export function pop(array) {
    let lenBefore = len(array);
    const deleted = array[lenBefore-1];
    delete array[lenBefore-1];
    return deleted;
}