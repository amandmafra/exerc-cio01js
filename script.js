let number1 = Number(prompt(`Digite o primeiro número:`))
let number2 = Number(prompt(`Digite o segundo número:`))
let remainder;

function calculator(number1, operator, number2) {
  let result;

  switch(operator) {
    case '+':
      result = number1 + number2
      alert(`A soma é: ${result}`)
      break
    case '-':
      result = number1 - number2
      alert(`A subtração é: ${result}`)
      break
    case '*':
      result = number1 * number2
      alert(`A multiplicação é: ${result}`)
      break
    case '/':
      result = number1 / number2
      remainder = number1 % number2
      alert(`A divisão é: ${result}\nE o resto da divisão é: ${remainder}`)    

    if((number1 + number2) % 2 === 0) {
      alert(`A soma dos números é par`)
    }else {
      alert(`A soma dos números não é par`)
    }

    if(number1 == number2) {
      alert(`Os números inseridos são iguais`)
    }else {
      alert(`Os números inseridos são diferentes`)
    }
  }

  return result;
}

calculator(number1, '+', number2)
calculator(number1, '-', number2)
calculator(number1, '*', number2)
calculator(number1, '/', number2)


















