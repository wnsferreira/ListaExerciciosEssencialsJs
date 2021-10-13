function VerificaTipoLetra(letra){
    let vogais = ['a', 'e', 'i', 'o', 'u']
    const resultado = vogais.filter(function(elemento){
        return elemento.toLocaleLowerCase() === letra.toLocaleLowerCase()
    })
    
    return resultado.length > 0 ? "Vogal" : "Consoante"
}

function SolicitarLetra(){
    letra = window.prompt(`Insira uma letra:`)
    if(EhUmaLetra(letra)){
        return letra
    }
}

function EhUmaLetra(letra){
    if(!isNaN(letra)){
        console.error(`Você deve inserir uma letra!`)
        return false
    } else if (letra.length > 1) {
        console.error(`Você deve inserir apenas uma letra!`)
        return false
    }
    return letra.length == 1
}

letraEntrada = SolicitarLetra()
if (letraEntrada != null){
    const resultado = VerificaTipoLetra(letraEntrada)
    console.log(`A letra ${letraEntrada} é uma ${resultado}`)
}