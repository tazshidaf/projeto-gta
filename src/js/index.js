/*

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
    Passo 1 - pegar o botão de seleção de plataforma no JS para poder verificar quando o usuário clicar em cima dele

    Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado

    Passo 3 - pegar o clique do usuário no JS

    Passo 4 - quando o usuário clicar no botão, adicionar a classe ativo no conteúdo para aparecer na tela a lista de plataformas

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão de fechar, o conteúdo deve ser escondido

    Passo 1 - verificar se o botão já está aberto, se sim, devemos remover a classe ativo para que ele esconda o conteúdo novamente

*/

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {    
    elementoPlataformas.classList.toggle("ativo");
});

