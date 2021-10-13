
Agora = new Date
hora = Agora.getHours()

if( hora > 0 && hora < 12){
    console.log(`Bom dia!`)
}if(hora > 12 && hora < 18){
    console.log(`Boa tarde!`)
}if(hora > 18 && hora < 24){
    console.log(`Boa noite!`)
}