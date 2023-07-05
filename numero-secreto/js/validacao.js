function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute
    if(chute === "jogar novamente"){
        window.location.reload()
    }
    if(chute === "game over" || chute === "parar"){
        document.body.innerHTML= `
            <h2>Game Over!</h2>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        document.body.style.background = "black"
        recognition.stop()
    }    
    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido: número não reconhecido</div>'
        return
    }
    
    if(numeroMaiorOuMenorQueOPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: Fale um valor entre ${menorValor} e ${maiorValor}</div>`
        return
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-thin fa-arrow-down-long fa-solid"></i></div>
        `
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-thin fa-arrow-up-long fa-solid"></i></div>
        `
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou em ${contagem}  tentativas!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
    }
}
function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueOPermitido(numero){{
     return numero < menorValor || numero > maiorValor
}}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
