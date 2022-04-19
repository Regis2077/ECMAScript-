// operador ... espalhar -> spread, Juntar -> rest

const diretor = {
    nome:'Stanley Kubrick',
    nacionalidade: 'americano'
}

const filme = {
    título: 'Laranja mecânica',
    gênero: 'cult',
    ...diretor
}
console.log(diretor)
console.log(filme)

// Em arrays

const grupoSorteado = ['camarões', 'servia', 'suiça']

const cabeçaDeChave = ['Brasil', ...grupoSorteado]

console.log(grupoSorteado)
console.log(cabeçaDeChave)