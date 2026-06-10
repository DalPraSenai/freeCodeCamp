const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade");
const inputCurso = document.querySelector("#curso");

const nome = inputNome.value;
const idade = Number(inputIdade.value);
const curso = inputCurso.value;
console.log(`Nome: ${nome} | Idade: ${idade} | Curso: ${curso}`);