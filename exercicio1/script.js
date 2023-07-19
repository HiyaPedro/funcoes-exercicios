console.log("Just checking")

/* # Exercício 1

a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
*/
function sayHello (name) {
    console.log(`Olá ${name}`)
}

sayHello("Peter")

// b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.

/*function tabua (number) {
    console.log(number*1) 
    console.log(number*2)
    console.log(number*3)
    console.log(number*4)
    console.log(number*5)
    console.log(number*6)
    console.log(number*7)
    console.log(number*8)
    console.log(number*9)
    console.log(number*10)
}

tabua(5)
*/

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

 const printTableOfNumbers = (number) => {
    console.log(number*1) 
    console.log(number*2)
    console.log(number*3)
    console.log(number*4)
    console.log(number*5)
    console.log(number*6)
    console.log(number*7)
    console.log(number*8)
    console.log(number*9)
    console.log(number*10)
}

printTableOfNumbers(3)


