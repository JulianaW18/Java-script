let passo = 0

while (passo <= 10) {
 console.log(passo)
 passo ++;
}

let nomes = ["Felipe" , "Dino" , "Alan" , "Andrei" , "Anitta"];

// lista[0] = "Felipe Top";
// lista[1] = lista[0] + "Top";
// lista[0] += "Top";

for (let nome of nomes) {
    console.log(nome);

    nome += "TOP";

    console.log(nome);
}