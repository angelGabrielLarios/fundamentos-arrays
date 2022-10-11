/* 
En este desafío tienes un array de objetos que representan datos de personas con los siguientes atributos:
-name
-lastName
-age
El reto aquí es retornar un array de strings con los nombres, la solución debería tener un input y output como los siguientes:

Input:
[
    {
        name: 'Nicolas',
        lastName: 'Molina',
        age: 28
    },
    {
        name: 'Valentina',
        lastName: 'Molina',
        age: 19
    },
    
]

Output:

['Nicolas', 'Valentina']
*/

const testArr = [
    {
        name: 'Nicolas',
        lastName: 'Molina',
        age: 28
    },
    {
        name: 'Valentina',
        lastName: 'Molina',
        age: 19
    },
    
]

function solution(array) {
    return array.map(person => person.name)
};

const angel = array => {
    const res = [];
    for(const person of array) {
        res.push(person.name);
    }
    return res;
}


console.log(solution(testArr))
console.log(angel(testArr))

