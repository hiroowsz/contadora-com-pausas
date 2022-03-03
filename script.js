function contar(){
let initxt = document.getElementById('ini')
let endtxt = document.getElementById('end')
let pastxt = document.getElementById('pas')
let resultado = document.getElementById('res') 

if (initxt.value.length == 0 || endtxt.value.length == 0 || pastxt.value.length == 0){
    resultado.innerHTML = ''
    alert('[ERRO] Há dados faltando!') // pega a quantidade de caracteres

 } else if (pastxt.value <= 0){
   alert('[ERRO] O número de passos tem que ser igual ou superior a 1.')
   pastxt.value = 1
}  else{ 
    resultado.innerHTML = 'Contando: '
    let ini = Number(initxt.value)
    let end = Number(endtxt.value)
    let pas = Number(pastxt.value)
    // numero progressivo abaixo
    if (ini < end){
            for(let c = ini; c < end; c += pas)    

            resultado.innerHTML += `${c} \u{1F449} `
         } else if (ini > end){
          for(let c2 = ini; c2 > end; c2 -= pas)

            resultado.innerHTML += `${c2} \u{1F449}`
         }
            resultado.innerHTML += `\u{1F3C1}`
      } 
   }