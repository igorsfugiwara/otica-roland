let maximum = parseInt(prompt("Qual o maior valor?"));
while (!maximum) {
    maximum = parseInt(prompt("Selecione um valor válido"));
}
const targetNum = Math.floor(Math.random()* maximum)+1;
console.log(targetNum);

let guess = parseInt(prompt("Qual seu primeiro palpite:"));
let tentativas = 1;

while (parseInt(guess) !== targetNum){
    if(guess === "q") break;
    tentativas++;
    if (guess >targetNum){
        guess = (prompt("Muito alto, tente denovo:"));
    } else{
        guess = (prompt("Muito baixo, tento novamente:"));
    }
}
if (guess === "q"){
    console.log("Okay, você desistiu.")
}else {
    console.log(`Mandou bem! Você acertou em ${tentativas} tentativas`);
}
