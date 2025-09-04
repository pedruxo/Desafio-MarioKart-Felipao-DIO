import { rollTwoDice } from "./dice.js";
import { getRandomBlock } from "./track.js";
import { confronto } from "./battle.js";

export async function playRaceEngine(player1, player2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);
    let block = getRandomBlock();
    console.log(`Bloco: ${block}`);

    let dice1 = rollTwoDice();
    let dice2 = rollTwoDice();

    if (block === "RETA") {
      let total1 = dice1 + player1.VELOCIDADE;
      let total2 = dice2 + player2.VELOCIDADE;
      console.log(`${player1.NOME} fez ${total1}, ${player2.NOME} fez ${total2}`);
      if (total1 > total2) player1.PONTOS++;
      else if (total2 > total1) player2.PONTOS++;
    }

    if (block === "CURVA") {
      let total1 = dice1 + player1.MANOBRABILIDADE;
      let total2 = dice2 + player2.MANOBRABILIDADE;
      console.log(`${player1.NOME} fez ${total1}, ${player2.NOME} fez ${total2}`);
      if (total1 > total2) player1.PONTOS++;
      else if (total2 > total1) player2.PONTOS++;
    }

    if (block === "CONFRONTO") {
      confronto(player1, player2, dice1, dice2);
    }

    console.log("-----------------------------");
  }
}

export function declareWinner(player1, player2) {
  console.log("Resultado final:");
  console.log(`${player1.NOME}: ${player1.PONTOS}`);
  console.log(`${player2.NOME}: ${player2.PONTOS}`);

  if (player1.PONTOS > player2.PONTOS)
    console.log(`🏆 ${player1.NOME} venceu a corrida!`);
  else if (player2.PONTOS > player1.PONTOS)
    console.log(`🏆 ${player2.NOME} venceu a corrida!`);
  else console.log("A corrida terminou em empate!");
}
