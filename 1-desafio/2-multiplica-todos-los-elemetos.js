/* 
En este desafío tienes un array de números, usando la función map debes retornar todos los números del array multiplicados por dos.

La solución debería tener un input y output como los siguientes:

Input
*/
function solution(array) {
    return array.map(numero => numero * 2);
};
let res = solution([2, 4, 5, 6])
console.log(res)


console.log(Array.prototype)

Array.prototype.miMap = function(fn) {
    const res = [];
    for(const item of this) {
        res.push(fn(item))
    }
    return res;
}


const arr = [7, 8, 9]

console.log(arr.miMap(item => item * 3));




