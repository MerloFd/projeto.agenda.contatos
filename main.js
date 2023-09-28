const form = document.getElementById('form-contatos');
const clickExcluir = document.getElementsByClassName('excluir');
let linhas = ''; //para criar novas linhas. Global pois vai ser usada em outras functions

const ligarImg = '<img class="telefonar-img" src="./images/telefone-img.png" alt="telefonar">'
const mensagemImg = '<img class="whatsapp-img" src="./images/whatsapp-logo.png" alt="enviar mensagem"></td>'

const buttonExcluir = '<button class="excluir" type="reset"><img class="lixeira-icon" src="./images/lixeira-icon.png" alt="excluir contatos"></button>'

form.addEventListener('submit', function(e){ //"gatilho" com o button que inicia os eventos
    e.preventDefault();

    adicionaLinha();
    atualizaTable()
})

clickExcluir.addEventListener('click', function(e){
    e.preventDefault();

    form.innerHTML = ligarImg;

})

function adicionaLinha (){

    const inputContato = document.getElementById('contato');
    const inputTel = document.getElementById('telefone');

    //criação sequencial de linhas na table com o "+="
    let linha = '<tr>'
    linha += `<td>${buttonExcluir}</td>`
    linha += `<td>${inputContato.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += `<td>${ligarImg}</td>`;
    linha += `<td>${mensagemImg}</td>`;
    linha += '</tr>'

    linhas += linha; //"reinicia" o ciclo. Cria novas linhas

    //limpando valores dos inputs após o click
    inputContato.value = '';
    inputTel.value = '';
}

function atualizaTable(){
    //da um innerHTML para escrever o conteúdo do adicionaLinha no HTML
    const corpoTable = document.querySelector('tbody');
    corpoTable.innerHTML = linhas;
}