

let degraus = Number(prompt("Quantos degraus tem sua escada?"));
let i = 0;
let caracter = "##";
let escada = "";
caracter = prompt("Qual o material da sua escada?");

while (i < degraus) {
    escada += caracter;
    console.log(escada);
    i++;
}