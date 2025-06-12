//1. Pega o formulario pelo seu id
const formCadastro= document.getElementById('formCadastro');
//2. Adiciona um evento de submit (enviar)ao formulario
formCadastro.addEventListener
('submit',function(evento){
    evento.preventDefault();//evita recarregar pagina 
    //3. Pega os valores dos campos do formulario
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const date= document.getElementById('data de nascimento').value;
//4. Mostrar o resultado na tela
document.getElementById('resultado').innerHTML=
`<p>Nome:${nome}</p><br>
<p>Email:${email}</p><br>
<p>Senha:${senha}</p><br>
<p>Cpf:${cpf}</p><br>
<p>telefone:${telefone}</p><br>
<p>date:${date}</p><br>`
})