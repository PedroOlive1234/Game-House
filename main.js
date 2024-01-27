const players = [
    { nome: "Pedro Oliveira", nick: "pedro", jogo_zerado: "Cod", plataforma: "PS4" },
    { nome: "Jogador 2", nick: "nick2", jogo_zerado: "CODS", plataforma: "PS5" },
    { nome: "Jogador 3", nick: "nick3", jogos_zerados: "cod", plataforma: "PC" },
    { nome: "Jogador 4", nick: "nick4", jogos_zerados: "cod", plataforma: "PC" },
    { nome: "Jogador 5", nick: "nick5", jogos_zerados: "cod", plataforma: "PC" },
    { nome: "Jogador 6", nick: "nick6", jogos_zerados: "cod", plataforma: "PC" }
    // Adicione mais jogadores conforme necessário
];

function showPlayerInfo(index) {
    const player = players[index];
    const playerInfoContainer = document.getElementById("player-info");
    playerInfoContainer.innerHTML = `
        <h2>${player.nome}</h2>
        <p>Nick: ${player.nick}</p>
        <p>Jogo Zerado: ${player.jogo_zerado}</p>
        <p>Plataforma: ${player.plataforma}</p>
    `;
    playerInfoContainer.style.display = "block";
}