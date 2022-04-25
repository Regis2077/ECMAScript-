const { rejects } = require('assert')
const http = require ('http')

const getTurma = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
         http.get (url, res =>{
             let result = '' 
             res.on('data', dados =>{
                 result +=dados
             })
             res.on('end', ()=>{
                 try {
                     resolve(JSON.parse(result))
                 } catch (e) {
                     reject(e)  
                 }
             })
         })

    })
}
let obterAluno = async () =>{
    const turmaA = await getTurma('A')
    const turmaB= await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
}
obterAluno()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))

