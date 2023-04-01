var idade = 15
console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log('Você não vota!')
}else if(idade < 18 || idade > 64){
    console.log('Seu voto é opcional!')
}else{
    console.log('Seus voto é obrigatório!')
}

