/* 

Calcula y agrega una nueva propiedad en un Array

Tienes un array de productos con los siguientes atributos:

name
price
stock

Debes agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales.

La solución debería tener un input y output como los siguientes:

solution([
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20
    },
]);

Output

[
    {
        name: "Product 1",
        price: 1000,
        stock: 10,
        taxes: 190
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20,
        taxes: 380
    },
]
*/

const arrTest = [
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20
    },
]


const outputArr  = [
    {
        name: "Product 1",
        price: 1000,
        stock: 10,
        taxes: 190
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20,
        taxes: 380
    },
]

function solution(array) {
    const res = []
    array.forEach(product => {
        product.taxes = product.price * 0.19;
        res.push(product)
    });

    return res
}

console.log(outputArr)
/* console.log(solution(arrTest)) */
const a = solution(arrTest)
console.log(JSON.stringify(outputArr) === JSON.stringify(a))


function solutionPlatzi(array){
    return array.map(item => ({
        ...item,
        taxes: Math.trunc(item.price * .19)
    }));

    /* 
    el metodo Math.trunc => le quita los decimales a un numero
    */
}; 

console.log(solution(arrTest))
console.log(solutionPlatzi(arrTest))


