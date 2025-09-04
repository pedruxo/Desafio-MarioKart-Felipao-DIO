import { personagens } from "./characters.js";
import { playRaceEngine, declareWinner } from "./raceEngine.js";

function getRandomCharacter(excludeIndex = -1) {
  let index;
  do {
    index = Math.floor(Math.random() * personagens.length);
  } while (index === excludeIndex); // garante que não sorteie o mesmo
  return { ...personagens[index] }; // copia o objeto
}

(async function main() {
  // Sorteando os dois personagens diferentes
  let player1 = getRandomCharacter();
  let player2 = getRandomCharacter(personagens.indexOf(player1));

  console.log(`🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);

  await playRaceEngine(player1, player2);
  declareWinner(player1, player2);
})();
// Função principal que inicia a corrida entre dois personagens sorteados aleatoriamente