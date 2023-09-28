const form = document.getElementById('form-contatos');
const corpoTable = document.querySelector('tbody');
let linhas = ''; //para criar novas linhas. Global pois vai ser usada em outras functions

const ligarImg = '<img class="telefonar-img" src="./images/telefone-img.png" alt="telefonar">'
const mensagemImg = '<img class="whatsapp-img" src="./images/whatsapp-logo.png" alt="enviar mensagem"></td>'

const buttonExcluir = '<button class="excluir" type="button"><img class="lixeira-icon" src="./images/lixeira-icon.png" alt="excluir contatos"></button>'

document.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Botão Clicado2');

    //atribui o alvo do evento para a const target
    const target = e.target;

    //se alvo tiver como classe 'excluir', execute X
    if (target.classList.contains('excluir')) {
        //chama a function com o alvo de argumento
        excluirLinha(target);
    }
})

form.addEventListener('submit', function(e){ //"gatilho" com o button que inicia os eventos
    e.preventDefault();

    console.log('Botão Clicado1');

    adicionaLinha();
    atualizaTable();
})

function adicionaLinha(){
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
    corpoTable.innerHTML = linhas;
}

//recebe como parâmetro o button
function excluirLinha(button){
        //usa o closest para encontrar o tr mais próximo do button
        const conteudoLinha = button.closest('tr');

        //remove a linha do conteúdo e atualizar a tabela
        linhas = linhas.replace(conteudoLinha.outerHTML, '');
        atualizaTable();
}