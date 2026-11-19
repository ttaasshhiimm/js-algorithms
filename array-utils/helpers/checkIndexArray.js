export function checkIndexArray(array,index) {
    if(typeof(index)!=='number') {
        throw new TypeError('Аргумент для индекса должен быть числом');
    }
}