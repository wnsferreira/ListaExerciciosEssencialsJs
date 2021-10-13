

let lado1 = window.prompt(`Informe o valor do lado 1 do triângulo:`)
let lado2 = window.prompt('Informe o valor do lado 2 do triângulo:')
let lado3 = window.prompt('Informe o valor do lado 3 do triângulo:')

if((lado2-lado3) < lado1 && lado1 < (lado2 + lado3) || 
   (lado1-lado3) < lado2 && lado2 < (lado1 + lado3) ||
   (lado1-lado3) < lado3 && lado1 < (lado1 + lado2)){

        if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
            console.log('Isósceles')
        } if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
            console.log('Escaleno')
        } if(lado1 === lado2 && lado2 === lado3 && lado1 === lado3){
            console.log('Equilátero')
        }
} else{
    console.error('Não é um triângulo!')
}

