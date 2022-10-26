//                      1


function add(number1, number2) {
    let soma = number1 + number2
    return soma
}
console.log(add(2, 4))
//                      2


function multiply(number1, number2) {
    let multiplica = 0
    for (let cont = 0; cont < number2; cont++) {
        multiplica = add(multiplica, number1)
    } return multiplica
}
console.log(multiply(6, 8))
//                      3


function power(x, n) {
    let potencia = 1
    for (let cont = 0; cont < n; cont++) {
        potencia = multiply(potencia, x)

    } return potencia
}
console.log(power(2, 8))

//                      4

function factorial(number1) {
    let fatorial = 1
    for (let cont = number1; cont > 1; cont--) {
        fatorial = multiply(fatorial, cont)
    } return fatorial
}
console.log(factorial(4))