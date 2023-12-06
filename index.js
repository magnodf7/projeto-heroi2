// Solicitar o nome e a quantidade de experiência (XP) do herói
let nomeDoHeroi = ("Homem de Ferro:");
let xpDoHeroi = (("10002 (XP) do Homem de Ferro:"));

// Utilizar uma estrutura de decisão para determinar o nível do herói
let nivel;

if (xpDoHeroi < 1000) {
    nivel = "Ferro";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    nivel = "Prata";
} else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    nivel = "Platina";
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibir a mensagem com o nome e o nível do herói
console.log(`${nomeDoHeroi} está no nível de ${nivel}`);
