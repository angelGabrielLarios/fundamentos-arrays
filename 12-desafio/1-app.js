/* 
Dado un array de string que son nombres de cartas de poker debes retornar la palabra "AS" si dentro de tu baraja tienes un "AS" y un false si no lo tienes.

La solución debería tener un input y output como los siguientes:

solution(['diamonds', 'hearts', 'spades', 'AS']);
solution(['diamonds', 'hearts', 'spades']);

Output

"AS"
false
*/

function solution(cards) {
    return cards.includes('AS') ? 'AS' : false
}; 

console.log(solution(['diamonds', 'hearts', 'spades', 'AS']));
console.log(solution(['diamonds', 'hearts', 'spades']));

