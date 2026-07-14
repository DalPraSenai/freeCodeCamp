const usuariosMod = require('./usuarios');

console.log("--- Criando Usuários ---");
usuariosMod.criarUsuario("Ana", 28);
usuariosMod.criarUsuario("Carlos", 34);
usuariosMod.criarUsuario("Beatriz", 22);
console.log("Usuários criados com sucesso!\n");

console.log("--- Listando Todos os Usuários ---");
const todos = usuariosMod.listarUsuarios();
console.log(todos);
console.log("\n");

console.log("--- ⭐ Testando o Desafio Extra (Busca) ---");
const busca1 = usuariosMod.buscarUsuarioPorNome("Carlos");
console.log("Busca por 'Carlos':", busca1);

const busca2 = usuariosMod.buscarUsuarioPorNome("Mariana");
console.log("Busca por 'Mariana' (não cadastrada):", busca2);