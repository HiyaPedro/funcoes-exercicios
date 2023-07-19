console.log("Just checking")

// # Exercício 3

/* a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão). */
/*
function firstFunc (num1, num2) {
    const sum = num1 + num2
    console.log(sum)
}

firstFunc(74, 8)

function secondFunc (numA, numB) {
    const subtração = numA - numB
    console.log(subtração)
}

secondFunc(27, 8)

function thirdFunc (numOne, numTwo) {
    const multiplicação = numOne * numTwo
    console.log(multiplicação)
}

thirdFunc(7, 8)

function fourthFunc (numX, numY) {
    const divisão1 = numX / numY
    const divisão = numX%numY
    console.log(divisão1)
    console.log(divisão)
}

fourthFunc(97, 9)
*/
/* b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis. */

const nums1 = Number(prompt("How many donuts did you eat?"))
console.log(nums1)

const nums2 = Number(prompt("How old are you?"))
console.log(nums2)


/* c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário. */

//1
function firstFunc (num1, num2) {
    const sum = num1 + num2
    console.log(sum)
}
firstFunc(nums1, nums2)

//2
function secondFunc (numA, numB) {
    const subtração = numA - numB
    console.log(subtração)
}
secondFunc(nums1, nums2)

//3
function thirdFunc (numOne, numTwo) {
    const multiplicação = numOne * numTwo
    console.log(multiplicação)
}
thirdFunc(nums1, nums2)

//4
function fourthFunc (numX, numY) {
    const divisão1 = numX / numY
    const divisão = numX%numY
    console.log(divisão1)
    console.log(divisão)
}
fourthFunc(nums1, nums2)

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.
//1
function firstFunc (num1, num2) {
    const sum = num1 + num2
    return sum
}
firstFunc(nums1, nums2)

const variavel = firstFunc(nums1, nums2)
console.log(variavel)


//2
function secondFunc (numA, numB) {
    const subtração = numA - numB
    return subtração
}
secondFunc(nums1, nums2)

const variavel2 = secondFunc(nums1, nums2)
console.log(variavel2)

//3
function thirdFunc (numOne, numTwo) {
    const multiplicação = numOne * numTwo
    return multiplicação
}
thirdFunc(nums1, nums2)

const variavel3 = thirdFunc(nums1, nums2)
console.log(variavel3)

//4
function fourthFunc (numX, numY) {
    const divisão1 = numX / numY
    const divisão = numX%numY
    return divisão1
    return divisão
}
fourthFunc(nums1, nums2)

const variavel4 = fourthFunc(nums1, nums2)
console.log(variavel4)


