let listaDeNumerosSorteados=[];
let numeroLimite = 3;
let numeroSecreto = gerarNumeroAleatório();
let tentativas =1;

limparCampo();
//chute.focus();

function exibirTextoNaTela(tag, texto){// Function chama a o nome que foi dade para o click no HTML
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;     
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.3});

}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Bem vindo ao Jogo');
    exibirTextoNaTela('p', 'Escolha um numero de 1 a 10');
    }
exibirMensagemInicial();
    

function verificarChute(){// Function chama a o nome que foi dade para o click no HTML
       let chute = document.querySelector('input').value;
            console.log(chute==numeroSecreto);
            console.log(numeroSecreto);
  
        if(chute == numeroSecreto){
            exibirTextoNaTela('h1','Voce acertou o numero secreto que era o '+ numeroSecreto + '!');
           let palavraTentativa =tentativas >1? 'tentativas': 'tentativa';

            let mensagemTentativas =`Você achou o numero com ${tentativas} ${palavraTentativa}!`;       
                
                exibirTextoNaTela('p', mensagemTentativas);
                document.getElementById('reiniciar').removeAttribute('disabled');

            }else{
                if (chute > numeroSecreto) {
                    exibirTextoNaTela('p', 'O numero secreto é menor');
                    
                }
                    else{
                    exibirTextoNaTela('p', 'O numero secreto é maior');
                    
                    }
            }
            tentativas++;
            limparCampo();
           
    }
verificarChute();



function gerarNumeroAleatório(){
    //   return parseInt(Math.random() *10 +1);
           
        let numeroEscolhido = parseInt(Math.random()*numeroLimite + 1);
        let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
        //let numeroSecreto = gerarNumeroAleatório();
        if(quantidadeDeElementosNaLista==numeroLimite){
            listaDeNumerosSorteados = [];
        }
        

        if (listaDeNumerosSorteados.includes(numeroEscolhido)){
                return gerarNumeroAleatório();
            }else{
                listaDeNumerosSorteados.push(numeroEscolhido);
                console.log(listaDeNumerosSorteados);
                return numeroEscolhido;
            }   
            
}
function limparCampo(){
 
     chute = document.querySelector('input');
    chute.value = '';
    chute.focus();
}


function reiniciarJogo(){
    numeroSecreto=gerarNumeroAleatório();
    tentativas = 1;
     //gerarNumeroAleatório(); 
     exibirMensagemInicial();
     exibirTextoNaTela();
     verificarChute();
     document.getElementById('reiniciarJogo()').setAttribute('disabled', true);
   
}