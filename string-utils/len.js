export function len(str) {

    if(typeof str !== 'string') {
        throw new TypeError('Аргумент должен быть строкой');
    }
    let count = 0;
    let i = 0;

    while(str[i] !== undefined) {
        count++;
        i++;
    }

    return count;
}
