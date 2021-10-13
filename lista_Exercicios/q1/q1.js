let total = 0
let numeroDeNota = 4

for(i=0; i < 4; i++){
  let nota = window.prompt('Insira a nota ${i}')
  total += parseFloat(nota)
  console.log(nota)
}
console.log(total/4)
