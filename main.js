const form = document.getElementById('form-contato');
let linhas =  '' ;
const contatos = [];
const totalContatos = document.getElementById('total-contatos');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotal();
});

function adicionaLinha(){
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if (contatos.some(contato => contato.nome === inputNome.value && contato.telefone === inputTelefone.value)) {
        alert(`O contato ${inputNome.value} com o telefone ${inputTelefone.value} já existe`);
        return;
    }
    
    if (inputNome.value.trim() === '' || inputTelefone.value.trim() === ''){
        alert('Por favor, preencha todos os campos');
        return;
    }

    contatos.push({nome: inputNome.value, telefone: inputTelefone.value});

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha; 

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaTotal(){
    totalContatos.textContent = contatos.length;
}
