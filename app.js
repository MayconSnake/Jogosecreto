let listaDeNumeroSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){


exibirTextoNaTela('h1','Jogo do número secreto' );
exibirTextoNaTela('p', 'escolha entre o número 1 e 10 ' );

}

exibirMensagemInicial();


function verificarChute() {
   let chute = document.querySelector('input').value;
   
   if (chute == numeroSecreto) {
       exibirTextoNaTela('h1', 'Acertou!');
       let pavavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
       let mensagemTetativas = `Você descobriu o número secreto com ${tentativas} ${pavavraTentativa} !`;
               exibirTextoNaTela('p', mensagemTetativas);
               document.getElementById('reiniciar').removeAttribute('disabled');
       } else {
               if (chute > numeroSecreto) {
                       exibirTextoNaTela('p', 'O número secreto é menor');
               } else {
                       exibirTextoNaTela('p', 'O número secreto é maior');
               }
               tentativas ++;
               limparCampo();
       }
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
 }


 function limparCampo(){
        chute = document.querySelector('input');
        chute.value= '';
 }


 function reiniciarjogo(){
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);

 }