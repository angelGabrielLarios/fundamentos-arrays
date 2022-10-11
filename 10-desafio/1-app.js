/* 
En este desafío tienes un array de números y debes retornar true si dentro de los números de ese array al menos uno es un número par.

La solución debería tener un input y output como los siguientes:

solution([1, 3, 5, 7, 10, 11]);
solution([1, 3, 5]);

Output

true
false
*/

const test = [1, 3, 5, 7, 10, 11];

function solution(numbers) {
    /* return numbers.some(numero => ((numero % 2) === 0)); */
    
    for(numero of numbers) {
        if(numero % 2 === 0) {
            return true
        }
    }
    return false
}; 


const test1 = [1, 3, 5, 7, 10, 11];
const test2 = [1, 3, 5];

console.log(solution([1, 3, 5, 7, 10, 11]));
console.log(solution([1, 3, 5]));

