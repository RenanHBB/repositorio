// Função para gerar ID único
function gerarId() {
    return Math.floor(Math.random() * 1000);
}

function cadastrarPessoas() {
    nome = prompt("Digite seu nome: ");
    idade = prompt("Digite sua idade: ");
    cidade = prompt("Digite sua cidade: ");

const pessoa = {
    ID: gerarId(),
    nome: nome,
    idade: idade,
    cidade: cidade,
};
pessoaCadastrada.push(pessoa);
}
function atualizarPessoa(id, camposAtualizados) {
    const pessoa = pessoas.find(p => p.id === id);
    if (pessoa) {
        Object.assign(pessoa, camposAtualizados);
    }
}

function deletarPessoa(id) {
    pessoas = pessoas.filter(p => p.id !== id);
}
function listarPessoas() {
    console.log(pessoasCadastradas);
}
