for (let letras  of 'vasco') {
console.log(letras)
}

const pilotos = ['lewis hamilton', 'max verstappen', 'daniel ricciardo', 'charles leclerc']
for (let i in pilotos){
    console.log(i)    
}
for (let nomes of pilotos){
    console.log(nomes)    
}

const pilotosMap = new Map([
    ['hamilton', {scuderia: 'Mercedes'}],
    ['verstappen', {scuderia: 'Red Bull'}],
    ['Leclerc', {scuderia: 'Ferrari'}],

])

for (let infoF1 of pilotosMap){
    console.log(infoF1)    
}

for (let infoF1 of pilotosMap.keys()){
    console.log(infoF1)
}
for (let infoF1 of pilotosMap.values()){
    console.log(infoF1)
}

for (let [ch, vl] of pilotosMap.entries()){
    console.log(ch, vl)
}