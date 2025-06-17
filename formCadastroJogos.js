//Aqui vammos pegar o form e a lista para exibir os jogos
const form=document.getElementById('formJogos')
const ListaJogos=document.getElementById('ListaJogos');
//Adiciona o evento de submit ao formulario
form=addEventListener("submit", function(event){
   event.preventDefault(); // Evita o recarregamento da página
 //Pega os valores dos campos do formulario 
 const nomeJogo= document.getElementById("nomeJogo").value;
 const plataforma= document.getElementById('plataforma').value;
 const  anoLançamento= document.getElementById("anoLançamento").value;
 const generoJogo= document.getElementById("generoJogo").value;
    //Criar um novo item na lista de jogos
    const novoJogo = document.createElement('li');
    novoJogo.innerText = `${nomeJogo} -- ${plataforma} -- ${anoLançamento} -- ${generoJogo}`;
    //Adiciona o novo item na lista
    ListaJogos.appendChild(novoJogo);
    form.reset();
});