const board = document.getElementById("board");
const rollDiceButton1 = document.getElementById("rollDice1");
const rollDiceButton2 = document.getElementById("rollDice2");
const numCells = 225;
const players = [
  { name: "Jugador 1", position: 0, className: "player1" },
  { name: "Jugador 2", position: 0, className: "player2" },
];

// Inicializar el tablero
for (let i = 0; i < numCells; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  board.appendChild(cell);
}

// Inicializar posiciones de los jugadores
const initializePlayers = () => {
  players.forEach((player) => {
    const cell = board.children[player.position];
    cell.classList.add(player.className);
  });
};

initializePlayers();

const rollDice = (playerIndex) => {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  console.log(`${players[playerIndex].name} ha sacado un ${diceValue}`);
  movePlayer(playerIndex, diceValue);
};

const movePlayer = (playerIndex, diceValue) => {
  const player = players[playerIndex];
  const newPosition = player.position + diceValue;

  if (newPosition >= numCells) return;

  const oldCell = board.children[player.position];
  oldCell.classList.remove(player.className);

  player.position = newPosition;
  const newCell = board.children[player.position];
  newCell.classList.add(player.className);
};

rollDiceButton1.addEventListener("click", () => rollDice(0));
rollDiceButton2.addEventListener("click", () => rollDice(1));
