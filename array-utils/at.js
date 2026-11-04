import { checkArray } from "./helpers/checkArray"
import { checkIndexArray } from "./helpers/checkIndexArray";
import { len } from "./len";

export function at(array, index) {
    checkArray(array);  
    checkIndexArray(array,index);  
    if(index<0) {
        index = len(array) - (-index);
    }
    return array[index]
}