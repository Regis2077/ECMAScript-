//usado para processamento assíncronos 

function waitResponse(segundos, frase) {
    return new Promise ((resolve, rejecti) => {
        setTimeout (() => { //simulando processamento
            resolve(frase)
        }, segundos * 1000)

    })
}

waitResponse(2,'resposta após 2 segundos')
    .then(frase => frase.concat('frase adicionada com then'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))
//promises recebe apenas um único parâmetro