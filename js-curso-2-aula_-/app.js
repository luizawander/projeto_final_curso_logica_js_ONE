function exibirTextoNaTela(tag, texto){
    let campo=document.querySelector(tag);
    campo.innerHTML =(texto)

}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela ('p', 'Escolh aum número de 1 a 10')

function verificarChute (){
    console.log('o botão foi clicado');
}