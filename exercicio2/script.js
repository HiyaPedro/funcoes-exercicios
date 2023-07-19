console.log("Just checking")

/* # Exercício 2
Declare e invoque as funções abaixo:

a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.
*/ 

function receiveTwoNumbers (num1, num2) {
    const sum = num1 + num2
    console.log(sum)
}
 receiveTwoNumbers(3, 5)


/* b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
*/

function maiorOuIqual (num1, num2) {
    const boolean = num1 > num2 || num1 === num2
    console.log(boolean)
}

maiorOuIqual(8, 4)

/*
c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.
*/

function numberIsEvenOrNot (number) {
    const par = number%2===0
    console.log(par)
}

numberIsEvenOrNot(9)

/*
d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.
*/

function grossSalary (number) {
    const desconto = number - (.10 * number)
    console.log(desconto)
}

grossSalary(200)
