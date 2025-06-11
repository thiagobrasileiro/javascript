console.log("olá Mundo!!");
let nome = "Smigle";
console.log(nome);
let nomeAprendiz = "Umavezildo";
let saudacao = "Que a força esteja com você "+nomeAprendiz;
console.log("Livro de Magias carregado!");
console.log(saudacao);

// Primeira Função em Javascript
function mudarTitulo(novoTitulo){
    let titulo = document.querySelector("h1");
    //MUDAR O TITULO DO H1
    titulo.textContent= novoTitulo;
}

//chamar o botão e a div de habilidades
let botaoMagico = document.querySelector("#Botão-mágico");
let habilidades = document.querySelector("#habilidades");
let botaoesconder = document.querySelector("#Botão-esconder");
//adicionar um ouvinte ao evento click do botão
botaoMagico.addEventListener("click",function() { 
    //Esse código só executa quando o botão for clicado
    console.log( " botão clicado!!");
habilidades.style.display="block";
alert("habilidades desbloqueadas")
})
botaoesconder.addEventListener("click",function(){
    console.log("botão clicado!!");
    habilidades.style.display="none";
})
