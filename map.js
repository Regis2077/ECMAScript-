const scuderia = new Map()
scuderia.set('ferrari', {position: 1})
scuderia.set ('Mercedes', {position: 2})

console.log(scuderia)
console.log(scuderia.get('ferrari'))

const chavesExemplos = new Map([
    [function () { }, 'função'],
    [{}, 'objeto'],
    [123, 'numero']
])

chavesExemplos.forEach((vl, ch) =>{
    console.log(ch, vl)
})

console.log(chavesExemplos.has(123))
console.log(chavesExemplos.size)