const form = document.getElementById('form-contatos');
const corpoTable = document.querySelector('tbody');
let linhas = ''; //para criar novas linhas. Global pois vai ser usada em outras functions

const ligarImg = '<img class="telefonar-img" src="./images/telefone-img.png" alt="telefonar">'
const mensagemImg = '<img class="whatsapp-img" src="./images/whatsapp-logo.png" alt="enviar mensagem"></td>'

//onclick= "excluirLinha(event)", gera o parâmetro da function excluir linha quando o elemento é clicado
const buttonExcluir = '<button class="excluir" type="button" onclick="excluirLinha(event)"><img class="lixeira-icon" src="./images/lixeira-icon.png" alt="excluir contatos"></button>'

form.addEventListener('submit', function(e){ //"gatilho" com o button que inicia os eventos
    e.preventDefault();

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

//recebe como parâmetro o button, por meio do onclick diretamente do elemento
function excluirLinha(event){

    //usa o event como alvo (o button excluir), e usa o closest para encontrar o tr mais próximo
    const conteudoLinha = event.currentTarget.closest('tr');

    //remove o tr mais proximo do button, apagando o conteudo
    conteudoLinha.remove();

    //sincroniza o estado de linhas com o estado atual (a linha foi excluida)
    //ele faz isso transformando o conteudo do tbody em uma array sem espaços e atualizando a table
    linhas = Array.from(corpoTable.children)
        .map(row => row.outerHTML)
        .join('');

    atualizaTable();
}