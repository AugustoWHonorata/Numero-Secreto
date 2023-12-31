const elementoChute = document.getElementById('chute')
var contagem = 1

window.SpeechRecognition =
  window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
    contagem ++
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', ()=> {
    if(chute === "game over" || chute === "parar"){
        recognition.stop()
    }else {
        recognition.start()
    }
})
