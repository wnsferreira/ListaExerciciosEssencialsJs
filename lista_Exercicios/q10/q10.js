function pedeCincoNumeros(){
    let numeros = []
    for(i=0; i<5; i++){
        valor = window.prompt("Insira um número inteiro")
        numeros.push(parseInt(valor))
    }

    return numeros
}

console.log(Math.max(...pedeCincoNumeros()))