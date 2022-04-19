// não aceita repetição não indexidas

const times = new Set()
times.add('Vasco')
times.add('Flamengo')
times.add('Corinthians').add('Santos')
times.add('Atlético Mineiro')

console.log(times)
console.log(times.has('vasco')) //letra minuscula
console.log(times.has('Atletico Mineiro')) //sem acento
console.log(times.delete('Santos'))
console.log(times)

