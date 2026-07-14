console.log("Hello Word! com NodeJs");

let nome = "Jonas Balonas";
let idade = 18;

console.log("Nome: ", nome);
console.log("Idade: ", idade);

let nomeUser = process.argv[2]; //Sempre assim para pegar a input, do 2 pra frente.
// na posição 0, ele pega o caminho do arquivo
// na posição 1, ele pega o caminho do node

console.log("Olá ", nomeUser); 

//-----------------------------------------
let nomeAgente = process.argv[3];
let idadeAgente = process.argv[4];

console.log("\n==== Cadastro de Agentes ===");

console.log("Nome: ", nomeAgente);
console.log("Idade: ", idadeAgente);

if(idadeAgente >= 18){ 
    console.log("Status: Agente autorizado");
} else{
    console.log("Status: Acesso restrito");
}