const bancoDeUsuarios = [];

function criarUsuario(nome, idade) {
    const novoUsuario = { nome, idade };
    bancoDeUsuarios.push(novoUsuario);
    return novoUsuario;
}

function listarUsuarios() {
    return bancoDeUsuarios;
}

function buscarUsuarioPorNome(nome) {
    return bancoDeUsuarios.find(
        usuario => usuario.nome.toLowerCase() === nome.toLowerCase()
    );
}

module.exports = {
    criarUsuario,
    listarUsuarios,
    buscarUsuarioPorNome
};