function applyPenalty(player, penalty) {
  player.PONTOS = Math.max(0, player.PONTOS + penalty);
}

export function confronto(player1, player2, dice1, dice2) {
  let result1 = dice1 + player1.PODER;
  let result2 = dice2 + player2.PODER;

  console.log(`${player1.NOME} confrontou com ${player2.NOME}! 🥊`);
  console.log(`${player1.NOME}: ${result1} | ${player2.NOME}: ${result2}`);

  if (result1 === result2) {
    console.log("Confronto empatado!");
    return;
  }

  let vencedor = result1 > result2 ? player1 : player2;
  let perdedor = vencedor === player1 ? player2 : player1;

  // Penalidade
  let penalty = Math.random() < 0.5 ? -1 : -2;
  let item = penalty === -1 ? "um casco 🐢" : "uma bomba 💣";
  applyPenalty(perdedor, penalty);
  console.log(`${vencedor.NOME} acertou ${item} em ${perdedor.NOME}!`);

  // Turbo
  if (Math.random() < 0.5) {
    vencedor.PONTOS++;
    console.log(`${vencedor.NOME} ganhou um TURBO! ⚡ (+1 ponto)`);
  }
}
// A função realiza um confronto entre dois jogadores, aplicando penalidades e bônus conforme o resultado