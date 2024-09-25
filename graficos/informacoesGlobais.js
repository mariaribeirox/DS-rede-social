const url='https;//raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
async function visualizarinformacoesGlobais(){

const res=await fetch(url)

const dados=await res.json()

//inicio aula 07
const pessoas Conectadas=(dados.total_pessoas-conectadas/1e9)
const pessoasNoMundo=(dados.total_pessoas_mundo/1e9)
const horas=parselnt(dados.tempo_medio)
const minutos=Math.round





}