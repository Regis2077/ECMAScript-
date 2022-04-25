const primeiraElemento = ArrayOuString => ArrayOuString[0]
const letraMinuscula = letra =>letra.toLowerCase()

let  p  = new Promise (promessa  => {
    promessa(['Adam', 'Jonas', 'Marta', 'Eva'])
})
    .then (primeiraElemento)
    .then (primeiraElemento)
    .then(letraMinuscula)
    .then (console.log)