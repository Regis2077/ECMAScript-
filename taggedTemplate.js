const  tag =  (partes, ...valores) =>{
    console.log(partes)
    console.log(valores)
    return ""
}
const atleta = 'Tom Brady'
const posicao = 'QB'

console.log(tag `${atleta} é ${posicao}`)

// 2

const real = (partes, ...valores) => {
    const resultado = []
    valores.forEach((valor, indice)=> {
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preço = 40
const precoParcela = 5

console.log(real `1x de ${preço} ou 7x de ${precoParcela}.`)