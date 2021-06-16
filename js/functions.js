//is recomendable to use arrow functions by securrity becasue as const if cant be reassigned
const sum = (a, b) => {
    return a + b
}

const result = sum(2,3)
console.log(result)


function test(a,b) {
    return a+b;
}

console.log(test(6,6))