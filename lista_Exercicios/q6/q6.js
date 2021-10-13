let total = 0
let numeroDeNota = 4


for(i=0; i < 4; i++){
  let nota = window.prompt('Insira a nota ${i}')
  if(nota >= 0 && nota <= 10){
    total += parseFloat(nota)
    console.log(nota)
  } else{
      console.error(`Insira um valor positivo!`)
  }
  
}
media = total/4
console.log(`Média ${media}`)

if(media >= 7 && media < 10){
    console.log(`aprovado`)
} if(media < 7){
    console.log(`reprovado`)
} if(media === 10){
    console.log(`aprovado com distinção`)
}
