import chalk from 'chalk';
import sillyname from 'sillyname';
import promptSync from 'prompt-sync';

console.log(chalk.green("Mensagem colorida"));
console.log(chalk.red("Erro!"));
console.log(chalk.bgBlueBright("Daniel"));

const nomeGerado = sillyname();
console.log(`Nome gerado: ${nomeGerado}`);
console.log(chalk.yellow(sillyname()));

const prompt = promptSync();
const nome  = prompt('Qual é seu nome? ');
console.log(`Olá ${nome}`);

console.log(chalk.bgWhite(`${nome}, seu novo nome é ${sillyname()}`));