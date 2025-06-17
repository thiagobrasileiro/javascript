//Aqui vammos pegar o form e a lista para exibir os filmes
const form = document.getElementById('formFilme');
const lista=document.getElementById("listaFilmes");
//Adiciona o evento de submit ao formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página
    //Pega os valores dos campos do formulario
    const titulo = document.getElementById('titulo').value; 
    const ano =document.getElementById('ano').value;
    const genero =document.getElementById('genero').value;
    //Criar um novo item na lista de filmes 
const novoFilme = document.createElement ('li');
novoFilme.innerText= `${titulo} -- (${ano}) -- ${genero}`;
//Adiciona o novo item na lista
lista.appendChild(novoFilme);
form.reset();
});
